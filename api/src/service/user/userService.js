const User = require('../../models/user');

const userService = {

    async postUser(req, res) {
        try {
            const user = await User.create(req.body);

            return res.send([
                user
            ]);
        } catch (error) {
            return res.status(400).send({
                error: 'Não foi possivel criar o usuário: ' + err
            });
        }
    },

    getUser(res) {
        try {
            User.find({}, (err, user) => {
                res.json(user)
            })
        } catch (error) {
            return res.status(400).send({
                error: err
            });
        }
    },

    getUserByName(req,res) {
        try {
            var name = req.params.name;

            User.find({
                "name": name,
            }, (err, user) => {
                res.json(user);
            })
        } catch (error) {
            throw res.json(error);
        }
    }

}

module.exports = userService