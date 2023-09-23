'use client';
import { Button } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { useState } from 'react';

export default function TryCatchPage() {
  const [error, setError] = useState<Error>();

  const function1 = () => {
    /* throwでJavaScriptでエラーが起きたことにできる */
    throw new Error('Error from function1');
  };

  const function2 = () => {
    try {
      /* tryの中でエラーが起きた場合にエラーの内容がcatchに送られて,tryの処理はそこで泊まる */
      function1();

      alert('do not reach here'); // つまり,ここは実行されない
    } catch (error) {
      setError(error as Error);

      throw error; // この関数でエラーが起きたことを外の関数に伝える場合にrethrowする
    } finally {
      // finallyはエラーが起きても起きなくても実行される
      alert('do finally');
    }
  };

  const function3 = () => {
    try {
      function2();
    } catch (error) {
      // eslint-disable-next-line no-console
      alert('function3 catch error' + error);
    }
  };

  const function4 = () => {
    /* エラーハンドリングをしない */
    function2();
  };

  return (
    <div>
      <Button onClick={function1}>function1</Button>
      <Button onClick={function2}>function2</Button>
      <Button onClick={function3}>function3</Button>
      <Button onClick={function4}>function4</Button>
      {error && (
        <Prism language="json">{JSON.stringify(error.message, null, 2)}</Prism>
      )}
    </div>
  );
}
