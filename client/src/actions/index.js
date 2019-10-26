import _ from "lodash";
import simpleAction from "actions/example-action/actions";

export const rootAction = _.merge({
  ...simpleAction
});
