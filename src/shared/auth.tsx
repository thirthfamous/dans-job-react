import React from 'react';
import { useNavigate } from 'react-router-dom';

export const withAuth = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WithAuth: React.FC<P> = (props) => {
    const navigate = useNavigate();

    React.useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
      }
    }, [navigate]);

    return <Component {...props} />;
  };

  return WithAuth;
};
