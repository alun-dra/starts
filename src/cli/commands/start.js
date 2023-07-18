// cli/commands/start.js

import { Command } from 'commander';
import { startServer } from '../core';

const startCommand = new Command('start');
startCommand.description('Iniciar el servidor de desarrollo.');

startCommand.action(() => {
  startServer();
});

export default startCommand;
