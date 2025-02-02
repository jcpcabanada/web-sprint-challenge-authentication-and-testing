const db = require('../../data/dbConfig');

const addUser = async user => {
    const [id] = await db('users').insert(user);
    return db('users')
        .where({id})
        .first()
};
function findBy(filter) {
    return db('users').where(filter)
}

const getById = id => {
    return db('users')
        .where({id})
        .first();
};

const getAll = () => {
    return db('users')
};

module.exports = {
    addUser,
    getById,
    getAll,
    findBy,
};