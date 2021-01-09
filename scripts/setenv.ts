// Imports modules
const { argv } = require("yargs");
const { writeFile } = require("fs");

// read environment variables from .env file
require("dotenv").config();

// read the command line arguments passed with yargs
const environment = argv.environment;

const isProduction = environment === 'prod';

const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
     export const environment = {
          production: ${isProduction},
          firebaseConfig: {
               apiKey: '${ process.env.API_KEY_FIREBASE }',
               authDomain: '${ process.env.AUTH_DOMAIN_FIREBASE }',
               projectId: '${ process.env.PROYECT_ID_FIREBASE }',
               storageBucket: '${ process.env.STORAGE_BUCKET_FIREBASE }',
               messagingSenderId: '${ process.env.MESSAGING_SENDER_ID }',
               appId: '${ process.env.APP_ID_FIREBASE }',
               measurementId: '${ process.env.MEASUREMENT_ID_FIREBASE }'
          }
     };
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
     if (err) {
          console.log(err);
     }
   
   console.log(`Wrote variables to ${targetPath}`);
});