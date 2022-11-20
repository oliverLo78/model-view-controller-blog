const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all post and JOIN with user data
    const postData = await Post.findAll({
        // where in the db is just id in dbeaver
      where: {
        // Find all the post made by the user
        // whatever user is logged in we are going to match w/ id in db
        id: req.session.user_id
      },
      include: [{ model: User }]
      
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
  
    // Pass serialized data and session flag into template
    res.render('dashboard', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
