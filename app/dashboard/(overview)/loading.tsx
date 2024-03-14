import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: '100%',
    //     height: '100%',
    //   }}
    // >
    //   <CircularProgress size={50} />
    // </Box>
    <DashboardSkeleton />
  );
}
