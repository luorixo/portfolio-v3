import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <div className={classes.layout__contentWrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
