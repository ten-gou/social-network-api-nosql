const router = require('express').Router();

// add the routes within
const {
    getAllUsers,
    createUser,
    getSingleUser
} = require('../../controllers/user-controller');

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

// /api/users/:id
router
    .route('/:id')
    .get(getSingleUser)
    .put(updateUserById)
    .delete(deleteUserById)

module.exports = router;