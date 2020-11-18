export const newBill = (
  billName,
  billAmount,
  billDue,
  billType,
  billCompany,
  billSite
) => {
  return {
    type: "NEW_BILL",
    payload: {
      billName,
      billAmount,
      billDue,
      billType,
      billCompany,
      billSite
    }
  };
};

export const deleteBill = (id) => {
  return {
    type: "DELETE_BILL",
    payload: {
      id
    }
  };
};
