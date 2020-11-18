import { combineReducers } from "redux";
var idSet = 0;
//const defaultList = [{ id: "001", billName: "Water Bill" }];
const billReducer = (billList = [], action) => {
  switch (action.type) {
    case "NEW_BILL": {
      return [
        ...billList,
        {
          billName: action.payload.billName,
          billAmount: action.payload.billAmount,
          billDue: action.payload.billDue,
          billType: action.payload.billType,
          billCompany: action.payload.billCompany,
          billSite: action.payload.billSite,
          id: idSet++
        }
      ];
    }
    case "DELETE_BILL": {
      return billList.filter((billList) => billList.id !== action.payload.id);
    }

    default: {
      return billList;
    }
  }
};

export default combineReducers({
  billReducer
});
