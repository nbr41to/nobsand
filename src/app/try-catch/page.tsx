'use client';

import { Button } from '@mantine/core';

import { CodeBlock } from '@/components/CodeBlock';

export default function TryCatchPage() {
  const originErrorFunction = async () => {
    /* throw でエラーが起きたことにできる */
    throw new Error('originErrorFunction Error Message!!!!');
  };

  const errorHandlingFunction = async () => {
    try {
      /* tryの中でエラーが起きた場合にエラーの内容がcatchに送られて,tryの処理はそこで泊まる */
      await originErrorFunction();
      alert('do not reach here'); // つまり,ここは実行されない
    } catch (error) {
      alert('errorHandlingFunction catch error: ' + error);

      // throw error; // この関数でエラーが起きたことを外の関数に伝える場合にrethrowする
      // しかし, throw されているので Unhandled Runtime Error
    }
  };

  const withFinallyFunction = async () => {
    try {
      await originErrorFunction();
    } catch (error) {
      alert('withFinallyFunction catch error: ' + error);
    } finally {
      // finallyはエラーが起きても起きなくても実行される
      alert('do finally');
    }
  };

  const notErrorHandlingFunction = async () => {
    /* エラーハンドリングをしない */
    await originErrorFunction();
  };

  const notErrorHandlingWrapFunction = async () => {
    /* ハンドリングしていない関数をtry catchでハンドリングする */
    try {
      await notErrorHandlingFunction();
    } catch (error) {
      alert('notErrorHandlingWrapFunction catch error: ' + error);
    }
  };

  return (
    <div>
      <h3 className="mt-6 text-xl font-bold">throwによるエラーの誘発</h3>
      <Button onClick={originErrorFunction}>Run function1</Button>
      <span className="font-bold">（Unhandled Runtime Error）</span>
      <CodeBlock language="js">
        {`const originErrorFunction = async () => {
  /* throw でエラーが起きたことにできる */
  throw new Error('Error from function1');
};`}
      </CodeBlock>

      <h3 className="mt-6 text-xl font-bold">throwによるエラーの誘発</h3>
      <Button onClick={errorHandlingFunction}>Run errorHandlingFunction</Button>
      <CodeBlock language="js">{`const errorHandlingFunction = async () => {
        try {
          await originErrorFunction();
        } catch (error) {
          alert('errorHandlingFunction catch error' + error);
          
          // throw error; // この関数でエラーが起きたことを外の関数に伝える場合にrethrowする
          // しかし, throw されているので Unhandled Runtime Error
          </span>
        }
      };`}</CodeBlock>

      <h3 className="mt-6 text-xl font-bold">
        finallyでエラーが起きても実行する処理を書く
      </h3>
      <Button onClick={withFinallyFunction}>Run withFinallyFunction</Button>
      <CodeBlock language="js">{`const withFinallyFunction = async () => {
        try {
          await originErrorFunction();
        } catch (error) {
          setError(error as Error);
        } finally {
          // finallyはエラーが起きても起きなくても実行される
          alert('do finally');
        }
      };`}</CodeBlock>

      <h3 className="mt-6 text-xl font-bold">
        originErrorFunctionをハンドリングせずに実行する関数
      </h3>
      <Button onClick={notErrorHandlingFunction}>
        Run notErrorHandlingFunction
      </Button>
      <CodeBlock language="js">{`const notErrorHandlingFunction = () => {
        /* エラーハンドリングをしない */
        originErrorFunction();
      };`}</CodeBlock>

      <h3 className="mt-6 text-xl font-bold">
        notErrorHandlingFunctionをハンドリングすると
      </h3>
      <Button onClick={notErrorHandlingWrapFunction}>
        Run notErrorHandlingWrapFunction
      </Button>
      <CodeBlock language="js">{`const notErrorHandlingWrapFunction = async () => {
  /* ハンドリングしていない関数をtry catchでハンドリングする */
  try {
    await notErrorHandlingFunction();
  } catch (error) {
    alert('function6 catch error' + error);
  }
};`}</CodeBlock>
    </div>
  );
}
