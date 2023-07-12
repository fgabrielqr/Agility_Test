import React from 'react';
import Router from './router';
import { AuthProvider } from './context/authContext';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
