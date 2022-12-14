const Post = require('../model/post');
const User = require('../model/user');


module.exports.homepage = function(request, response){
    Post.find({})
    .populate("user")
    .populate({
        path: 'comments',
        populate: 'user'
    })
    .exec(function(err, posts) {
        if(err){
            return response.send(err);
        }
        User.find({}, function(err, users) {
            return response.render('home.ejs', {
                title: "home",
                posts: posts,
                all_users: users
            });
        })
    });
};