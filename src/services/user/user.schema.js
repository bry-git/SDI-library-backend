const Joi = require('joi');

const user_name = Joi.string()
  .trim()
  .min(3)
  .max(30)
  .regex(/^[\sa-zA-Z0-9]*$/, 'letters, numbers and spaces')
  .required();
const user_email = Joi.string()
  .trim()
  .email()
  .required();

module.exports = {
  options: {
    abortEarly: false,
    convert: true,
    allowUnknown: false,
    stripUnknown: true
  },
  user: Joi.object().keys({
    user_name,
    user_email,
  })
};