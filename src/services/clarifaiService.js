const Clarifai = require('clarifai');
const { RuntimeError } = require('../utils/errorHandler');

module.exports.getFaceRecognition = imageUrl => {
  try {
    return ClarifaiService.app.models.predict(
      ClarifaiService.FACE_DETECTION,
      imageUrl
    );
  } catch (err) {
    throw RuntimeError();
  }
};

const ClarifaiService = {
  app: new Clarifai.App({
    apiKey: process.env.CLARIFAI_API_KEY
  }),

  FACE_DETECTION: Clarifai.FACE_DETECT_MODEL
};
