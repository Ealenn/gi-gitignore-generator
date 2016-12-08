#!/usr/bin/env node
let program = require('commander');
let Gitignore = require('./gitignore.js');

program
  .version('0.0.1')
  .option('-G, --global', 'Global gitignore file')
  .arguments('<lib>,<lib>....')
  .action(function(lib) {
    var Git = new Gitignore(lib);
    Git.generate(program.global);
  });

program
  .command('list')
  .description('List template/package .gitignore')
  .action(function(options){
    Gitignore.list();
  });

program.parse(process.argv);
