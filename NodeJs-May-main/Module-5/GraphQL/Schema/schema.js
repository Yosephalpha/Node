import graphql from "graphql"
import _ from 'lodash'
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } = graphql
import axios from "axios"

const users = [
    {
        id: '1',
        firstName: "Venkat",
        age: 30,
    },
    {
        id: '2',
        firstName: "Amarnath",
        age: 20,
    },
    {
        id: '3',
        firstName: "Piyush",
        age: 35,
    },
    {
        id: '4',
        firstName: "Gokul",
        age: 40,
    },
    {
        id: '5',
        firstName: "Hasansab",
        age: 20,
    },
]

//create user object 

const userType = new GraphQLObjectType({
    name: "user",
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

//define root query

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: userType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:8900/users/${args.id}`)
                    .then(response => response.data)
                // _.find(users, { id: args.id })
            }
        }
    }
})

//addUser => insert & update

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addNewUser: {
            type: userType,
            args: {
                firstName: { type: GraphQLString },
                age: { type: GraphQLInt },
            },
            resolve(parentValue, args) {
                const { firstName, age } = args
                // const newUser = {
                //     id: `${users.length + 1}`,
                //     firstName: args.firstName,
                //     age: args.age
                // }
                // users.push(newUser)
                // res.json(newUser)
                return axios.post("http://localhost:8900/users", { firstName, age })
                    .then(response => response.data)
                    .catch(error => {
                        throw new Error(error)
                    })

            }
        }
    }
})





const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})

export { schema }