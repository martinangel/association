/**
 * MediaScape SharedState - config.js
 * configuration file
 *
 * @author Andreas Bosl <bosl@irt.de>
 * @copyright 2014 Institut für Rundfunktechnik GmbH, All rights reserved.
 */
var config = {};

// configuration for authentication
config.auth = {
    useAuthentication: false, // Authentication Enabled true/false
    GOOGLE_CLIENT_ID: "--- XYZ ---", // obtain from https://console.developers.google.com/project
    GOOGLE_CLIENT_SECRET: "--- XYZ ---", // obtain from https://console.developers.google.com/project
    GOOGLE_CALLBACK_URL: "http:// --- XYZ ---/auth/google/callback", // Your Domain + /auth/google/callback
    session_secret: 'ForLittleKnowsMyRoyalDameThatRumpelstiltskinIsMyName!', // secret for the session cookie
    session_name: 'mappingAuth' // name for the session cookie
};

// config for mongodb / mongoose
config.mongoose = {
    uri: 'mongodb://localhost/',
    options: {
        server: {
            socketOptions: {
                keepAlive: 1
            }
        }
    }
};

// config for the Core
config.db = {
    file: './MongoDB.js' // MongoDB
};

// TableName used for mapping
config.mappingPath = 'mappingTable'; 


// config for express
config.express = {
    port: 7000,
    filePath: '/../public'
};


// Config for log4js
config.logConfig = {
    appenders: [
        {
            type: 'file',
            filename: './log/sharedsstate.log',
            maxLogSize: 10240,
            backups: 3
        },
        {
            type: "console"
        }
  ],
    replaceConsole: true
};

module.exports = config;
