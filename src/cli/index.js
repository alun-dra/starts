
import { Command } from 'commander';
import createCommand from './commands/create';
import startCommand from './commands/start';
import { Component, Router } from '../core';

// Configurar los comandos del CLI
const program = new Command();
program.addCommand(createCommand);
program.addCommand(startCommand);
program.parse(process.argv);
