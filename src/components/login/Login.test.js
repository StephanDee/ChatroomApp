import React from "react";
import Login from "./Login";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Login />);
});

describe("<Login />", () => {

  it("renders an login area", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(CardContent)).toHaveLength(1);
    expect(wrapper.find(CardActions)).toHaveLength(1);
    expect(wrapper.find(TextField)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

});
