import React from 'react';
import AttendanceAnalyticsPage from '@/features/attendance/component/AttendanceAnalyticsPage'; 

export const metadata = {
  title: 'Attendance Analytics | Intelligence Hub',
  description: 'Real-time attendance insights, trends, and workforce analytics.',
};

export default function AnalyticsRoute() {
  // You can add server-side permission checks here if needed before rendering the client component
  
  return (
    <main>
      <AttendanceAnalyticsPage />
    </main>
  );
}