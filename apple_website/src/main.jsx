import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing"; // Correct import
import { Replay } from "@sentry/replay";

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: "https://01fa1d619c73c5f7ba035fbc7ea31ded@o4509025843609600.ingest.de.sentry.io/4509025846755408",
    integrations: [
      new BrowserTracing(),
      new Replay({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
