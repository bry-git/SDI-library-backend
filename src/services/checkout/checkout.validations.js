const checkoutValidations = {};

checkoutValidations.checkout = values => {
  const errors = {};

  checkUserId(values.user_id, errors);
  checkBookId(values.book_id, errors);

  return errors;
};

module.exports = checkoutValidations;

function checkUserId(user_id, errors, fieldName = 'user_id') {
  if (false) {
    errors[fieldName] = 'The user_id for this checkout does not exist';
  }
}

function checkBookId(book_id, errors, fieldName = 'book_id') {
  if (false) {
    errors[fieldName] = 'The book_id for this checkout does not exist';
  }
}