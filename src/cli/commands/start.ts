// cli/commands/create.js
import { Command } from 'commander';

const startCommand = new Command('start').description(
  'Iniciar el servidor de desarrollo.',
);

startCommand.action(() => {
  // startServer()
  console.log('StartServer');
});

export default startCommand;
