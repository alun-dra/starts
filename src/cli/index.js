
const { Command } = require('commander');
const createCommand = require('./commands/create').default;
const startCommand = require('./commands/start').default;
const { Component, Router } = require('../core');

// Configurar los comandos del CLI
const program = new Command();
program.addCommand(createCommand);
program.addCommand(startCommand);
program.parse(process.argv);
