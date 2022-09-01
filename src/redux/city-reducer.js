import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import * as cityActions from "./city-action";

const value = createReducer([], {
  [cityActions.getValue]: (__, action) => action.payload,
});

export default combineReducers({
  value,
});
