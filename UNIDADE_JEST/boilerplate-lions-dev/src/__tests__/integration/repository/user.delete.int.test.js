import userModel from "../../../models/user.model.js";
import userRepository from "../../../repositories/user.repository.js";

describe("when we try to delete a user by id", () => {
  it("successfully deletes the user from the database", async () => {
    const user = {
      name: "name user was delete",
      email: "user@email.com",
      password: "password123",
    };
    const newUser = await userModel.create(user);

    const deletedResult = await userRepository.deleteById(newUser._id);
    expect(deletedResult._id).toEqual(newUser._id);

    const tryToFindUser = await userModel.findById(newUser._id);
    expect(tryToFindUser).toBeNull();
  });
});
