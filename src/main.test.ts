import { addTwoPlusTwo } from "./main";

describe("testing tests", () => {
  it("adds 2+2", () => {
    expect(addTwoPlusTwo()).toBe(4);
  });
});
