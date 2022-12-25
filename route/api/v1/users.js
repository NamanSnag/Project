const express = require('express');

const router = express.Router();

const userApi = require('../../../controller/api/v1/users_api');

router.post('/userSession', userApi.createSession);

module.exports = router;