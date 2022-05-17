const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

// @router   POST api/user
// @desc     Check against user password in DB
router.post('/', async (req, res) => {
  const { user_password } = req.body;
  try {
    let user = await User.findOne({
      where: {
        // Just using one user for app. If app is updated to support more users with their own todo we can remove this and search by dynamic id instead
        id: 1,
      },
    });
    // Checking if passwords match
    const isMatch = await bcrypt.compare(user_password, user.user_password);
    // Setting a bool for front-end. Can use to check if app should be locked or not
    res.status(200).json(isMatch);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
