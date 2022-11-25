const User = require('./User');
// const Comment = require('./Comment');
const Post = require('./Post');
// const { post } = require('../controllers');

// Post.hasMany(Comment, {
//   foreignKey: 'post_id',
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id',
// });

Post.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Post };