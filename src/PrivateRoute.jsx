import React, { use } from 'react';

import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = () => {
    const { user, loading } = use(AuthContext);
 if (loading) {
    return <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;