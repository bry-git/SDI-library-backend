const validateSchema = require('feathers-validate-joi');
const userSchema = require ('./user.schema');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ validateSchema.form(userSchema.user, userSchema.options) ],
    update: [ validateSchema.form(userSchema.user, userSchema.options) ],
    patch: [ validateSchema.form(userSchema.user, userSchema.options) ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
