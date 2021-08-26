const Joi = require('joi');

const book_title = Joi.string()
  .trim()
  .min(3)
  .max(30)
  .required();
const book_author = Joi.string()
  .trim()
  .min(3)
  .max(30)
  .required();
const book_ISBN = Joi.string()
  //.regex(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/, 'ISBN 10 or 13 Format')
  .required();

module.exports = {
  options: {
    abortEarly: false,
    convert: true,
    allowUnknown: false,
    stripUnknown: true
  },
  book: Joi.object().keys({
    book_title,
    book_author,
    book_ISBN
  })
};