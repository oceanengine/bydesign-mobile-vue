import { generate } from "./generate";
import {
  generateCompositedColor,
  initSerialize,
  finishSerialize,
  serialize,
  deserialize,
} from "./index";

describe("test", () => {
  test("a", async () => {
    const data = generate(0, 256);
    await serialize(data, 0);
    const dataBack = await deserialize(0);
    expect(dataBack).toEqual(data);
  });
});
