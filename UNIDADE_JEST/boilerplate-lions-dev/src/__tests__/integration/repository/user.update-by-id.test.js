import userModel from "../../../models/user.model.js";
import userRepository from "../../../repositories/user.repository.js";

describe("when we try to update a user by id", () => {
  it("returns the correct user (updated)", async () => {
    const userData = {
      name: "User With ID",
      email: `withid-${Date.now()}@example.com`,
      password: "yetanotherstrongpassword123",
    };

    const userData2 = {
      name: "User With ID",
      email: `withid-${Date.now()}@example.com`,
      password: "yetanotherstrongpassword123",
    };

    const newUser = await userModel.create(userData);
    expect(newUser).toBeDefined();

    const userUpdated = await userRepository.updateById(newUser._id, userData2);
    expect(userUpdated.email).toBe(userData2.email);
  });
});
