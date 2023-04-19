import admin from 'firebase-admin';
// import { ServiceAccount } from '@google-cloud/storage';
const serviceAccount = require('./firebase-service-account-key.json');
// import serviceAccount from ''
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
export default admin;
