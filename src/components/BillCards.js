import React, { useState } from "react";
import { useEffect } from "react";
import { newBill, deleteBill } from "../actions";
import { connect } from "react-redux";
import "../styles/stylesheet.css";

function colorChange(cCode) {
  switch (cCode) {
    case "0":
      return "#304355";
    case "1":
      return "#006485";
    case "2":
      return "#90b0a2";
    default:
      return "#304355";
  }
}

function getPaymentType(paymentInt) {
  switch (paymentInt) {
    case "0":
      return "Physical Check";
    case "1":
      return "Automatic Payment";
    case "2":
      return "Online Payment";
    default:
      return "Not set";
  }
}

function ordinalIndicator(ordInt) {
  switch (ordInt) {
    case 1:
    case 21:
    case 31:
      return "st";
    case 2:
    case 22:
      return "nd";
    case 3:
    case 23:
      return "rd";
    default:
      return "th";
  }
}
function setCardVisible(props) {}

function BillCards(props) {
  useEffect(() => {
    if (props.submits.billType >= 0) {
      props.newBill(
        props.submits.billName,
        props.submits.billAmount,
        props.submits.billDue,
        props.submits.billType,
        props.submits.billCompany,
        props.submits.billSite
      );
    }
    // eslint-disable-next-line
  }, [props.submits]);

  return props.billReducer
    .slice(0)
    .reverse()
    .map((bill) => {
      return (
        <div key={bill.id}>
          <div
            className="card card-body mx-auto"
            style={{
              width: "32rem",
              backgroundColor: colorChange(bill.billType),
              color: "white"
            }}
          >
            <div className="row">
              <div className="col-11">
                <h1>
                  {bill.billName} | ${bill.billAmount}
                </h1>
                <h6>
                  {bill.billDue}
                  {ordinalIndicator(bill.billDue)} of every month
                </h6>
                <h6>{getPaymentType(bill.billType)}</h6>
                <h6>
                  <a
                    style={{
                      color: "#bababa"
                    }}
                    href="http://"
                  >
                    {bill.billSite}
                  </a>
                </h6>
              </div>
              <div className="col-1 text-right">
                <button
                  onClick={() => props.deleteBill(bill.id)}
                  style={{
                    color: "white"
                  }}
                >
                  X
                </button>
                <br />
                <br />
                <button>
                  <svg
                    width="2em"
                    height="2em"
                    viewBox="0 0 16 16"
                    class="bi bi-check-square"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <br />
        </div>
      );
    });
}

function mapState(state) {
  return { billReducer: state.billReducer };
}
export default connect(mapState, { newBill: newBill, deleteBill: deleteBill })(
  BillCards
);
