import { ParseServer } from 'parse-server';
import type { Server } from 'http';
import type { Express } from 'express';
import { displayEnvironment } from './express.utility';
import { parseConfig } from './parse.config';
import { app } from './app';

const startServer = async (appExpress: Express, config: ParseServer.ParseServerOptions): Promise<Server> => {
  // Serve the Parse API on the /parse URL prefix
  const mountPath = config.mountPath || '/parse';
  const api = new ParseServer(config);
  await api.start();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  appExpress.use(mountPath, api.app);
  /**
   * Start Express server.
   */
  const server = appExpress.listen(appExpress.get('port'), displayEnvironment);

  // Enable LiveQuery
  await ParseServer.createLiveQueryServer(server);

  return server;
};

void startServer(app, parseConfig);
