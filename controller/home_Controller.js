const post = require('../model/post');


module.exports.homepage = function(request, response){
    post.find({})
    .populate("user")
    .populate({
        path: 'comments',
        populate: 'user'
    })
    .exec(function(err, user) {
        if(err){
            return response.send(err);
        }
        return response.render('home.ejs', {
            title: "home",
            posts: user
        });
    });
};