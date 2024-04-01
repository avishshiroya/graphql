const {gql} = require('apollo-server');

module.exports = gql`
    type User{
        name:String,
        mobile:Int
    }

    input UserInput{
        name:String!,
        mobile:Int!
    }

    input EditUserInput{
        name:String
    }

    type Query{
        getUsers(mobile:Int):[User]
        user(ID:ID):User
    }

    type Mutation{
        createUser(userInput:UserInput):User
        deleteUser(ID:ID!):Boolean
        editUser(ID:ID!,editUserInput:EditUserInput):Boolean
    }
`