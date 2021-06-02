module.exports = {
    sessions: (parent, args, {dataSources}, info) => {
        return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, {id}, {dataSources}, info) => {
        try{
            return dataSources.sessionAPI.getSessionById(id);
        } catch(err){
            return {code: 'ERROR', message: 'An error has occured', token: 'ERRORTOKEN'}
        }
    },
    speakers: async (parent, args, {dataSources}, info) => {
        return await dataSources.speakerAPI.getSpeakers();
    },
    speakerByID: async (parent, {id}, {dataSources}, info) => {
        return await dataSources.speakerAPI.getSpeakersById(id);
    },
}