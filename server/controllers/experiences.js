const db = require('../connect');

const getAllExperiences = async (req, res) => {
  try {
    const data = await db.query('SELECT * FROM experiences');
    //console.log(data.rows);
    res.status(200).json({
      status: 'success',
      results: data.rows.length,
      data: data.rows,
    });
  } catch (error) {
    console.log(error);
  }
};

const getExperience = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await db.query('SELECT * FROM experiences WHERE id=$1', [id]);
    // console.log(data.rows[0]);
    res.status(200).json({
      status: 'success',
      results: data.rows.length,
      data: data.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
};

const insertExperience = async (req, res) => {
  try {
    console.log(req);
    const data = await db.query(
      'INSERT INTO experiences(companyname,jobrole,jobexperiencelevel,joblocation,jobsalary,experience,username,userlinkedinid) values ($1,$2,$3,$4,$5,$6,$7,$8) returning *',
      [
        req.body.companyname,
        req.body.jobrole,
        req.body.jobexperiencelevel,
        req.body.joblocation,
        req.body.jobsalary,
        req.body.experience,
        req.body.username,
        req.body.userlinkedinid,
      ]
    );
    //console.log(data.rows[0]);
    res.status(201).json({
      status: 'success',
      results: data.rows.length,
      data: data.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
};

const updateExperience = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await db.query(
      'UPDATE experiences SET companyname=$1,jobrole=$2,jobexperiencelevel=$3,joblocation=$4,jobsalary=$5,experience=$6,username=$7,userlinkedinid=$8,approved=$9 WHERE id=$10 returning *',
      [
        req.body.companyname,
        req.body.jobrole,
        req.body.jobexperiencelevel,
        req.body.joblocation,
        req.body.jobsalary,
        req.body.experience,
        req.body.username,
        req.body.userlinkedinid,
        req.body.approved,
        id,
      ]
    );
    console.log(data.rows[0]);
    res.status(200).json({
      status: 'success',
      results: data.rows.length,
      data: data.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteExperience = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await db.query('DELETE FROM experiences WHERE id=$1', [id]);
    //console.log(data);
    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllExperiences,
  getExperience,
  insertExperience,
  updateExperience,
  deleteExperience,
};
