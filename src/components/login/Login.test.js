import React from "react";
import Login from "./Login";
import App from "../../App";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

/*
 * @Author: Stephan Dünkel
 * @Date: 2019-07-16 21:19:54
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-17 09:06:42
 *
 * Testcases for the Login component.
 */
configure({ adapter: new Adapter() });

// Wrappers
let wrapperApp;
let wrapperLogin;

beforeEach(() => {
  wrapperApp = shallow(<App />);
  wrapperLogin = shallow(
    <Login
      setUsername={event => {
        wrapperApp.instance().setUsername(event);
      }}
    />
  );
});

describe("<Login />", () => {
  it("renders the login area", () => {
    expect(wrapperLogin.find("h1")).toHaveLength(1);
    expect(wrapperLogin.find("form")).toHaveLength(1);
    expect(wrapperLogin.find(Card)).toHaveLength(1);
    expect(wrapperLogin.find(CardContent)).toHaveLength(1);
    expect(wrapperLogin.find(CardActions)).toHaveLength(1);
    expect(wrapperLogin.find(TextField)).toHaveLength(1);
    expect(wrapperLogin.find(Button)).toHaveLength(1);
  });

  it("checks the login username TextField", () => {
    let textField = wrapperLogin.find(TextField);
    textField.value = "test";

    expect(textField.value).toEqual("test");
  });

  it("checks the onSubmitButtonClicked event with normal value", () => {
    let button = wrapperLogin.find(Button);

    wrapperLogin.setState({ username: "test" });
    button.simulate("click");

    expect(wrapperLogin.state().username).toEqual("test");
    expect(wrapperApp.state().username).toEqual("test");
  });

  it("checks the onSubmitButtonClicked event with invalid value", () => {
    let button = wrapperLogin.find(Button);

    wrapperLogin.setState({ username: "" });
    button.simulate("click");

    expect(wrapperLogin.state().username).toEqual("");
    expect(wrapperApp.state().username).toEqual(null);
  });

  it("checks the onSubmitButtonClicked event without value", () => {
    let button = wrapperLogin.find(Button);

    button.simulate("click");

    expect(wrapperLogin.state().username).toEqual(undefined);
    expect(wrapperApp.state().username).toEqual(null);
  });
});
