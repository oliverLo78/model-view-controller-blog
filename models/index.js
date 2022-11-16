const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const { post } = require('../controllers');

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// Define a User as having many Comments, thus creating a foreign key in the 
// 'post' table
// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });





module.exports = { User, Post, Comment };