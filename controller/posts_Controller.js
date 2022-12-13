const Post = require('../model/post');


module.exports.create = (req, res)=>{
    Post.create({
        content: req.body.content,
        user: req.user._id
    },(error,result)=>{
        if(error){
            console.log("error post",error);
            return res.send(error);
        }
        return res.redirect('back');
    });
};