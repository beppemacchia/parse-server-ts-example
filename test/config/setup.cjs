const http = require('http');
const ParseServer = require('parse-server').ParseServer;
const app = require('../../src/server/app').app;
const PushAdapterMock = require('./PushAdapterMock').default;
const displayEnvironment = require('../../src/server/express.utility').displayEnvironment;

process.env = {
  ...process.env,
  PARSE_MOUNT: '/parse',
  PORT: '1338',
  DASHBOARD_MOUNT: '/dashboard',
  PUBLIC_SERVER_URL: 'http://localhost:1338',
  LOCAL_SERVER_URL: 'http://localhost',
  APP_ID: '3FyXvQbK97tRd9NMz5LcJYs7GpHq2T5VXAW6CdDPLM',
  MASTER_KEY: 'KpY9vWRGQ6D7XmJZT4F8n53qLt2UsBAcX5NhMYV2RS',
  FILE_KEY: '9a4f21d3-c7b5-49de-bd75-6f3e93f07f7b',
  APP_NAME: 'Parse Server Demo',
  CLIENT_KEY: 'Xx8VA2WJTpRQ6Lg5NYFZ7T9MdwKSQ3nR4JDpU7GMFs',
  JAVASCRIPT_KEY: 'VQ9Z3NY5L8tRTF2MA7JDGpXW6KCWJbU4TsHQmRd5X8',
  RESTAPI_KEY: 'MNXGQW3V8KTA5LJ9YZ7RF2DJ6HCpTb4UWQRSXM2P5V',
  DOTNET_KEY: 'W7JQXGA59YTF2LZ8RN3KDCMWVBJTU4SPHQ6MXRDV5',
  DATABASE_URI: 'mongodb://parse:2025parse@127.0.0.1:27018/parse',
  EMAIL_FROM: 'noreply@example.com',
  PARSE_SERVER_MASTER_KEY_IPS: '0.0.0.0/0,::/0',
};

/**
 * Starts the ParseServer instance
 * @param {Object} parseServerOptions Used for creating the `ParseServer`
 * @return {Promise} Runner state
 */
async function startParseServer() {
  const parseServerOptions = {
    push: {
      adapter: new PushAdapterMock({}),
    },
    databaseURI: process.env.DATABASE_URI,
    masterKey: process.env.MASTER_KEY,
    javascriptKey: process.env.JAVASCRIPT_KEY,
    appId: process.env.APP_ID,
    port: process.env.PORT,
    mountPath: process.env.PARSE_MOUNT ?? '/parse',
    serverURL: `${process.env.LOCAL_SERVER_URL}:${process.env.PORT}${process.env.PARSE_MOUNT}`,
  };

  const server = http.createServer(app);
  await new Promise(resolve =>
    server.listen(parseServerOptions.port, () => {
      resolve();
    })
  );

  // Enable LiveQuery
  // await ParseServer.createLiveQueryServer(server);

  const parseServer = new ParseServer(parseServerOptions);
  await parseServer.start();
  app.use(parseServerOptions.mountPath, parseServer.app);

  Parse.initialize(parseServerOptions.appId || 'myAppId', parseServerOptions.javascriptKey || '');

  await new Promise(resolve => {
    setTimeout(() => {
      displayEnvironment();
      resolve();
    }, 5000);
  });

  return {
    server,
    app,
  };
}

module.exports = async () => {
  console.log();
  console.log('ExpressJS + Parse Server Global Initialization');
  const state = await startParseServer();

  // Set reference in order to close the server during teardown.
  globalThis.parseServerState = state;
};
