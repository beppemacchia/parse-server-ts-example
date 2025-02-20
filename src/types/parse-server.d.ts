declare module 'parse-server';

declare module 'parse-server' {
  export class ParseServer {
    constructor(options) {}
  }
  export interface ParseServerOptions {
    // The account lockout policy for failed login attempts.
    accountLockout?: AccountLockoutOptions;

    /**
     * Enable (or disable) client class creation, defaults to true.
     */
    allowClientClassCreation?: boolean;

    /**
     * Enable (or disable) custom objectId, defaults to true.
     */
    allowCustomObjectId?: boolean;

    /**
     * Add headers to Access-Control-Allow-Headers.
     */
    allowHeaders?: string[];

    /**
     * Sets the origin to Access-Control-Allow-Origin.
     */
    allowOrigin?: string;

    /**
     * Adapter module for the analytics.
     */
    analyticsAdapter?: Adapter<any>;

    /**
     * Your Parse Application ID.
     */
    appId?: string;

    /**
     * Sets the app name.
     */
    appName?: string;

    /**
     * Configuration for your authentication providers, as stringified JSON.
     * See http://docs.parseplatform.org/parse-server/guide/#oauth-and-3rd-party-authentication
     */
    auth?: {
      [key: string]: any;
    };

    /**
     * Adapter module for the cache.
     */
    cacheAdapter?: Adapter<any>;

    /**
     * Sets the maximum size for the in-memory cache, defaults to 10000.
     */
    cacheMaxSize?: number;

    /**
     * Sets the TTL for the in-memory cache (in ms), defaults to 5000 (5 seconds).
     */
    cacheTTL?: number;

    /**
     * Key for iOS, MacOS, tvOS clients.
     */
    clientKey?: string;

    /**
     * Full path to your cloud code main.js.
     */
    cloud?: string;

    /**
     * Run with a cluster, optionally set the number of processes default to os.cpus().length.
     */
    cluster?: number | boolean;

    /**
     * A collection prefix for the classes.
     */
    collectionPrefix?: string;

    /**
     * Custom pages for password validation and reset.
     */
    customPages?: CustomPagesOptions;

    /**
     * Adapter module for the database; any options that are not explicitly described here are passed directly to the database client.
     */
    databaseAdapter?: Adapter<any>;

    /**
     * Options to pass to the database client.
     */
    databaseOptions?: DatabaseOptions;

    /**
     * The full URI to your database. Supported databases are mongodb or postgres.
     */
    databaseURI?: string;

    /**
     * Default value for the limit option on queries, defaults to 100.
     */
    defaultLimit?: number;

    /**
     * Set to true if Parse requests within the same Node.js environment as Parse Server should be routed to Parse Server directly
     * instead of via the HTTP interface. Default is false.
     * If set to false, then Parse requests within the same Node.js environment as Parse Server are executed as HTTP requests sent to
     * Parse Server via the serverURL. For example, a Parse.Query in Cloud Code is calling Parse Server via an HTTP request.
     * The server is essentially making an HTTP request to itself, unnecessarily using network resources such as network ports.
     * In environments where multiple Parse Server instances run behind a load balancer and Parse requests within the current Node.js environment
     * should be routed via the load balancer and distributed as HTTP requests among all instances via the serverURL, this should be set to false.
     */
    directAccess?: boolean;

    /**
     * Key for Unity and .Net SDK.
     */
    dotNetKey?: string;

    /**
     * Adapter module for email sending.
     */
    emailAdapter?: Adapter<any>;

    /**
     * Set to true if an email verification token should be reused in case another token is requested but there is a token that is still valid,
     * i.e., has not expired. This avoids the often observed issue that a user requests multiple emails and does not know which link contains
     * a valid token because each newly generated token would invalidate the previous token.
     * Default is false.
     * Requires option verifyUserEmails: true.
     */
    emailVerifyTokenReuseIfValid?: boolean;

    /**
     * Set the validity duration of the email verification token in seconds after which the token expires. The token is used in the link that
     * is set in the email. After the token expires, the link becomes invalid and a new link has to be sent.
     * If the option is not set or set to undefined, then the token never expires.
     * For example, to expire the token after 2 hours, set a value of 7200 seconds (= 60 seconds * 60 minutes * 2 hours).
     * Default is undefined.
     * Requires option verifyUserEmails: true.
     */
    emailVerifyTokenValidityDuration?: number;

    /**
     * Enable (or disable) anonymous users, defaults to true.
     */
    enableAnonymousUsers?: boolean;

