// cli/commands/create.js

import { Command } from 'commander';
import { createProject } from '../core';

const createCommand = new Command('create');
createCommand.description('Crear un nuevo proyecto.');

createCommand.action(() => {
  createProject();
});

export default createCommand;
