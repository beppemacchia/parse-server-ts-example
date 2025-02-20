/* eslint-disable @typescript-eslint/no-unsafe-argument */
import bodyParser from 'body-parser';
import express from 'express';
import ParseDashboard from 'parse-dashboard';
import { ParseServer } from 'parse-server';
import path from 'path';
import { envConfig, isDev, projectRoot, publicParseUrl } from '../shared/constants';
import { displayEnvironment } from './express.utility';
import { parseConfig } from './parse.config';

const start = async (): Promise<void> => {
  // Create an Express server instance
  const app = express();

  // Enable 'trust proxy' to correctly handle requests behind a proxy (e.g., in cloud environments)
  app.set('trust proxy', true);

  // Set the server port, using the value from environment variables or defaulting to 1337
  app.set('port', envConfig.PORT || 1337);

  // Configure body parser middleware to handle URL-encoded data
  app.use(
    bodyParser.urlencoded({
      limit: '50mb', // Allow request bodies up to 50MB in size
      extended: false, // Use classic encoding instead of extended mode
    })
  );

  // Configure body parser middleware to handle JSON data
  app.use(bodyParser.json({ limit: '50mb' })); // Allow JSON payloads up to 50MB in size

  // Serve static assets from the /public folder
  app.use('/public', express.static(path.join(projectRoot, 'public')));

  // Serve the Parse API on the /parse URL prefix
  const mountPath = envConfig.PARSE_MOUNT || '/parse';
  const api = new ParseServer(parseConfig);
  await api.start();
  app.use(mountPath, api.app);

  // Parse Server plays nicely with the rest of your web routes
  app.get('/', (req, res) => {
    res.status(200).send('Make sure to star the parse-server-ts-example repo on GitHub!');
  });

  /* Enable Dashboard in development mode */
  if (isDev) {
    const dashboard = new ParseDashboard(
      {
        apps: [
          {
            serverURL: publicParseUrl || 'http://localhost:1337/parse',
            appId: envConfig.APP_ID || 'myAppId',
            masterKey: envConfig.MASTER_KEY || '',
            javascriptKey: envConfig.JAVASCRIPT_KEY || '',
            restKey: envConfig.RESTAPI_KEY || '',
            appName: envConfig.APP_NAME || 'Parse Demo',
          },
        ],
        users: [
          {
            user: 'admin',
            pass: 'demo',
          },
        ],
        useEncryptedPasswords: false,
      },
      {
        allowInsecureHTTP: isDev,
      }
    );

    // make the Parse Dashboard available at /dashboard
    app.use(envConfig.DASHBOARD_MOUNT, dashboard);
  }

  /**
   * Start Express server.
   */
  const server = app.listen(app.get('port'), displayEnvironment);

  // Enable LiveQuery
  await ParseServer.createLiveQueryServer(server);
};

void start();
