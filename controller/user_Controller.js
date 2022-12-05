const User = require('../model/user');

module.exports.profile = function(request, response){

    if(request.cookies.user_id){
        User.findById(request.cookies.user_id,(error,user)=>{
            if(user){
                return response.render('user_profile',{
                    title: 'user Profile',
                    user: user
                });
            }else{
                            return response.render('back');
            }
        });
    }else{
        return response.redirect('/user/sign-in');
    }
}

module.exports.signUp = function(request, response){
    return response.render('user_sign_up.ejs',{
        title: 'Sign Up'
    });
};

module.exports.signIn = function(request, response){
    return response.render('user_sign_in.ejs',{
        title: 'Sign In'
    });
};

// sign up data 
module.exports.create = function(request, response){
    // if password and confirm password is match or not
    if(request.body.passwords != request.body.Confirm_password){
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
    // finding user 
    User.findOne({email: request.body.email}, function(err, user){
            if(err) {
                console.log('error in finding user in signing in');
                return;
            }

            if(user){
                if(user.passwords != request.body.passwords){
                    return response.redirect('back');
                }
                response.cookie('user_id', user.id);
                console.log("succesfull log in", user);
                return response.redirect('/user/profile');
            }else{
                console.log("not sign", user);
                return response.redirect('back');
            }
        });
};

// sign out
module.exports.signOut = function(req, res){
    res.clearCookie('user_id');
    return res.redirect('/user/sign-in');
}