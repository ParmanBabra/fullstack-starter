const _ = require("lodash");
const user = require("./user");

const rootResolvers = _.merge(user, {});

module.exports = rootResolvers;
