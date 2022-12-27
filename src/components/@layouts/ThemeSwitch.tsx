import { ActionIcon } from '@mantine/core';
import { FC } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export const ThemeSwitch: FC = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const isDark = theme !== 'light';

  const onToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <ActionIcon onClick={onToggle} size={44}>
      {isDark ? <MdOutlineDarkMode size={40} /> : <MdDarkMode size={40} />}
    </ActionIcon>
  );
};
