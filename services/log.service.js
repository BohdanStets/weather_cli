import chalk from 'chalk';
const printError = (err) => {
  console.log(chalk.bgRed('ERROR') + '---' + err);
};
const printSuccess = (msg) => {
  console.log(chalk.bgGreen('SUCCESS') + '---' + msg);
};
const printHelp = () => {
  console.log(
    `
     ${chalk.bgCyan('HELP')}
     Без параметрів - вивід погоди
     -s [CITY] для встановлення міста
     -h для виводу допомоги
     -t [API_KEY] для збереження токену
     `
  );
};

export { printError, printSuccess, printHelp };
