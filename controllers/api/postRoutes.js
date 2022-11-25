const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// // Get all Comments
// router.get('/', async (req, res) => {
//   res.render('homepage');
// });

// router.get('/post/:id', async (req, res) => {
//   return res.render('title-details', comments[req.params.num]);
// });
// 
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
      post_title: req.body.post_title,
      description: req.body.description,
      date_created: req.body.date_created
    });
    // if the post is successfully created, the new response will returned as json
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get a single post
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!postData) {
//       res.status(404).json({ message: 'No post found with this id!' });
//       return;
//     }

//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;