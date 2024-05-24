import fibonacci from "./fibonacci.js";
import { expect, should } from "chai";

describe("fibonacci", () => {
  it("should calculate fibonacci correctly", () => {
    expect(fibonacci(1)).to.have.same.members([1]);
    expect(fibonacci(2)).to.have.same.members([1, 1]);
    expect(fibonacci(3)).to.have.same.members([1, 1, 2]);
    expect(fibonacci(4)).to.have.same.members([1, 1, 2, 3]);
    expect(fibonacci(5)).to.have.same.members([1, 1, 2, 3, 5]);
    expect(fibonacci(6)).to.have.same.members([1, 1, 2, 3, 5, 8]);
    expect(fibonacci(7)).to.have.same.members([1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(8)).to.have.same.members([1, 1, 2, 3, 5, 8, 13, 21]);
    expect(fibonacci(9)).to.have.same.members([1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacci(10)).to.have.same.members([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
