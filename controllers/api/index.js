const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes.js');
const commentRoutes = require('./commentRoutes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;