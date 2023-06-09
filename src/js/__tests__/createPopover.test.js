/* eslint-disable jest/valid-expect */
import createPopover from "../createPopover";
import "jest";

test("should return true", () => {
  expect(createPopover()).toBe(true);
});

test("should return false", () => {
  const popover = document.createElement("div");
  popover.classList.add("popover");
  expect(createPopover()).toBe(false);
});