    /**
     * Enables the default express error handler for all errors.
     */
    enableExpressErrorHandler?: boolean;

    /**
     * Key for encrypting your files.
     */
    encryptionKey?: string;

    /**
     * Set to true if new users should be created without public read and write access.
     */
    enforcePrivateUsers?: boolean;

    /**
     * Sets whether we should expire the inactive sessions, defaults to true. If false, all new sessions are created with no expiration date.
     */
    expireInactiveSessions?: boolean;

    /**
     * Key for your files.
     */
    fileKey?: string;

    /**
     * Adapter module for the files sub-system.
     */
    filesAdapter?: Adapter<any>;

    /**
     * Options for file uploads.
     */
    fileUpload?: FileUploadOptions;

    /**
     * Mount path for the GraphQL endpoint, defaults to /graphql.
     */
    graphQLPath?: string;

    /**
     * Full path to your GraphQL custom schema.graphql file.
     */
    graphQLSchema?: string;

    /**
     * The host to serve ParseServer on, defaults to 0.0.0.0.
     */
    host?: string;

    /**
     * Options for request idempotency to deduplicate identical requests that may be caused by network issues.
     * Caution, this is an experimental feature that may not be appropriate for production.
     */
    idempotencyOptions?: IdempotencyOptions;

    /**
     * Key for the Javascript SDK.
     */
    javascriptKey?: string;

    /**
     * Log as structured JSON objects.
     */
    jsonLogs?: boolean;

    /**
     * Parse-server's LiveQuery configuration object.
     */
    liveQuery?: LiveQueryOptions;

    /**
     * Live query server configuration options (will start the liveQuery server).
     */
    liveQueryServerOptions?: LiveQueryServerOptions;

    /**
     * Adapter module for the logging sub-system.
     */
    loggerAdapter?: Adapter<any>;

    /**
     * Sets the level for logs.
     */
    logLevel?: string;

    /**
     * Folder for the logs (defaults to './logs'); set to null to disable file-based logging.
     */
    logsFolder?: string;

    /**
     * Your Parse Master Key.
     */
    masterKey?: string;

    /**
     * Restrict masterKey to be used by only these IPs, defaults to [] (allow all IPs).
     */
    masterKeyIps?: Array<string>;

    /**
     * Max value for the limit option on queries, defaults to unlimited.
     */
    maxLimit?: number;

    /**
     * Maximum number of logs to keep. If not set, no logs will be removed. This can be a number of files or the number of days.
     * If using days, add 'd' as the suffix. (default: null)
     */
    maxLogFiles?: number | string;

    /**
     * Max file size for uploads, defaults to 20mb.
     */
    maxUploadSize?: string;

    /**
     * Middleware for the express server, can be string or function.
     */
    middleware?: string | Function;

    /**
     * Mounts the GraphQL endpoint.
     */
    mountGraphQL?: boolean;

    /**
     * Mount path for the server, defaults to /parse.
     */
    mountPath?: string;

    /**
     * Mounts the GraphQL Playground - never use this option in production.
     */
    mountPlayground?: boolean;

    /**
     * Sets the number of characters in generated object ids, default 10.
     */
    objectIdSize?: number;

    /**
     * The options for pages such as password reset and email verification.
     * Caution, this is an experimental feature that may not be appropriate for production.
     */
    pages?: PagesOptions;

    /**
     * The password policy for enforcing password-related rules.
     */
    passwordPolicy?: PasswordPolicyOptions;

    /**
     * Mount path for the GraphQL Playground, defaults to /playground.
     */
    playgroundPath?: string;

    /**
     * The port to run the ParseServer, defaults to 1337.
     */
    port?: number;

    /**
     * Enable (or disable) the addition of a unique hash to the file names.
     */
    preserveFileName?: boolean;

    /**
     * Set to true to prevent a user from logging in if the email has not yet been verified and email verification is required.
     * Default is false.
     * Requires option verifyUserEmails: true.
     */
    preventLoginWithUnverifiedEmail?: boolean;

    /**
     * Protected fields that should be treated with extra security when fetching details.
     */
    protectedFields?: ProtectedFields;

    /**
     * Public URL to your parse server with http:// or https://.
     */
    publicServerURL?: string;

    /**
     * Configuration for push, as stringified JSON.
     * See http://docs.parseplatform.org/parse-server/guide/#push-notifications
     */
    push?: any;

    /**
     * Read-only key, which has the same capabilities as MasterKey without writes.
     */
    readOnlyMasterKey?: string;

