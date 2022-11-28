// const server = require('express').Router();
// const { User } = require('../models');
// const authenticate = require('../middlewares/authMiddleware');

// server.get('/profile/:id', authenticate, async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findOne({
//     where: { id }
//   });
//   if (user) {
//     const { username } = user;
//     res.json({isSuccess: true, user: { username }});
//   } else {
//     res.json({isSuccess: false});
//   }
// });

// module.exports = router;