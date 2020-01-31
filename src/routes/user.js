const router = require('express').Router();
const UserService = require('../services/userService');
const { RESPONSE, HTTP_STATUS } = require('../utils/response');
const ClarifaiService = require('../services/clarifaiService');

router.get('/profile/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserService.getProfile(id);
    return RESPONSE(res, HTTP_STATUS.OK, { user });
  } catch (err) {
    return RESPONSE(res, HTTP_STATUS.NOT_FOUND, { message: 'User not found' });
  }
});

router.patch('/entries', async (req, res) => {
  try {
    const { id } = req.body;

    const user = await UserService.updateEntries(id);
    return RESPONSE(res, HTTP_STATUS.OK, { user });
  } catch (err) {
    console.log(err);
    return RESPONSE(res, HTTP_STATUS.NOT_FOUND, {
      message: 'User not found'
    });
  }
});

router.post('/image-recognition', async (req, res) => {
  try {
    const { imageUrl } = req.body;
    const response = await ClarifaiService.getFaceRecognition(imageUrl);
    return RESPONSE(res, HTTP_STATUS.OK, response);
  } catch (err) {
    console.log(err);
    return RESPONSE(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, {
      message: 'DEU RUIM D:'
    });
  }
});

module.exports = router;