    /**
     * An array of keys and values that are prohibited in database read and write requests to prevent potential security vulnerabilities.
     * It is possible to specify only a key ({ "key": "..." }), only a value ({ "value": "..." }), or a key-value pair
     * ({ "key": "...", "value": "..." }). The specification can use the following types: boolean, numeric, or string,
     * where a string will be interpreted as regex notation. Request data is deep-scanned for matching definitions to detect
     * also any nested occurrences. Defaults are patterns that are likely to be used in malicious requests.
     * Setting this option will override the default patterns.
     */
    requestKeywordDenylist?: Array<{ key: any } | { value: any } | { key: any; value: any }>;

    /**
     * Key for REST calls.
     */
    restAPIKey?: string;

    /**
     * When a user changes their password, either through the reset password email or while logged in, all sessions are revoked if this is true.
     * Set to false if you don't want to revoke sessions.
     */
    revokeSessionOnPasswordReset?: boolean;

    /**
     * Configuration for push scheduling, defaults to false.
     */
    scheduledPush?: boolean;

    /**
     * Defined schema.
     */
    schema?: SchemaOptions;

    /**
     * The security options to identify and report weak security settings.
     */
    security?: SecurityOptions;

    /**
     * Callback when the server has closed.
     */
    serverCloseComplete?: Function;

    /**
     * Callback when the server has started.
     */
    serverStartComplete?: Function;

    /**
     * URL to your parse server with http:// or https://.
     */
    serverURL?: string;

    /**
     * Session duration, in seconds, defaults to 1 year.
     */
    sessionLength?: number;

    /**
     * Disables console output.
     */
    silent?: boolean;

    /**
     * Starts the liveQuery server.
     */
    startLiveQueryServer?: boolean;

    /**
     * Personally identifiable information fields in the user table that should be removed for non-authorized users.
     * Deprecated, @see protectedFields.
     */
    userSensitiveFields?: Array<string>;

    /**
     * Set the logging to verbose.
     */
    verbose?: boolean;

    /**
     * Set to true to require users to verify their email address to complete the sign-up process.
     * Default is false.
     */
    verifyUserEmails?: boolean;

    /**
     * Key sent with outgoing webhook calls.
     */
    webhookKey?: string;
  }

  export interface Adapter<T> {}

  export interface AccountLockoutOptions {
    /**
     * Set the duration in minutes that a locked-out account remains locked out before automatically becoming unlocked.
     * Valid values are greater than 0 and less than 100000.
     */
    duration: number;

    /**
     * Set the number of failed sign-in attempts that will cause a user account to be locked. If the account is locked,
     * it will unlock after the duration set in the `duration` option has passed and no further login attempts have been made.
     * Valid values are greater than 0 and less than 1000.
     */
    threshold: number;

    /**
     * Set to true if the account should be unlocked after a successful password reset.
     * Default is false.
     * Requires options `duration` and `threshold` to be set.
     */
    unlockOnPasswordReset: boolean;
  }

  export interface PagesOptions {
    /**
     * Choose password page path.
     */
    choosePassword: string;

    /**
     * Expired verification link page path.
     */
    expiredVerificationLink: string;

    /**
     * Invalid link page path.
     */
    invalidLink: string;

    /**
     * Invalid password reset link page path.
     */
    invalidPasswordResetLink: string;

    /**
     * Invalid verification link page path.
     */
    invalidVerificationLink: string;

    /**
     * Verification link send fail page path.
     */
    linkSendFail: string;

    /**
     * Verification link send success page path.
     */
    linkSendSuccess: string;

    /**
     * For masking user-facing pages.
     */
    parseFrameURL: string;

    /**
     * Password reset success page path.
     */
    passwordResetSuccess: string;

    /**
     * Verify email success page path.
     */
    verifyEmailSuccess: string;
  }

  export interface DatabaseOptions {
    /**
     * Enables database real-time hooks to update single schema cache. Set to `true` if using multiple Parse Servers instances connected to the same database. Failing to do so will cause a schema change to not propagate to all instances and re-syncing will only happen when the instances restart. To use this feature with MongoDB, a replica set cluster with [change stream](https://docs.mongodb.com/manual/changeStreams/#availability) support is required.
     */
    enableSchemaHooks: boolean;
  }

  export interface FileUploadOptions {
    /**
     * Is true if file upload should be allowed for anonymous users.
     */
    enableForAnonymousUser: boolean;

    /**
     * Is true if file upload should be allowed for authenticated users.
     */
    enableForAuthenticatedUser: boolean;

    /**
     * Is true if file upload should be allowed for anyone, regardless of user authentication.
     */
    enableForPublic: boolean;
  }

