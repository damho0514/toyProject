import { queryClient } from '@/lib/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import theme from '@/styles/theme';
import { ThemeProvider } from '@/styles/themed-components';
import { Button, ConfigProvider, Spin } from 'antd';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from '@/styles/GlobalStyles';

const ErrorFallback = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
};

type MainProviderProps = {
  children: React.ReactNode;
};

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <Suspense fallback={<Spin size="small" />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GlobalStyle />
        <ConfigProvider>
          <HelmetProvider>
            <ThemeProvider theme={theme}>
              {/* {import.meta.env.NODE_ENV !== 'test' && <ReactQueryDevtools />} */}
              <QueryClientProvider client={queryClient}>
                <Router>{children}</Router>
              </QueryClientProvider>
            </ThemeProvider>
          </HelmetProvider>
        </ConfigProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
