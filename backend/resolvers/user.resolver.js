import { users } from "../dummyData/data.js";

const userResolver = {
	Query: {
		users: () => {
      return users
		},
		user: async (_, { userId }) => {
				return users.find((user) => user._id === userId);
		},
	},
  Mutation: {},
};

export default userResolver;