const {forwardTo} = require('prisma-binding');

const Query = {

    //GET ALL BOOKS QUERY
    async getAllBooks(parent,args,ctx,info){
        return await ctx.db.query.books({
            where : {active:true}
        },`{
            id
            title
            author
            publisher {
                name
                discount
            }
            category{
                name
            }
            type {
                name
            }
            images {
                src
            }
            mrp
            sku
        }`);
        
    },

    book: forwardTo('db'),
    order: forwardTo('db'),
    me(parent,args,ctx,info){
        if(!ctx.request.userId){
            return null;
        }
        return ctx.db.query.user({
            where: {id: ctx.request.userId},
        },`{
            id 
            name 
            email 
            walletBalance
            cart {
                id 
                quantity 
                book {
                    id
                    title
                    author
                    publisher{
                        name
                        discount
                    }
                    mrp 
                    
                    images {
                        src
                    }
                }
            }
        }`);
    },

    async getBooksByCategory(parent,args,ctx,info){
        return await ctx.db.query.books({
            where: {className: args.className}
        },info);
    },

    async getMyOrders(parent,args,ctx,info){
        const {userId} = ctx.request; 
        const user = await ctx.db.query.user({
            where: {id: userId}
        });
        const orders = await ctx.db.query.orders({
            where: {user: user},
            orderBy: 'orderId_DESC'
        },info);
        console.log(orders);
        return orders;
    },

    async getCategories(parent,args,ctx,info){
        return await ctx.db.query.categories({},info);
    },

    async getTypes(parent,args,ctx,info){
        return await ctx.db.query.types({},info);
    },

    async getPublishers(parent,args,ctx,info){
        return await ctx.db.query.publishers({},info);
    }

}

module.exports = Query;