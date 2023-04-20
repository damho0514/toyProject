import { DeleteComment } from '@/features/comments';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function DiscuccionsRoutes() {
  return (
    <Routes>
      <Route path="" element={<DeleteComment />} />
    </Routes>
  );
}
