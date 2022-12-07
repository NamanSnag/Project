const user = require('../model/user');

module.exports.profile = function(req, res){
    return res.render('user_profile.ejs', {
        title: 'User Profile'
    })
}

module.exports.signUp = function(request, response){
    if (request.isAuthenticated()) {
        return response.redirect('/user/profile');
    }
    return response.render('user_sign_up.ejs',{
        title: 'Sign Up'
    });
};

module.exports.signIn = function(request, response){
    if (request.isAuthenticated()) {
        return response.redirect('/user/profile');
    }
    return response.render('user_sign_in.ejs',{
        title: 'Sign In'
    });
};

// sign up data 
module.exports.create = function(request, response){
    // if password and confirm password is match or not
    if(request.body.password != request.body.Confirm_password){
        return response.redirect('back');
    }

    User.findOne({email: request.body.email}, function(err, user){
        if(err) {
            console.log('error in finding user in signing up');
            return;
        }

        if(!user){
            User.create(request.body,(error,result)=>{
                if(error){
                    return console.log('error in crating user',error);
                };
                console.log(request.body);
                return response.redirect('/user/sign-in');
            });
            console.log("user setup");
        }else{
            return response.redirect('back');
        }
    });
  
};

// sign in user
module.exports.userSession = function(request, response){
   return response.redirect('/');
};

// sign out user
module.exports.sessionEnd =function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
};
