
import { Command } from 'commander';
import createCommand from '../cli/commands/create.js';
import startCommand from '../cli/commands/start.js';
import { Component, Router } from '../core';

// Configurar los comandos del CLI
const program = new Command();
program.addCommand(createCommand);
program.addCommand(startCommand);
program.parse(process.argv);
