require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;

//middlewares
app.use(express.json()); //we use this to access body like req.body
app.use(cors());

//routes
const experiences = require('./routes/experiences');
const users = require('./routes/users');

// api/v1/experiences
app.use('/api/v1/experience', experiences);

// api/v1/users
app.use('/api/v1/users', users);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
