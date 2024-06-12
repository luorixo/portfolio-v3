import classes from './NavigationBar.module.css';
import InverseNavElement from './InverseNavElement.svg';

const NavigationBar = () => {
  return (
    <>
      <InverseNavElement />
      <div className={classes.inverseElement__top} />
      <div className={classes.inverseElement__bottom} />
      <div className={classes.navigationBar__outer} />
      
      <nav className={classes.navigationBar__left} />
      <nav className={classes.navigationBar__top} />
    </>
  );
};

export default NavigationBar;
