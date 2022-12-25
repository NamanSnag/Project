const express = require('express');

const router = express.Router();
const postApiController = require('../../../controller/api/v1/post_apis');

router.get('/', postApiController.index);

module.exports = router;