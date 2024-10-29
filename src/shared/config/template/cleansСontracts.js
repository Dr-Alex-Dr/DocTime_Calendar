import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

const directoryPath = path.join(process.cwd(), 'src/shared/api');
const textToRemove = `/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

`;

const removeTextFromFiles = async (dir) => {
  const files = await readdir(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const fileStat = await stat(filePath);

    // Рекурсивно обходим директории
    if (fileStat.isDirectory()) {
      await removeTextFromFiles(filePath);
    } else {
      // Удаляем текст из файлов
      if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx')) {
        const content = await readFile(filePath, 'utf-8');
        const newContent = content.replace(textToRemove, '');
        await writeFile(filePath, newContent, 'utf-8');
      }

      // Удаляем http-client.ts во всех директориях, кроме core
      if (file === 'http-client.ts' && !filePath.includes('/core/')) {
        await unlink(filePath);
        console.log(`Deleted file: ${filePath}`);
      }
    }
  }
};

removeTextFromFiles(directoryPath).catch((err) => console.error(err));
