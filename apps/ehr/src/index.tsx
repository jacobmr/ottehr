import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ErrorBoundary } from '@sentry/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { loadStripe } from 'ui-components';
import App from './App';
import { FEATURE_FLAGS } from './constants/feature-flags';
import { AuraDemo } from './features/aura/demo';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// trying to speed up stripe loading by declaring this here so it's ready to go by the time it's needed
// Only load Stripe if a key is configured
export const stripePromise = import.meta.env.VITE_APP_STRIPE_KEY
  ? loadStripe(import.meta.env.VITE_APP_STRIPE_KEY)
  : null;

export const AUTH0_REDIRECT_URI =
  import.meta.env.VITE_APP_OYSTEHR_APPLICATION_REDIRECT_URL_TELEMED &&
  location.href.includes(import.meta.env.VITE_APP_OYSTEHR_APPLICATION_REDIRECT_URL_TELEMED)
    ? import.meta.env.VITE_APP_OYSTEHR_APPLICATION_REDIRECT_URL_TELEMED
    : import.meta.env.VITE_APP_OYSTEHR_APPLICATION_REDIRECT_URL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Check if we should render standalone AuraDemo (bypasses auth/API hooks)
const isAuraDemoRoute = window.location.pathname === '/aura-demo';

if (isAuraDemoRoute && FEATURE_FLAGS.AURA_ENABLED) {
  // Render standalone AuraDemo without auth or API dependencies
  const demoTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  root.render(
    <StrictMode>
      <ThemeProvider theme={demoTheme}>
        <CssBaseline />
        <AuraDemo />
      </ThemeProvider>
    </StrictMode>
  );
} else {
  // Render full app with auth and API providers
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Auth0Provider
          domain={import.meta.env.VITE_APP_OYSTEHR_APPLICATION_DOMAIN || ''}
          clientId={import.meta.env.VITE_APP_OYSTEHR_APPLICATION_CLIENT_ID || ''}
          authorizationParams={{
            audience: import.meta.env.VITE_APP_OYSTEHR_APPLICATION_AUDIENCE,
            redirect_uri: AUTH0_REDIRECT_URI,
            connection: import.meta.env.VITE_APP_OYSTEHR_CONNECTION_NAME,
          }}
          cacheLocation="localstorage"
        >
          <ErrorBoundary
            onError={(error, errorInfo) => {
              console.log(String(error), errorInfo);
              if (String(error).includes('TypeError: Failed to fetch dynamically imported module')) {
                location.reload();
              }
            }}
            fallback={<p>An error has occurred</p>}
          >
            <App />
          </ErrorBoundary>
        </Auth0Provider>
      </QueryClientProvider>
    </StrictMode>
  );
}
