require('dotenv').config({path: 'variables.env'});
const {prisma} = require('./generated/prisma-client');
const {GraphQLServer} = require('graphql-yoga');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const {Prisma} = require('prisma-binding');


const db = new Prisma({
    typeDefs: './src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    debug:false
});





const server = new GraphQLServer({
    typeDefs : './src/schema.graphql',
    resolvers : {
        Query,
        Mutation
    },
    resolverValidationOptions:{
        requireResolversForResolveType: false
    },
    context :  req => ({...req,db})
})

server.express.use(cookieParser());

//Decode the JWT to get user id on each requesr
server.express.use((req,res,next)=>{
    const {token} = req.cookies;
    if(token){
        const {userId} = jwt.verify(token,process.env.TOKEN_SALT);
        //Put the userid onto the req for future requests to access
        req.userId = userId; 
    }
    next();

});




server.start({cors:{
    credentials: true,
    origin: process.env.FRONTEND_URL
}},()=>console.log("Server started at port 4000"));
;