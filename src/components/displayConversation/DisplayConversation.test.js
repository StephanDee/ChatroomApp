import React from "react";
import DisplayConversation from "./DisplayConversation";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

/*
 * @Author: Stephan Dünkel
 * @Date: 2019-07-17 11:08:42
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-17 11:23:36
 *
 * Testcases for the DisplayConversation component.
 */
configure({ adapter: new Adapter() });

// Wrappers
let wrapper;

beforeEach(() => {
  const data = {
    username: "test",
    message: "test"
  };

  wrapper = shallow(<DisplayConversation messages={[data]} username="test" />);
});

describe("<MessagingPanel />", () => {
  it("renders the DisplayConversation area", () => {
    expect(wrapper.find("div")).toHaveLength(3);
  });
});
