import { Utiluuid } from "../../utils/uuid";

test("uuid test", () => {
  const uuid = Utiluuid.uuid();

  expect(uuid).toMatch(/\b4[0-9A-Fa-f]{31}\b/g);
});
