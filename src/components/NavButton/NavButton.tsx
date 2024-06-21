import { UnstyledButton } from '@mantine/core';
import classes from './NavButton.module.css';
import classNames from 'classnames';

interface NavButtonProps {
  borderTopLeft?: boolean;
  borderTopRight?: boolean;
  borderBottomLeft?: boolean;
  borderBottomRight?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const NavButton = ({
  borderTopLeft,
  borderTopRight,
  borderBottomLeft,
  borderBottomRight,
  onClick,
  children
}: NavButtonProps) => {
  const borderRadiusClasses = classNames({
    [classes.borderTopLeft]: borderTopLeft,
    [classes.borderTopRight]: borderTopRight,
    [classes.borderBottomLeft]: borderBottomLeft,
    [classes.borderBottomRight]: borderBottomRight,
  });

  return (
    <UnstyledButton>
      <div className={`${classes.navButton__wrapper} ${borderRadiusClasses}`}>
        {children}
      </div>
    </UnstyledButton>
  );
};

export default NavButton;
