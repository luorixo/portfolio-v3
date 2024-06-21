import classes from './NavigationBar.module.css';
import { Group, Stack } from '@mantine/core';
import NavLinkButton from '@/components/NavLinkButton/NavLinkButton';
import NavButton from '@/components/NavButton/NavButton';
import { IconSun } from '@tabler/icons-react';
import ScrollProgressBar from '@/components/ScrollProgressBar/ScrollProgressBar';
import MenuButton from '@/components/NavButton/MenuButton/MenuButton';
import ColorSchemeToggleButton from '@/components/NavButton/ColorSchemeToggleButton/ColorSchemeToggleButton';

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
        <Stack className={classes.navigationBar__left__stack} gap={0}>
          <MenuButton />
          <ScrollProgressBar />
          <ColorSchemeToggleButton />
        </Stack>
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
