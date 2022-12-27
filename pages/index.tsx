import { Button } from '@mantine/core';
import { InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { createPagePaths } from 'src/utils/createPagePaths';

export const getStaticProps = async () => {
  const paths = createPagePaths();
  return { props: { paths } };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ paths }) => {
  const router = useRouter();
  return (
    <div>
      {paths.map((path) => (
        <Button key={path} onClick={() => router.push(path)}>
          {path}
        </Button>
      ))}
    </div>
  );
};

export default Home;
