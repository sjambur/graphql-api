const Query = require('./resolvers/query')
const Session = require('./resolvers/session')
const Mutation = require('./resolvers/mutation')

module.exports = {
    Query,
    Session,
    Mutation,
    Room: {
        "SOL": "Sol",
        "EUROPA": "Europa",
        "SATURN": "Saturn"
    },
    SessionOrError : {
        __resolveType(obj){
            if(obj.code){
                return 'Error';
            }
            return 'Session';
        }
    }
};