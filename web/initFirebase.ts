// initFirebase.ts

import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const config: FirebaseOptions = {
    // ...various env variables
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

function createFirebaseApp(config: FirebaseOptions) {
    try {
        return getApp();
    } catch {
        return initializeApp(config);
    }
}

// Initialize App and get a reference to the service
export const firebaseApp = createFirebaseApp(config);

// Initialize Auth and get a reference to the service
export const firebaseAuth = getAuth(firebaseApp);

// Initialize Analytics and get a reference to the service
export const firebaseAnalytics = firebaseApp.name && typeof window !== 'undefined' ? getAnalytics(firebaseApp) : null;