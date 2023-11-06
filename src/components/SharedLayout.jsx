import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
      <div className="backgroundImage">
        <Outlet />
    </div>
      </Suspense>
    </>
  );
};

export default SharedLayout;
