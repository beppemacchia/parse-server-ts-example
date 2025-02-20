# Parse Server Typescript

**Introduction**  
This project is a fork of the `parse-server-example`, completely restructured to be used natively with **TypeScript** in **NodeJS**, instead of JavaScript. The main changes involve the configuration and usage of TypeScript for a more robust and typed development environment.

## Project Structure

The project follows a modular structure, optimized for TypeScript:

```
/src
│── /server
│   ├── app.ts               # Main application file to start the Express.js server
│   ├── parse.config.ts      # Configuration file for Parse, mainly derived from .env
│   ├── express.utility.ts   # Utility functions for Express.js
│
│── /cloud
│   ├── main.ts              # Main file for Cloud Code
│   ├── /models              # TypeScript models for Parse classes (User, Installation, etc.)
│   ├── /modules             # Custom functionalities (functions, triggers, jobs, etc.)
│   ├── /utils               # Support classes (e.g., job-scheduler.ts for cron jobs)
│
│── /shared                  # Shared files between server and Cloud Code (e.g., constants, logger)
│── /types                   # TypeScript definitions for Parse Server
│
.env                          # environment variables to configure Parse Server
Dockerfile                    # Build file for the Parse Server
docker-compose.yml            # Docker compose stack configuration for MongoDB + Parse
tsconfig.json                 # TypeScript configuration file
package.json                  # Dependencies and build scripts
```

## Local Development

1. Make sure you have a compatible Node.js version installed. Run `node --version` to see your local Node.js version. Open the `package.json` file too see which version of Node.js this example repository requires at `{ engines": { "node": "<NODE_VERSION>" } }`. Note that there may be other Parse Server version available that support older or newer Node.js versions, see the [Parse Server compatibility table](https://github.com/parse-community/parse-server#compatibility).
2. Clone this repository and change directory to it.
3. Run `npm install`.
4. Install a MongoDB database locally from https://docs.mongodb.org/master/tutorial/install-mongodb-on-os-x.
5. Run `mongo` to connect to your database, just to make sure it's working. Once you see a mongo prompt, exit with `Control-D`.
6. Launch Parse Server with `npm start`.
7. By default the API route will use `/parse` as a base. You can change this by setting the environment variable `PARSE_MOUNT`, for example in the CLI run run `export PARSE_MOUNT=/app` to set the path to `app`.
8. Your Parse Server is not running and is connected to your local database named `parse` in which the data is stored that you manage via Parse Server.


## Helpful Scripts
These scripts can help you to develop your app for Parse Server:

* `npm start` will start your Parse Server.
* `npm run watch` will start your Parse Server and restart if you make any changes.
* `npm run lint` will check the linting of your code, as defined in `eslint.config.ts`.
* `npm run lint-fix` will attempt fix the linting of your code.
* `npm run prettier` will help improve the formatting and layout of your code, as defined in `.prettierrc`.
* `npm run test` will run any tests that are written in `/spec`.
* `npm run coverage` will run tests and check coverage. Output is available in the `/coverage` folder.

## Remote Deployment

The project includes a `docker-compose.yml` file that simplifies remote deployment of the server. You can deploy your **Parse Server** using **Docker** with the following command:

```bash
docker-compose up -d
```

This command will start the Parse server in a Docker container, ready for production use.


# Using Parse Server

## Health Check

You can use the `/health` endpoint to verify that Parse Server is up and running. For example, for local deployment, enter this URL in your browser:

> [http://localhost:1337/parse/health](http://localhost:1337/parse/health)

If you deployed Parse Server remotely, change the URL accordingly.

## APIs and SDKs

Use the REST API, GraphQL API or any of the Parse SDKs to see Parse Server in action. Parse Server comes with a variety of SDKs to cover most common ecosystems and languages, such as JavaScript, Swift, ObjectiveC and Android just to name a few.

The following shows example requests when interacting with a local deployment of Parse Server. If you deployed Parse Server remotely, change the URL accordingly.

### REST API

Save object:
```sh
curl -X POST \
  -H "X-Parse-Application-Id: YOUR_APP_ID" \
  -H "Content-Type: application/json" \
  -d '{"score":1337}' \
  http://localhost:1337/parse/classes/GameScore
```

Call Cloud Code function:
```sh
curl -X POST \
  -H "X-Parse-Application-Id: YOUR_APP_ID" \
  -H "Content-Type: application/json" \
  -d "{}" \
  http://localhost:1337/parse/functions/hello
```

### JavaScript

```js
// Initialize SDK
Parse.initialize("YOUR_APP_ID", "unused");
Parse.serverURL = 'http://localhost:1337/parse';

// Save object
const obj = new Parse.Object('GameScore');
obj.set('score',1337);
await obj.save();

// Query object
const query = new Parse.Query('GameScore');
const objAgain = await query.get(obj.id);
```

### Android
```java
// Initialize SDK in the application class
Parse.initialize(new Parse.Configuration.Builder(getApplicationContext())
  .applicationId("YOUR_APP_ID")
  .server("http://localhost:1337/parse/")   // '/' important after 'parse'
  .build());

// Save object
ParseObject obj = new ParseObject("TestObject");
obj.put("foo", "bar");
obj.saveInBackground();
```

### iOS / tvOS / iPadOS / macOS (Swift)
```swift
// Initialize SDK in AppDelegate
Parse.initializeWithConfiguration(ParseClientConfiguration(block: {
  (configuration: ParseMutableClientConfiguration) -> Void in
    configuration.server = "http://localhost:1337/parse/" // '/' important after 'parse'
    configuration.applicationId = "YOUR_APP_ID"
}))
```
You can change the server URL in all of the open-source SDKs, but we're releasing new builds which provide initialization time configuration of this property.
