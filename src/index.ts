import { ApolloServer } from "apollo-server";
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
// import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';

import { connect } from "./database/db.config"
import  {usersResolvers}  from "./resolvers/userResolver";
import { updateUserTypeDefs } from "./schema/updateUserTypeDefs";

const PORT = process.env.PORT || 4001;

const resolvers = mergeResolvers([usersResolvers,])
const typeDefs= mergeTypeDefs([updateUserTypeDefs,])

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  csrfPrevention: true,
  cache: 'bounded',
  // plugins: [
  //   // Install a landing page plugin based on NODE_ENV
  //   process.env.NODE_ENV === 'production'
  //     ? ApolloServerPluginLandingPageProductionDefault({
  //         graphRef: 'my-graph-id@my-graph-variant',
  //         footer: false,
  //       })
  //     : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  // ],
})

connect().then(() => {
  console.log("Database connected!");
  server.listen(PORT).then(({ url }) => console.info(`App on ${url}`));
});
