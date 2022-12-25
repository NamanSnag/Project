const User = require('../model/user');

module.exports.profile = function(req, res){
    User.findById(req.params.id, function(err, user){
        return res.render('user_profile.ejs', {
            title: 'User Profile',
            profile_user: user
        })
    })
    
}

// // update user profile
// module.exports.update = async function(req, res){
//     // if(req.user.id == req.params.id){
//     //     User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
//     //         return res.redirect('back');
//     //     })
//     // }else{
//     //     return res.status(403).send('Can not be updated')
//     // }
//     if(req.body.id == req.params.id){
//         try {
//             let  user = User.findById(req.params.id);
//             User.uploadedAvatar(req, res, (error){
//                 if(error){
//                     return res.status(500).send(error);
//                 }
//                 user.name = req.body.name;
//                 user.email = req.body.email;
//                 if(req.file){
//                     user.avatar = User.avatarPath+'/'+req.file.filename;
//                 }
//                 user.save();
//                 return res.redirect('back');
//             })
//         } catch (error) {
//             return res.redirect('back');
//         }
//     }
// }

module.exports.signUp = function(request, response){
    if (request.isAuthenticated()) {
        request.flash('success', 'SignUp successful');
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
                request.flash('success', 'successfull create user');
                return response.redirect('/user/sign-in');
            });
            console.log("user setup");
        }else{
            console.log("user already exists");
            return response.redirect('back');
        }
    });
  
};

// sign in user
module.exports.userSession = function(request, response){
    request.flash('success', 'Login successful');
    console.log(User.password);
    return response.redirect('/');
};

// sign out user
module.exports.sessionEnd =function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash('success', 'LogOut successful');
      res.redirect('/');
    });
};
