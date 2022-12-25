const nodemailer = require('nodemailer');

 exports.newComment = ()=>{
    console.log('inside new comment mailer');

    nodemailer.transporter.sendMail({
        from: 'project.com',
        to: Comment.user.email,
        subject: 'New comment published',
        html: '<h1>Yup, comment is new published</h1>',
    },(err,info) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('message sent',info);
        return;
    })
 }