import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB); // додати ", 'utf-8'" у дужках
    return JSON.parse(contacts); // або JSON.parse()
  } catch (error) {
    console.error(error);
  }
};

readContacts();
