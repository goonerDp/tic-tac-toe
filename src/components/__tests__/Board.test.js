import React from "react";
import Board from "../Board";
import { mount } from "enzyme";

let wrapped;

beforeEach(() => {
  wrapped = mount(<Board squares={Array(9).fill(null)} />);
});

afterEach(() => {
  wrapped.unmount();
});

it("it's shape is 3x3 ", () => {
  expect(wrapped.find(".board__row").length).toEqual(3);

  wrapped.find(".board__row").forEach(node => {
    expect(node.find(".square").length).toEqual(3);
  });
});
