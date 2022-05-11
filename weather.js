#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';
const saveToken = async (token) => {
  if (!token.length) {
    printError('Невірний токен');
    return;
  }
  try {
    await saveKeyValue('token', token);
    printSuccess('Токен збережений!');
  } catch (err) {
    printError(`Помилка збереження токену! ${err.message}`);
  }
};
const saveCity = async (city) => {
  if (!city.length) {
    printError('Невірне місто');
    return;
  }
  try {
    await saveKeyValue('city', city);

    printSuccess('Місто збережене!');
  } catch (err) {
    printError(`Помилка збереження маста! ${err.message}`);
  }
};
const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    saveCity(args.s);
  }
  if (args.t) {
    saveToken(args.t);
  }
  getWeather(args.t);
};

initCLI();
