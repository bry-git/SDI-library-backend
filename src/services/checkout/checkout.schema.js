const Joi = require('joi');

const user_id = Joi.number()
  .required();
const book_id = Joi.number()
  .required();
const checkout_returned = Joi.boolean()
  .required();
const checkout_due_date = Joi.date()
  .required();

module.exports = {
  options: {
    abortEarly: false,
    convert: true,
    allowUnknown: false,
    stripUnknown: true
  },
  checkout: Joi.object().keys({
    user_id,
    book_id,
    checkout_returned,
    checkout_due_date
  })
};