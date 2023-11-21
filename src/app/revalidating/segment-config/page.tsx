import { InlineCodeHighlight } from '@mantine/code-highlight';

import { CodeBlock } from '@/components/CodeBlock';

export const revalidate = 30;
const getDateTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Europe/London',
  );
  const data = await response.json();

  return `${data.datetime}(${data.unixtime})`;
};

export default async function RevalidatingPage() {
  const time = await getDateTime();

  return (
    <div>
      <h2>再検証の例</h2>
      <div>
        <h3 className="flex items-center gap-2 text-2xl">
          ISR {'->'}
          <InlineCodeHighlight
            language="plaintext"
            code={time}
            styles={{
              code: {
                fontSize: 20,
                fontWeight: 600,
              },
            }}
          />
        </h3>
        <CodeBlock>
          {`// page.tsx
export const revalidate = 30;
const getDateTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Europe/London',
  );
  const data = await response.json();

  return \`\${data.datetime}(\${data.unixtime})\`;
};`}
        </CodeBlock>
      </div>
    </div>
  );
}