  export interface IdempotencyOptions {
    /**
     * An array of paths for which the feature should be enabled. The mount path must not be included, for example instead of `/parse/functions/myFunction` specify `functions/myFunction`. The entries are interpreted as regular expressions, for example `functions/.*` matches all functions, `jobs/.*` matches all jobs, `classes/.*` matches all classes, `.*` matches all paths.
     */
    paths: Array<string>;

    /**
     * The duration in seconds after which a request record is discarded from the database, defaults to 300s.
     */
    ttl: number;
  }

  export interface LiveQueryOptions {
    /**
     * parse-server's LiveQuery classNames
     */
    classNames: Array<string>;

    /**
     * LiveQuery pubsub adapter
     */
    pubSubAdapter?: Adapter<PubSubAdapter>;

    /**
     * parse-server's LiveQuery redisOptions
     */
    redisOptions?: any;

    /**
     * parse-server's LiveQuery redisURL
     */
    redisURL?: string;

    /**
     * Adapter module for the WebSocketServer
     */
    wssAdapter?: Adapter<WSSAdapter>;
  }

  export interface LiveQueryServerOptions {
    /**
     * This string should match the appId in use by your Parse Server. If you deploy the LiveQuery server alongside Parse Server, the LiveQuery server will try to use the same appId.
     */
    appId: string;

    /**
     * Number in milliseconds. When clients provide the sessionToken to the LiveQuery server, the LiveQuery server will try to fetch its ParseUser's objectId from parse server and store it in the cache. The value defines the duration of the cache. Check the following Security section and our protocol specification for details, defaults to 5 * 1000 ms (5 seconds).
     */
    cacheTimeout: number;

    /**
     * A JSON object that serves as a whitelist of keys. It is used for validating clients when they try to connect to the LiveQuery server. Check the following Security section and our protocol specification for details.
     */
    keyPairs: any;

    /**
     * This string defines the log level of the LiveQuery server. We support VERBOSE, INFO, ERROR, NONE, defaults to INFO.
     */
    logLevel: string;

    /**
     * This string should match the masterKey in use by your Parse Server. If you deploy the LiveQuery server alongside Parse Server, the LiveQuery server will try to use the same masterKey.
     */
    masterKey: string;

    /**
     * The port to run the LiveQuery server, defaults to 1337.
     */
    port: number;

    /**
     * LiveQuery pubsub adapter
     */
    pubSubAdapter: Adapter<PubSubAdapter>;

    /**
     * parse-server's LiveQuery redisOptions
     */
    redisOptions: any;

    /**
     * parse-server's LiveQuery redisURL
     */
    redisURL: string;

    /**
     * This string should match the serverURL in use by your Parse Server. If you deploy the LiveQuery server alongside Parse Server, the LiveQuery server will try to use the same serverURL.
     */
    serverURL: string;

    /**
     * Number of milliseconds between ping/pong frames. The WebSocket server sends ping/pong frames to the clients to keep the WebSocket alive. This value defines the interval of the ping/pong frame from the server to clients, defaults to 10 * 1000 ms (10 s).
     */
    websocketTimeout: number;

    /**
     * Adapter module for the WebSocketServer
     */
    wssAdapter: Adapter<WSSAdapter>;
  }

  export interface PagesOptions {
    /**
     * The custom routes.
     */
    customRoutes: Array<PagesRoute>;

    /**
     * The URLs to the custom pages.
     */
    customUrls: PagesCustomUrlsOptions;

    /**
     * Is true if pages should be localized; this has no effect on custom page redirects.
     */
    enableLocalization: boolean;

    /**
     * Is true if the pages router should be enabled; this is required for any of the pages options to take effect. Caution, this is an experimental feature that may not be appropriate for production.
     */
    enableRouter: boolean;

    /**
     * Is true if responses should always be redirects and never content, false if the response type should depend on the request type (GET request -> content response; POST request -> redirect response).
     */
    forceRedirect: boolean;

    /**
     * The fallback locale for localization if no matching translation is provided for the given locale. This is only relevant when providing translation resources via JSON file.
     */
    localizationFallbackLocale: string;

    /**
     * The path to the JSON file for localization; the translations will be used to fill template placeholders according to the locale.
     */
    localizationJsonPath: string;

    /**
     * The API endpoint for the pages. Default is 'apps'.
     */
    pagesEndpoint: string;

    /**
     * The path to the pages directory; this also defines where the static endpoint '/apps' points to. Default is the './public/' directory.
     */
    pagesPath: string;

