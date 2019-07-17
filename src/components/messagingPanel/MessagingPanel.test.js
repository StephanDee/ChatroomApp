import React, { Fragment } from "react";
import MessagingPanel from "./MessagingPanel"
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import { CardContent, Card } from "@material-ui/core";

/**
 * @Author: Stephan Dünkel
 * @Date: 2019-07-17 10:50:24 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-17 11:04:14
 * 
 * Testcases for the messagingPanel component.
 */
configure({ adapter: new Adapter() });

// Wrappers
let wrapper;

beforeEach(() => {
  wrapper = shallow(<MessagingPanel username="test" />);
});

describe("<MessagingPanel />", () => {
  it("renders the MessagingPanel area", () => {
    // TODO: There is an open issue for React 16 support
    // React.Fragment support is in progress. always check for updates.
    // expect(wrapper.find(Fragment)).toHaveLength(1);
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(CardContent)).toHaveLength(1);
  });
});