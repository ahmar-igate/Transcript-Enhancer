"use client";

import * as React from 'react';
import { extendTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { MenuBookRounded } from '@mui/icons-material';
import LaunchIcon from '@mui/icons-material/Launch';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const NAVIGATION: Navigation = [
  { kind: 'header', title: 'Main items' },
  { segment: 'dashboard', title: 'Create', icon: <DashboardIcon /> },
  { segment: 'notes', title: 'My Notes', icon: <MenuBookRounded /> },
  { kind: 'divider' },
  { segment: 'Tutorial', title: 'Tutorial', icon: <LaunchIcon /> },
  { segment: 'Feedback', title: 'Feedback', icon: <ReviewsIcon /> },
  { segment: 'Subscription', title: 'Subscriptions', icon: <MonetizationOnIcon /> },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
  components: {
    MuiListItemText: { styleOverrides: { primary: { fontSize: '1rem' } } },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);
  const router = React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    }),
    [pathname]
  );
  return router;
}

// Global layout that wraps all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useDemoRouter('/dashboard');

  return (
    <html lang="en">
      <head>
        <title>Transcript Enhancer</title>
      </head>
      <body>
        <AppProvider
          navigation={NAVIGATION}
          router={router}
          theme={demoTheme}
          branding={{
            title: 'Transcript Enhancer',
            homeUrl: '/dashboard',
          }}
        >
          <DashboardLayout>
            <PageContainer sx={{ marginTop: 0 }} title="" breadcrumbs={[]}>
              {children}
            </PageContainer>
          </DashboardLayout>
        </AppProvider>
      </body>
    </html>
  );
}
