const express = require('express');
const router = express.Router();
const userService = require('../../service/user/userService');

console.log(userService.getUserByName);


//POST
router.post('/users', async (req, res) => {
   userService.postUser(req, res);
});

router.route('/users').get((req, res) => {
   userService.getUser(res);
});

router.route('/user/(:name)').get((req, res) => {
   userService.getUserByName(req, res);

})

module.exports = app => app.use('/api', router);