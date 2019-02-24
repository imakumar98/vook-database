const {forwardTo} = require('prisma-binding');

const Query = {
    async getAllBooks(parent,args,ctx,info){
        var books = await ctx.db.query.products();
        return books;
    },

    product: forwardTo('db'),
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
                product {
                    id
                    title
                    author
                    publisher
                    mrp 
                    discount
                    images {
                        src
                    }
                }
            }
        }`);
    },

    async getBooksByCategory(parent,args,ctx,info){
        return await ctx.db.query.products({
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
    }

}

module.exports = Query;