// cli/commands/create.js

import { Command } from 'commander';

const createCommand = new Command('create').description(
  'Crear un nuevo proyecto',
);

createCommand.action(() => {
  // createProject()
  console.log('Crea nuevo proyecto');
});

export default createCommand;
