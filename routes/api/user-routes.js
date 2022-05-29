const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    getSingleUser,
    updateUserById,
    deleteUserById,
    /*addFriendToList,
    removeFriendFromList*/
} = require('../../controllers/user-controller');

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
/* 
{
	"username": 'sample',
	"email": 'sample'
}
*/
    

// /api/users/:id
router
    .route('/:id')
    .get(getSingleUser)
    .put(updateUserById)
    .delete(deleteUserById)

// /api/users/:userId/friends/:friendId
/* router
    .route('/:userid/friends/:friendId')
    .post(addFriendToList)
    .delete(removeFriendFromList)
*/

module.exports = router;