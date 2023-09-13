'use client';

import type { FC } from 'react';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

const darkModeClassName = 'dark';
const addDarkModeClassName = () =>
  document.documentElement.classList.add(darkModeClassName);
const removeDarkModeClassName = () =>
  document.documentElement.classList.remove(darkModeClassName);

export const ToggleTheme: FC = () => {
  const [value, setValue] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: darkModeClassName,
  });
  const { toggleColorScheme } = useMantineColorScheme();

  useEffect(() => {
    if (
      localStorage.theme === darkModeClassName ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      addDarkModeClassName();
      setValue(darkModeClassName);
      toggleColorScheme('dark');
    } else {
      removeDarkModeClassName();
      toggleColorScheme('light');
    }
  }, []);

  const toggleTheme = () => {
    // htmlタグにdarkクラスが含まれているかどうか
    if (document.documentElement.classList.contains(darkModeClassName)) {
      // darkクラスが含まれているならライトモードに変更
      removeDarkModeClassName();
      setValue('');
      toggleColorScheme('light');
    } else {
      addDarkModeClassName();
      setValue(darkModeClassName);
      toggleColorScheme('dark');
    }
  };

  return (
    <div>
      <ActionIcon
        radius={9999}
        variant="filled"
        color={value === darkModeClassName ? 'blue' : 'yellow'}
        size="lg"
        onClick={toggleTheme}
      >
        {value === darkModeClassName ? (
          <BsSun size={18} />
        ) : (
          <BsMoonStarsFill size={18} />
        )}
      </ActionIcon>
    </div>
  );
};
