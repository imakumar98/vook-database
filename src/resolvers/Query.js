const Query = {
    // getAllBooks(root,args,{prisma}){
    //     return prisma.books();
    // },

    // book(root,{bookId},{prisma}){
    //     return prisma.book({id:bookId});
    // },
    me(parent,args,ctx,info){
        if(!ctx.request.userId){
            return null;
        }
        return ctx.db.query.user({
            where: {id: ctx.request.userId},
        },info);
    }

}

module.exports = Query;