/**
 * Stops the ParseServer instance
 * @return {Promise}
 */
const stopParseServer = async (httpServer) => {
  await new Promise(resolve => httpServer.close(resolve));
}

const dropDB = async () => {
  await Parse.User.logOut();
  return await Parse.Server.database.deleteEverything(true);
};

module.exports = async () => {
  console.log('Stop Parse Server');
  const parseServerState = globalThis.parseServerState;
  await dropDB();
  await stopParseServer(parseServerState.server);
  globalThis.parseServerState = {};
};
