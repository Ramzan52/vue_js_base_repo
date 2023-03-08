import { registerApplication, start } from 'single-spa';
import { loadRemoteEntry } from './utils';

// Load the remote entry file for your React.js application
const remoteEntry = loadRemoteEntry('http://localhost:3001/remoteEntry.js');

// Register the React.js application
registerApplication(
  'my-react-app',
  () => System.import('my-react-app/singleSpaEntry'),
  location => location.pathname.startsWith('/my-react-app'),
  { remoteEntry }
);

// Start the single-spa application
start();
