import { combineReducers } from "redux";
import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export default rootReducer;
