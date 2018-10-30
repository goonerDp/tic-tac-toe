import React from "react";
import Square from "../Square";
import { shallow } from "enzyme";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Square />);
});

it("contains only one button element", () => {
  expect(wrapped.find("button").length).toEqual(1);
});
