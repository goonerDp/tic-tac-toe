import React from "react";
import Game, { INITIAL_GAME_STATE } from "../Game";
import Root from "../../Root";
import { mount } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <Game />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("player x is first", () => {
  expect(INITIAL_GAME_STATE.xIsNext).toBeTruthy();
});
