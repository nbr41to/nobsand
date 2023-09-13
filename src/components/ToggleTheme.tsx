'use client';
import { ActionIcon } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useEffect, type FC } from 'react';
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

  useEffect(() => {
    if (
      localStorage.theme === darkModeClassName ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      addDarkModeClassName();
      setValue(darkModeClassName);
    } else {
      removeDarkModeClassName();
    }
  }, []);

  const toggleColorScheme = () => {
    // htmlタグにdarkクラスが含まれているかどうか
    if (document.documentElement.classList.contains(darkModeClassName)) {
      // darkクラスが含まれているならライトモードに変更
      removeDarkModeClassName();
      setValue('');
    } else {
      addDarkModeClassName();
      setValue(darkModeClassName);
    }
  };

  return (
    <div>
      <ActionIcon
        variant="filled"
        color={value === darkModeClassName ? 'blue' : 'yellow'}
        size="lg"
        onClick={toggleColorScheme}
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
