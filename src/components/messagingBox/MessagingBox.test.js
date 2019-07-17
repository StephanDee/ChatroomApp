import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import MessagingBox from "./MessagingBox";
import MessagingPanel from "../messagingPanel/MessagingPanel";
import { TextField, Button } from "@material-ui/core";

/**
 * @Author: Stephan Dünkel
 * @Date: 2019-07-17 09:10:09
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-17 10:51:18
 *
 * Testcases for the MessagingBox component.
 */
configure({ adapter: new Adapter() });

// Wrappers
let wrapperMessagingPanel;
let wrapper;

beforeEach(() => {
  wrapperMessagingPanel = shallow(<MessagingPanel username="test" />);
  wrapper = shallow(
    <MessagingBox
      getMessage={message =>
        wrapperMessagingPanel.instance().getMessage(message)
      }
    />
  );
});

describe("<App />", () => {
  it("renders the messageBox area", () => {
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find(TextField)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("checks the messageHandler event on change textfield", () => {
    const expectedValue = "test";
    const event = { target: { value: "test" } };
    let textField = wrapper.find(TextField);

    textField.value = "test";
    textField.simulate("change", event);

    expect(textField.value).toEqual(expectedValue);
    expect(wrapper.state().message).toEqual(expectedValue);
  });

  // TODO: Check JSON-Response
  // Currently getting InvalidStateError: Still CONNECTING State
  it("!!! checks the sendMessage event on click button [Cannot be trusted yet!] !!!", () => {
    const expectedValue = "test";
    // let button = wrapper.find(Button);

    wrapper.setState({ message: expectedValue });
    const data = {
      username: wrapperMessagingPanel.state().username,
      message: wrapper.state().message
    };

    expect(wrapper.state().message).toEqual(expectedValue);

    // button.simulate("click");

    // Simulates the button.simulate("click");
    // Does not check the actual method "sendMessage()"
    wrapperMessagingPanel.state().messages = [
      ...wrapperMessagingPanel.state().messages,
      data
    ];
    expect(wrapperMessagingPanel.state().messages).toEqual([data]);
    wrapper.setState({ message: "" });
    expect(wrapper.state().message).toEqual("");
  });
});
