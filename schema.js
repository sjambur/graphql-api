const {gql} = require('apollo-server');

module.exports = gql`
type Query {
    sessions(
        id: ID,
        title: String,
        description: String,
        startsAt: String,
        endsAt: String,
        room: Room,
        day: String,
        format: String,
        track: String,
        level: String
    ): [Session]
    sessionById(id: ID!): SessionOrError
    speakers: [Speaker]
    speakerByID(id: ID): Speaker
}
enum Room{
    EUROPA
    SOL
    SATURN
}

union SessionOrError = Session | Error

type Error {
    code: String
    message: String
    token: String
}

type Mutation{
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: sessionInput): Session
}
type Speaker{
    id: ID!
    bio: String
    name: String
    sessions: [String]
}
input sessionInput{
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
}
type Session {
    id: ID!
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "Too many sessions do not fit into a single track, we will be migrating to a tags based system in the future...")
    level: String
    favorite: Boolean
    speakers: [Speaker]
}`