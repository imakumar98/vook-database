//This file connect to remote prisma DB
const {Prisma} = require('prisma-binding');
const db = new Prisma({
    typeDefs: './generated/prisma.graphql',
    endpoint: "https://eu1.prisma.sh/ashwani-0b91c9/learning-prisma/dev",
    debug:false
});

modules.exports = db;
