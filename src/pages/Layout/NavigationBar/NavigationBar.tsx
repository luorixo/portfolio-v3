import classes from './NavigationBar.module.css';
import { Group } from '@mantine/core';
import NavLinkButton from '@/components/NavLinkButton/NavLinkButton';
import NavButton from '@/components/NavButton/NavButton';
import Logo from '@/assets/Logo';

const links = [
  { target: '/home', label: 'HOME', active: true },
  { target: '/about', label: 'ABOUT' },
  { target: '/work', label: 'WORK' },
];

const NavigationBar = () => {
  return (
    <>
      {/* <InverseNavElement /> */}
      <div className={classes.inverseElement__top} />
      <div className={classes.inverseElement__bottom} />
      <div className={classes.navigationBar__outer} />

      <nav className={classes.navigationBar__left}>
        <NavButton borderTopLeft>
          <Logo />
        </NavButton>
      </nav>
      <nav className={classes.navigationBar__top}>
        <Group gap="lg" justify="center">
          {links.map((link, index) => (
            <NavLinkButton key={index} label={link.label} isActive={link.active || false} />
          ))}
        </Group>
      </nav>
    </>
  );
};

export default NavigationBar;
