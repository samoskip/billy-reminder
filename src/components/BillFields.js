import React from "react";

class BillFields extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleOrdinalFormChange = this.handleOrdinalFormChange.bind(this);
    this.state = {
      billName: "",
      billAmount: 0,
      billDue: 1,
      billType: 0,
      billCompany: "",
      billSite: "",
      dateOrd: "st",
      id: -1
    };
  }

  ordinalIndicator(ordInt) {
    if (/[a-zA-Z]/.test(ordInt)) {
      this.setState({ dateOrd: "" });
    } else {
      switch (ordInt) {
        case "1":
        case "21":
        case "31":
          this.setState({ dateOrd: "st" });
          break;
        case "2":
        case "22":
          this.setState({ dateOrd: "nd" });
          break;
        case "3":
        case "23":
          this.setState({ dateOrd: "rd" });
          break;
        default:
          this.setState({ dateOrd: "th" });
          break;
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.callback(this.state);
  }

  handleFormChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  displaySite(e) {
    const name = e.target.name;
    console.log(this.state);
    if (name === "billType") {
      if (this.state.billType === "2") {
        this.setState({ billSite: "http://" });
      } else {
        this.setState({ billSite: "" });
      }
    }
  }

  handleOrdinalFormChange(e) {
    if (parseInt(e.target.value, 10) > 31) {
      e.target.value = 31;
    } else if (parseInt(e.target.value, 10) < 1) {
      e.target.value = 1;
    }

    if (isNaN(e.target.value)) {
      e.target.value = 1;
    }

    this.setState({ billDue: e.target.value });
    this.ordinalIndicator(e.target.value);
  }

  returnBillSite() {
    if (this.state.billType === "2") {
      //this.setState({ billSite: "http://" });
      return (
        <div>
          Link to payment
          <br />
          <input
            className="BillSiteIn"
            name="billSite"
            value={this.state.billSite}
            onChange={this.handleFormChange}
          />
          <br />
          <br />
        </div>
      );
    } else {
      //this.setState({ billType: "" });
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="text-center" style={{ backgroundColor: "#edf5f5" }}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          Name of new bill
          <br />
          <input
            className="BillNameIn"
            name="billName"
            value={this.state.billName}
            onChange={this.handleFormChange}
            size="17"
            maxLength="20"
          />
          <br />
          <br />
          Name of company
          <br />
          <input
            className="BillCompanyIn"
            name="billCompany"
            value={this.state.billCompany}
            onChange={this.handleFormChange}
            size="17"
            maxLength="20"
          />
          <br />
          <br />
          <label htmlFor="type">Type of bill</label>
          <br />
          <select
            name="billType"
            id="paymentTerm"
            value={this.state.billType}
            onChange={this.handleFormChange}
          >
            <option value="0">Physical Check</option>
            <option value="1">Automatic Payment</option>
            <option value="2">Online Payment</option>
          </select>
          <br />
          <br />
          Bill Amount
          <br />$
          <input
            className="BillAmountIn"
            name="billAmount"
            value={this.state.billAmount}
            onChange={this.handleFormChange}
            size="8"
            maxLength="7"
          />
          <br />
          <br />
          <label htmlFor="name">Billing occurs on the{"\u00A0"}</label>
          <input
            className="BillDueIn"
            name="billDue"
            value={this.state.billDue}
            onChange={this.handleOrdinalFormChange}
            size="2"
            maxLength="2"
          />
          {this.state.dateOrd} of the month.
          <br />
          <br />
          {this.returnBillSite()}
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  }

  /*
  render() {
    return (
      <div className="text-center">
        <form>
          <label>Bill Name</label>
          <br />
          <input
            className="BillNameIn"
            name="billname"
            value={this.state.billname}
            onChange={this.handleFormChange}
          />
          <br />
          <br />
          <label>Amount</label>
          <br />
          <input
            className="AmountIn"
            name="billamount"
            value={this.state.billamount}
            onChange={this.handleFormChange}
          />
          <br />
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
  */
}

export default BillFields;
