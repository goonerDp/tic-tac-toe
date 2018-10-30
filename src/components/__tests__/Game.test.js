import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";
import Game, { INITIAL_GAME_STATE } from "../Game";
import Board from "../Board";
import Stats from "../Stats";

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

describe("Game", () => {
  it("should render an Game component with Board and Stats components", () => {
    expect(wrapper.find(Game).length).toBe(1);
    expect(wrapper.find(Board).length).toBe(1);
    expect(wrapper.find(Stats).length).toBe(1);
  });

  it("player x is first", () => {
    expect(INITIAL_GAME_STATE.xIsNext).toBeTruthy();
  });

  it("renders game status correctly", () => {
    const firstPlayer = wrapper.find(".set-status").text();
    //player 1
    expect(firstPlayer).toEqual("Next player: x");
    const button = wrapper.find("button.square").first();
    button.simulate("click");
    const secondPlayer = wrapper.find(".set-status").text();
    expect(secondPlayer).toEqual("Next player: o");
    //player 2
    const turn2 = wrapper.find("button.square").at(1);
    turn2.simulate("click");
    //player 1
    const turn3 = wrapper.find("button.square").at(4);
    turn3.simulate("click");
    //player 2
    const turn4 = wrapper.find("button.square").at(5);
    turn4.simulate("click");
    //player 1
    const turn5 = wrapper.find("button.square").at(8);
    turn5.simulate("click");

    const winner = wrapper.find(".set-status").text();
    const newGameBtn = wrapper.find("button.btn--new-game");
    expect(winner).toContain("Winner: x");
    expect(newGameBtn.length).toBe(1);
  });

  it("should not render 'New game' button, when neither won", () => {
    const button = wrapper.find("button.square").first();
    button.simulate("click");
    const newGameBtn = wrapper.find("button.btn--new-game");
    expect(newGameBtn.length).toBe(0);
  });
});
