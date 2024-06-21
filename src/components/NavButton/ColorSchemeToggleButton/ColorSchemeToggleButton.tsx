import { IconSunHigh, IconMoon } from '@tabler/icons-react';
import NavButton from '../NavButton';
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

const ColorSchemeToggleButton = () => {
  const { toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme();

  return (
    <NavButton borderBottomLeft onClick={toggleColorScheme}>
      {computedColorScheme === 'dark' ? (
        <IconMoon size={38} stroke={1.3} />
      ) : (
        <IconSunHigh size={38} stroke={1.7} />
      )}
    </NavButton>
  );
};

export default ColorSchemeToggleButton;
