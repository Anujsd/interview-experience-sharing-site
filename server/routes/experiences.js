const express = require('express');
const {
  getAllExperiences,
  getExperience,
  insertExperience,
  updateExperience,
  deleteExperience,
} = require('../controllers/experiences');
const router = express.Router();
const protectedPath = require('../middlewares/protectedpaths');

router.route('/').get(getAllExperiences).post(protectedPath, insertExperience);
router
  .route('/:id')
  .get(getExperience)
  .put(protectedPath, updateExperience)
  .delete(protectedPath, deleteExperience);

module.exports = router;
