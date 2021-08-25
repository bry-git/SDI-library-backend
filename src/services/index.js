const book = require('./book/book.service.js');
const user = require('./user/user.service.js');
const checkout = require('./checkout/checkout.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(book);
  app.configure(user);
  app.configure(checkout);
};
