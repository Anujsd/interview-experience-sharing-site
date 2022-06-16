const db = require('../connect');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await db.query('SELECT * FROM users WHERE email=$1', [
      email,
    ]);

    if (userData.rows.length === 0) {
      res
        .status(401)
        .json({ status: 'failed', message: 'Invalid Credentials' });
    }

    const passwordCheck = await bcrypt.compare(
      password,
      userData.rows[0].password
    );
    if (passwordCheck == false) {
      res.status(401).json({
        status: 'failed',
        message: 'Invalid Credentials',
      });
    }

    const token = jwtGenerator(userData.rows[0].id);
    res.status(200).json({
      status: 'success',
      data: {
        user: userData.rows[0],
        token: token,
      },
    });
    console.log(passwordCheck);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await db.query('SELECT * FROM users WHERE email=$1', [
      email,
    ]);

    if (userData.rows.length > 0) {
      res
        .status(409)
        .json({ status: 'failed', message: 'user already exists' });
    }

    //password encryption
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await db.query(
      'INSERT INTO USERS(email,password) VALUES($1,$2) RETURNING *',
      [email, bcryptPassword]
    );
    const jwtToken = jwtGenerator(newUser.rows[0].id);

    res.status(200).json({
      status: 'success',
      data: {
        user: newUser.rows[0],
        token: jwtToken,
      },
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = {
  loginUser,
  registerUser,
};
