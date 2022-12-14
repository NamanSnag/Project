const Post = require('../model/post');
const Comment = require('../model/comment');

// post create
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

// deleting the post
module.exports.destroy = function(req, res){
    Post.findById(req.params.id,function(error,post){
        // .id means converting the object id into a string
        if(error){
            console.log("error post",error);
            return res.send(error);
        }

        if(post.user == req.user.id){
            post.remove();

            Comment.deleteMany({post: req.params.id},function(error){
                if(error){
                    console.log("error comment",error);
                }
            })
        }
        return res.redirect('back');
    });
};