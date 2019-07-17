import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

/*
 * @Author: Stephan Dünkel
 * @Date: 2019-07-17 09:05:42
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-17 09:06:49
 *
 * Testcases for the App component.
 */
configure({ adapter: new Adapter() });

// Wrappers
let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("checks the setUsername event", () => {
    let value = "test";
    wrapper.instance().setUsername(value);
    expect(wrapper.state().username).toEqual(value);
  });
});
