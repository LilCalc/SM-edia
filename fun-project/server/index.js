const { ApolloServer, gql } = require(apollo-server);
const db = require("./data");
const typedefs = gql`
type User {
    _id: String
    name: String
    username: String
  }
  type Status {
    _id: String
    userId: String
    user: User
    status: String
    isLiked: Boolean
    `;

const resolvers = {
    Status: {
        user: status => {
          return db
            .get("users")
            .find({ _id: status.userId })
            .value();
        }
      },
      Query: {
        feed: () =>
      db
        .get("posts")
        .filter({ parentPostId: null })
        .value(),
    responses: (parent, args) => {
        return db
        .get("posts")
        .filter({ parentPostId: args._id })
        .value();
    }
}
}