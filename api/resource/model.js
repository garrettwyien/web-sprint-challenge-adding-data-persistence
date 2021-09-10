// build your `Resource` model here
const db = require('../../data/dbConfig');

async function get()  {
    const result = await db('resources')
    return result
}

async function add(newRes) {
    const [resource_id] = await db('resources').insert(newRes)
    const result = await db('resources').where('resource_id', resource_id).first()
    return result
}

module.exports = {
    get,
    add
};