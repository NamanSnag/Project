const Post = require('../model/post');
const User = require('../model/user');


module.exports.homepage = async function(request, response){
    try{

        let posts = await Post.find({})
        .sort('-createdAt')
        .populate("user")
        .populate({
            path: 'comments',
            populate: 'user'
        });

        let users = await User.find({});
        
        return response.render('home.ejs', {
            title: "home",
            posts: posts,
            all_users: users
        });

    }catch(err){

        console.log(err);
        response.status(500).send('Server Error');
        
    }
};