    /**
     * The placeholder keys and values which will be filled in pages; this can be a simple object or a callback function.
     */
    placeholders: Object;
  }

  export interface PagesRoute {
    /**
     * The route handler that is an async function.
     */
    handler: Function;

    /**
     * The route method, e.g., 'GET' or 'POST'.
     */
    method: string;

    /**
     * The route path.
     */
    path: string;
  }

  export interface PagesCustomUrlsOptions {
    /**
     * The URL to the custom page for email verification -> link expired.
     */
    emailVerificationLinkExpired: string;

    /**
     * The URL to the custom page for email verification -> link invalid.
     */
    emailVerificationLinkInvalid: string;

    /**
     * The URL to the custom page for email verification -> link send fail.
     */
    emailVerificationSendFail: string;

    /**
     * The URL to the custom page for email verification -> resend link -> success.
     */
    emailVerificationSendSuccess: string;

    /**
     * The URL to the custom page for email verification -> success.
     */
    emailVerificationSuccess: string;

    /**
     * The URL to the custom page for password reset.
     */
    passwordReset: string;

    /**
     * The URL to the custom page for password reset -> link invalid.
     */
    passwordResetLinkInvalid: string;

    /**
     * The URL to the custom page for password reset -> success.
     */
    passwordResetSuccess: string;
  }

  export interface PasswordPolicyOptions {
    /**
     * Set to `true` to disallow the username as part of the password.
     * Default is `false`.
     */
    doNotAllowUsername: boolean;

    /**
     * Set the number of days after which a password expires.
     * Login attempts fail if the user does not reset the password before expiration.
     */
    maxPasswordAge: number;

    /**
     * Set the number of previous passwords that will not be allowed to be set as a new password.
     * If the option is not set or set to `0`, no previous passwords will be considered.
     * Valid values are >= `0` and <= `20`.
     * Default is `0`.
     */
    maxPasswordHistory: number;

    /**
     * Set to `true` if a password reset token should be reused in case another token is requested
     * but there is a token that is still valid, i.e. has not expired.
     * This avoids the issue that a user requests multiple emails and does not know which link contains a valid token
     * because each newly generated token would invalidate the previous token.
     * Default is `false`.
     */
    resetTokenReuseIfValid: boolean;

    /**
     * Set the validity duration of the password reset token in seconds after which the token expires.
     * If not set or set to `undefined`, then the token never expires.
     * For example, to expire the token after 2 hours, set a value of 7200 seconds (60 seconds * 60 minutes * 2 hours).
     * Default is `undefined`.
     */
    resetTokenValidityDuration: number | undefined;

    /**
     * Set the error message to be sent.
     * Default is "Password does not meet the Password Policy requirements."
     */
    validationError: string;

    /**
     * Set a callback function to validate a password to be accepted.
     * If used in combination with `validatorPattern`, the password must pass both to be accepted.
     */
    validatorCallback: () => boolean;

    /**
     * Set the regular expression validation pattern a password must match to be accepted.
     * If used in combination with `validatorCallback`, the password must pass both to be accepted.
     */
    validatorPattern: string;
  }

  export interface SchemaMigrationOptions {
    /**
     * Execute a callback after running schema migrations.
     */
    afterMigration: () => void;

    /**
     * Execute a callback before running schema migrations.
     */
    beforeMigration: () => void;

    /**
     * Rest representation on Parse.Schema.
     * See https://docs.parseplatform.org/rest/guide/#adding-a-schema
     */
    definitions: any;

    /**
     * Is true if Parse Server should delete any fields not defined in a schema definition.
     * This should only be used during development.
     */
    deleteExtraFields: boolean;

    /**
     * Is true if Parse Server will reject any attempts to modify the schema while the server is running.
     */
    lockSchemas: boolean;

    /**
     * Is true if Parse Server should recreate any fields that are different between the current database schema
     * and the schema definition. This should only be used during development.
     */
    recreateModifiedFields: boolean;

    /**
     * Is true if Parse Server should exit if schema update fails.
     */
    strict: boolean;
  }

  export interface SecurityOptions {
    /**
     * The security check groups to run. This allows adding custom security checks or overriding existing ones.
     * Default are the groups defined in `CheckGroups.js`.
     */
    checkGroups: Array<CheckGroup>;

    /**
     * Is true if Parse Server should check for weak security settings.
     */
    enableCheck: boolean;

    /**
     * Is true if the security check report should be written to logs.
     * This should only be enabled temporarily to not expose weak security settings in logs.
     */
    enableCheckLog: boolean;
  }
}
