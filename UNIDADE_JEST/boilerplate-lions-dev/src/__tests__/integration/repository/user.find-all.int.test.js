import userRepository from "../../../repositories/user.repository.js";

describe("when we try to find all users in the database", () => {
  it("returns every created user and matches the total count", async () => {
    const user1Data = {
      name: "User One",
      email: `user1-${Date.now()}@example.com`,
      password: "strongpassword1",
    };

    const user2Data = {
      name: "User Two",
      email: `user2-${Date.now() + 1}@example.com`,
      password: "strongpassword2",
    };

    const createdUser1 = await userRepository.create(user1Data);
    const createdUser2 = await userRepository.create(user2Data);

    const foundUsers = await userRepository.findAll();

    expect(foundUsers).toBeDefined();

    const ids = foundUsers.map((user) => user._id.toString());

    expect(ids).toContain(createdUser1._id.toString());
    expect(ids).toContain(createdUser2._id.toString());
  });
});
