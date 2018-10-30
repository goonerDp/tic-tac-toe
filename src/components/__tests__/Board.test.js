import React from "react";
import Board from "../Board";
import { mount } from "enzyme";

let wrapper, onClick;

beforeEach(() => {
  onClick = jest.fn();
  wrapper = mount(<Board squares={Array(9).fill(null)} onClick={onClick} />);
});

afterEach(() => {
  wrapper.unmount();
});

it("it's shape is 3x3 ", () => {
  expect(wrapper.find(".board__row").length).toEqual(3);

  wrapper.find(".board__row").forEach(node => {
    expect(node.find(".square").length).toEqual(3);
  });
});

it("calls onClick event on click of a board square", () => {
  wrapper
    .find("button.square")
    .first()
    .simulate("click");
  expect(onClick).toBeCalledWith(0);
});
