const db = require('../dbConfig')

module.exports = {
    getReviews,
    getReviewByID,
    addReview,
    editReview,
    deleteReview
}

function getReviews() {
    return db('reviews')
}

function getReviewByID(id) {
    return db('reviews')
        .where({ id })
        .first()
}

function addReview(data, userID) {
    return db('reviews')
        .insert({...data, driverID: userID}, ['id'])
}

async function editReview(id, review, userID) {
    const id = await getReviewByID(id)
    if (id.driverID === userID) {
        return db('reviews')
            .where({ id })
            .update({ review }, ['id'])
    } else {
        return null
    }
}

async function deleteReview(id, userID) {
    const result = await getReviewByID(id)
    if (result.driverID === userID) {
        return db('reviews')
            .where({ id })
            .first()
            .delete()
    } else {
        return null
    }
}