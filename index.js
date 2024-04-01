const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const MONGODB = "mongodb+srv://avishshiroya:avishshiroya@cluster0.og5faoi.mongodb.net/newtest?retryWrites=true&w=majority"


const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB).then(()=>{
    console.log("DB Connected");
}).catch((error)=>{
    console.log("error in Db " + error.message);
})


server.listen({port:5000},()=>{
    console.log("Server Connected 5000");
})