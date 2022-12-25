const User = require('../../../model/user');
const jwt = require('jsonwebtoken');

module.exports.createSession = async (req, res) => {
    try{

        let user = await User.findOne({email: req.body.email});

        if(!user || user.password != req.body.password){
            return res.status(400).json({
                            message: 'Email or password is incorrect'
                        });
        }
        return res.json(200,{
            message: 'Success sigin by jwt',
            data: {
                token: jwt.sign( user.toJSON(), 'codial', {expiresIn: '1000'})
            }
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: 'Error creating session'
        });
    }
}