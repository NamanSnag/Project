const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const avatarPath = path.join('/uplodes/users/avatar');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    }
},{
    timestamps: true
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',avatarPath));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  userSchema.static.uploadedAvatar =  multer({ storage: storage }).single('avatar');
  userSchema.static.avatarPath = avatarPath;

const user = mongoose.model('User', userSchema);

module.exports = user;