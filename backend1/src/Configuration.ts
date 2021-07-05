export class Configuration {}

export namespace Configuration {
  export const port = 4001;
}


// npm install mysql2
// npm install -g sequelize-cli
// npm install sequelize

/*
const path = require('path');

module.exports = {
  'config': path.resolve('configs', 'sequelize.js'),
  'models-path': path.resolve('.', 'models'),
  'seeders-path': path.resolve('.', 'seeders'),
  'migrations-path': path.resolve('.', 'migrations')
}

*/


/*

  sudo apt-get install mysql-server
  sudo service mysql start
  mysql -u root mysql -e "alter user 'root'@'localhost' identified with mysql_native_password by 'root'";
  
*/