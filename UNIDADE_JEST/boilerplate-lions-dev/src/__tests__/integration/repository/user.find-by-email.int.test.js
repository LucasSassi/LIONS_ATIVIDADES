import userModel from "../../../models/user.model.js";
import userRepository from "../../../repositories/user.repository.js";

describe("when we try to find a user by email", () => {
  it("return the correct user", async () => {
    const userData = {
      name: "Find By email User",
      email: `findbyid-${Date.now()}@example.com`,
      password: "strongpasswordforfindbyid123",
    };

    const createdUser = await userModel.create(userData);

    const foundUser = await userRepository.findByEmail(createdUser.email);

    expect(foundUser).toBeDefined();

    expect(foundUser.email.toString()).toBe(createdUser.email.toString());
  });
});
