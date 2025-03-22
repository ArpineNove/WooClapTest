import fs from 'fs';
import path from 'path';

import FormWrapper from '@/app/components/FormWrapper';
import translations from '../../public/locales/translations.json';

import Presentation from '@/app/components/Presentation ';

// to utils
async function loadCsvData(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent
    .trim()
    .split('\n')
    .map((line) => line.trim());
}
async function loadUsersPlansData() {
  const filePath = path.join(process.cwd(), 'public/data', 'users.csv');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const usersDomains: Record<string, string> = Object.fromEntries(
    fileContent
      .trim()
      .split('\n')
      .slice(1)
      .map((line) => {
        const [email, plan] = line.split(',').map((cell) => cell.trim());
        return [email, plan];
      })
  );

  return usersDomains;
}
export default async function Home() {
  // run on submit
  const [domains, usersPlans] = await Promise.all([
    loadCsvData(path.join(process.cwd(), 'public/data', 'domains.csv')),
    loadUsersPlansData(),
  ]);

  return (
    <>
      <FormWrapper usersPlans={usersPlans} domains={domains[0].split(',')} />
      <Presentation
        imgSrc="/images/mcq-poll-find-number.png"
        imgAlt="imgCloud"
        title={translations.quickPresentation1.title}
        description={translations.quickPresentation1.description}
      />
      <Presentation
        imgSrc="/images/open-find-word-cloud.png"
        imgAlt="imgCloud"
        title={translations.quickPresentation2.title}
        description={translations.quickPresentation2.description}
        isReversed
      />
    </>
  );
}
