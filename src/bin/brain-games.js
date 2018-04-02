#!/usr/bin/env node
import warmWelcome, { askForName } from '..';

console.log('Welcome to the Brain Games!');

warmWelcome(askForName());
