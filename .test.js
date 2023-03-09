const calculateModule = require("./public/js/app");

describe("계산기 테스트", () => {
  /**
   * @jest-environment jsdom
   */

  test("use jsdom in this test file", () => {
    const element = document.createElement("div");
    expect(element).not.toBeNull();
  });

  // case 1
  test("1+2=3", () => {
    expect(calculateModule.test("1", "+", "2")).toBe("3");
  });

  // case 2
   test("-1+3+5*2=12", () => {
    expect(calculateModule.test("-1", "+", "3", "+", "5", "*", "2")).toBe("12");
  });

  // case 3
  test("2+3*5=17", () => {
    expect(calculateModule.test("2", "+", "3", "*", "5")).toBe("17");
  });

  // case 4
  test("2+3-5*5+6/2=-17", () => {
    expect(
      calculateModule.test(
        "2",
        "+",
        "3",
        "-",
        "5",
        "*",
        "5",
        "+",
        "6",
        "/",
        "2"
      )
    ).toBe("-17");
  });

  // case 5
  test("23*5/2+4*6=81.5", () => {
    expect(
      calculateModule.test("2", "3", "*", "5", "/", "2", "+", "4", "*", "6")
    ).toBe("81.5");
  });
});
