import React from "react";
import BillFields from "./components/BillFields";
import Header from "./components/Header";
import BillCards from "./components/BillCards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSubmit: {
        billName: "",
        billAmount: 0,
        billDue: "",
        billType: -1,
        billCompany: "",
        billSite: "http://",
        id: -1
      }
    };
  }

  submitList = (e) => {
    this.setState({
      newSubmit: {
        billName: e.billName,
        billAmount: e.billAmount,
        billDue: e.billDue,
        billType: e.billType,
        billCompany: e.billCompany,
        billSite: e.billSite
      }
    });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <BillFields className="text-center" callback={this.submitList} />
        <BillCards submits={this.state.newSubmit} />
      </div>
    );
  }
}

export default App;
