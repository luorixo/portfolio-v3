import { Button } from '@mantine/core';
import classes from './NavLinkButton.module.css';

const NavLinkButton = ({ label, isActive }: { label: string, isActive: boolean }) => {
  return (
    <Button
      className={classes.navigationBar__button}
      size="compact-sm"
      color="pink"
      data-active={isActive || undefined}
    >
      {label}
    </Button>
  );
};

export default NavLinkButton;
