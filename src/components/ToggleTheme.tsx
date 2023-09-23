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
    key: 'theme',
    defaultValue: darkModeClassName,
  });
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    if (
      value === darkModeClassName ||
      localStorage.getItem('theme') === darkModeClassName
    ) {
      addDarkModeClassName();
      setValue(darkModeClassName);
      setColorScheme('dark');
    } else {
      removeDarkModeClassName();
      setColorScheme('light');
    }
  }, []);

  const toggleTheme = () => {
    // htmlタグにdarkクラスが含まれているかどうか
    if (document.documentElement.classList.contains(darkModeClassName)) {
      // darkクラスが含まれているならライトモードに変更
      removeDarkModeClassName();
      setValue('');
      setColorScheme('light');
      localStorage.removeItem('theme');
    } else {
      addDarkModeClassName();
      setValue(darkModeClassName);
      setColorScheme('dark');
      localStorage.setItem('theme', darkModeClassName);
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
