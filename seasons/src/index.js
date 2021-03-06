import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("Component did mount.");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        console.log("error")
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidCatch() {
    super.componentDidCatch();
    console.log("COmponent Did catch called");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }

    return <Loader messagee="Loading....."/>
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
