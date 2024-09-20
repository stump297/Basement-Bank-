const models = require('../models/index.js');
const db = require('../config/connection.js');

module.exports = async (modelName, collectionName) => {
    try {
        console.log(modelName)
        console.log(collectionName)
        let modelExists = await models[modelName].db.db.listCollections({
            name: collectionName
        }).toArray()

        if (modelExists.length) {
            await db.dropCollection(collectionName);
        }        
    } catch (err) {
        throw err;
    }
}