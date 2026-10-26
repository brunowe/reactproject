import React from 'react';
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/repository/*" element={<Repository />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}
