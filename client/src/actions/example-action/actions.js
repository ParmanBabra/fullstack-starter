import _ from "lodash";
import apiCaller from "apis/apicaller";
import { EXAMPIE_ACTION } from "actions/example-action/action-type";

export const exampleAction = () => async dispatch => {
  const response = await apiCaller.get("/");

  dispatch({ type: EXAMPIE_ACTION, payload: response.data });
};
