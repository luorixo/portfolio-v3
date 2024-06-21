import { UnstyledButton } from '@mantine/core';
import classes from './NavButton.module.css';
import classNames from 'classnames';

interface NavButtonProps {
  borderTopLeft?: boolean;
  borderTopRight?: boolean;
  borderBottomLeft?: boolean;
  borderBottomRight?: boolean;
  onClick?: () => void;
}

const NavButton = ({
  borderTopLeft,
  borderTopRight,
  borderBottomLeft,
  borderBottomRight,
  onClick
}: NavButtonProps) => {
  const borderRadiusClasses = classNames({
    [classes.borderTopLeft]: borderTopLeft,
    [classes.borderTopRight]: borderTopRight,
    [classes.borderBottomLeft]: borderBottomLeft,
    [classes.borderBottomRight]: borderBottomRight,
  });

  return (
    <UnstyledButton>
      <div className={`${classes.navButton__wrapper} ${borderRadiusClasses}`}>image</div>
    </UnstyledButton>
  );
};

export default NavButton;
