"use client";

import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { MenuBookRounded } from '@mui/icons-material';
import LaunchIcon from '@mui/icons-material/Launch';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Grid from '@mui/material/Grid2';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Tabs from './components/tabs';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Create',
    icon: <DashboardIcon />,
  },
  {
    segment: 'notes',
    title: 'My Notes',
    icon: <MenuBookRounded />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'Tutorial',
    title: 'Tutorial',
    icon: <LaunchIcon />,
  },
  {
    segment: 'Feedback',
    title: 'Feedback',
    icon: <ReviewsIcon />,
  },
  {
    segment: 'Subscription',
    title: 'Subscriptions',
    icon: <MonetizationOnIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '1rem', 
        },
      },
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);
  return router;
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props: any) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  let demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        // logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: 'Transcript Enhancer',
        homeUrl: '/dashboard',
      }}
    >
      <DashboardLayout>
        <PageContainer sx={{ marginTop: 8 }} title="" breadcrumbs={[]}>
          <Tabs tab1='URL' tab2='Upload' tab3='Text' />
          
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

