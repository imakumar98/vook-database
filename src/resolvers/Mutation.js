const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {randomBytes} = require('crypto');
const  {promisify} = require('util');
const axios = require('axios');


const Mutation = {

    
    // async createBook(parent,{title,author,publisher,className,subject,category,edition,quantity,detail,description,mrp,discount,tags,image1,image2,image3,image4,image5},ctx,info){
    //     const book = await ctx.db.mutation.createBook({
    //         data: {
    //             // title,author,publisher,className,subject,category,edition,quantity,detail,description,mrp,discount,tags,image1,image2,image3,image4,image5
    //             title,
    //             // author,
    //             // publisher,
    //             // className,
    //             // subject,
    //             // category,
    //             // edition,
    //             // quantity,
    //             // mrp,
    //             // discount
    //         }
    //     },info);
        
        
    //     return book;
    // },

    

    async createProduct(parent,args,ctx,info){
        var product = ctx.db.mutation.createProduct({
            data: {
                title: args.title,
                author: args.author,
                publisher: args.publisher,
                className: args.className,
                subject: args.subject,
                category: args.category,
                edition: args.edition,
                quantity: args.quantity,
                detail: args.detail,
                description: args.description,
                mrp: args.mrp,
                discount: args.discount,
                tags: args.tags,
                //images: args.images
            }
        },info);

        return product;
    },

    

    //Sign Up resolver
     async signup(parent,args,ctx,info){
        //Lower the email address
        args.email = args.email.toLowerCase();
        //Hash the password
        args.password = await bcrypt.hash(args.password,10);

        //Create the user
        const user = await ctx.db.mutation.createUser({
            data: {
               ...args,
               password : args.password,
               permissions: {set: ['USER']}
            }
        },info);

        //Create JWT token 
        const token = jwt.sign({userId: user.id},process.env.TOKEN_SALT);
        //We set the jwt as a cookie on the response
        ctx.response.cookie('token',token,{
            httpOnly: true,
            maxAge: 1000 * 60 * 24 * 365,//1 year
        });
        //Finally return user to browser
        return user;


     },

     async signin(parent,{email,password},ctx,info){
        //1. Check if there is a user with that email
        const user = await ctx.db.query.user({where: {email}});
        if(!user){
            throw new Error(`No such user found for email ${email}`);
        }
        //2. Check if their passsword is correct
        const valid = await bcrypt.compare(password,user.password);
        if(!valid){
            throw new Error('Invalid Password');
        }
        //3. Generate the JWT token
        const token = jwt.sign({userId: user.id},process.env.TOKEN_SALT);
        //4. Set the cooki with the token
        ctx.response.cookie('token',token,{
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365,//1 year
        });
        //5. Return the User
        return user;

     },
    signout(parent,args,ctx,info){
         ctx.response.clearCookie('token');
         return {message:  'Goodbye!'};
     },

    async requestReset(parent,args,ctx,info){
        //1. Check if user is real
        const user = await ctx.db.query.user({where: {email:args.email}});
        if(!user){
            throw new Error(`No such user found for email ${args.email}`);
        }

        //2. Set a reset token and expiry on that user
        const randomBytesPromisified = promisify(randomBytes);
        const resetToken = (await randomBytesPromisified(20)).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; //1 hour from now
        const res = await ctx.db.mutation.updateUser({
            where : {email:args.email},
            data: {resetToken,resetTokenExpiry}
        });
        
        //3. Email them that reset token
        const response = await axios({
            method: 'post',
            url: process.env.ELASTIC_EMAIL_API_URL,
            responseType: 'json',
            params: {
                apikey: process.env.ELASTIC_EMAIL_API_KEY,        
                to: args.email,
                isTransactional: true,
                template: 17793,
                merge_customerName: user.name,
                merge_resetToken: process.env.FRONTEND_URL + '/reset?resetToken='+resetToken
            }
        })
        if(!response.data.success){
            throw new Error("Something went wrong");
        }

        //4. Return the message 
        return {message : 'Thanks!'};
        
    },

    async resetPassword(parent,args,ctx,info){
        //1. Check if the password match
        if(args.password !== args.confirmPassword){
            
            throw new Error("Passwords dont match");
        }
        //2. Check if its a legit reset token
        //3. Check if its  expired
        const [user] = await ctx.db.query.users({
            where: {
                resetToken: args.resetToken,
                resetTokenExpiry_gte: Date.now() - 3600000
            }
        });
        if(!user){
            throw new Error("This token is either invalid or expired!");
        }
        
        //4. Hash new password
        const password = await bcrypt.hash(args.password,10) ;
        //5. Save the new password to the user and remove old resetToken fields
        const updatedUser = await ctx.db.mutation.updateUser({
            where: {email: user.email},
            data: {
                password,
                resetToken: null,
                resetTokenExpiry: null
            }
        })
        //6. Generate  JWT
        const token = jwt.sign({userId: updatedUser.id},process.env.TOKEN_SALT);
        //7. Set the jwt cookie
        ctx.response.cookie('token',token,{
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
        })
        //8. Return the new user
        return updatedUser;
        
    }
}

module.exports = Mutation;