'use client';

import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('./AdminContainer'), {
  ssr: false,
});

export default function AdminPage() {
    return <AdminApp />;
}