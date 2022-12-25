const Post = require('../model/post');
const Comment = require('../model/comment');

// post create
module.exports.create = async (req, res)=>{

    try{

        let posts = await Post.create({
            content: req.body.content,
            user: req.user._id
        });

        if(req.xhr){
            return res.json({
                success: true,
                posts: posts,
                message: "post created successfully"
            });
        }

        req.flash('success', 'Post successful !');
        return res.redirect('back');

    }catch(e){
        req.flash('error', e);
        return res.status(500).json({
            status: 'faliure',
            message: e.message
        });
    }
};

// deleting the post
module.exports.destroy = async function(req, res){
    try{
        let post = await Post.findById(req.params.id);
         if(post.user == req.user.id){
            
            post.remove();

            await Comment.deleteMany({post: req.params.id});
        }
        if(req.xhr){
            return res.status(200).json({
                success: true,
                posts_id: req.params.id,
                message: "post delete successfully"
            });
        }
        req.flash('success', 'Post deleted successful!');
        return res.redirect('back');

    }catch(error){
        req.flash('error', error);
        return res.status(500).json({
        status: 'faliure',
        message: error.message
        });
    };
}