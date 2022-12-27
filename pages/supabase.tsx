import { Button } from '@mantine/core';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { supabase } from 'src/supabase/client';
import { showNotification } from '@mantine/notifications';

const Supabase: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    /* ユーザを取得 */
    (async () => {
      const response = await supabase.auth.getUser();
      console.log(response);
      setLoggedIn(!!response.data.user);
    })();

    /* 認証に関するObserve */
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log(event, session);
        setLoggedIn(!!session);
      },
    );

    return () => {
      /* unsubscribe */
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    /* Databaseから取得 */
    (async () => {
      const response = await supabase.from('book').select('*');
      console.log(response);
    })();
  }, []);

  const createBook = async () => {
    const response = await supabase
      .from('book')
      .insert({
        title: 'test3',
        description: 'test3',
      })
      .select(); // select()をつけないとレスポンスが返ってこない
    console.log(response);
    if (response.error) {
      showNotification({
        color: 'red',
        title: 'Error',
        message: response.error.message,
      });
    }
  };
  /* Googleログイン */
  const googleSignIn = async () => {
    const response = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.href,
      },
    });
    console.log(response);
  };
  /* ログアウト */
  const signOut = async () => {
    const response = await supabase.auth.signOut();
    console.log(response);
  };

  return (
    <div>
      <h1>supabase</h1>

      <Button onClick={createBook}>createBook</Button>
      <br />
      {loggedIn ? (
        <Button onClick={signOut}>signOut</Button>
      ) : (
        <Button onClick={googleSignIn}>googleSignIn</Button>
      )}
    </div>
  );
};

export default Supabase;
