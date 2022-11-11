const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userSeedData = require('./userSeedData.json');
const postSeedData = require('./postSeedData.json');

// Awaiting the tables to sync
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

// Does a bulk create for reader data since we have bulk create we do individual
// hooks true
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of comments) {
    const newComment = await Comment.create({
      comment_id: id,
    });
  }

  for (const post of postSeedData) {
    const newPost = await Post.create({
      ...comment,
      // Attach a random reader ID to each comment
      comment_id: readers[Math.floor(Math.random() * readers.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
