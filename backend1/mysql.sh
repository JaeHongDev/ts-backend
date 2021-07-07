 #!/bin/bash


#mysql install and setting password

command sudo apt update
command sudo apt-get install mysql-server
command sudo service mysql start
command sudo mysql -u root mysql -e "alter user 'root'@'localhost' identified with mysql_native_password by 'root'";
command sudo mysql -u root -p root mysql -e "create database test"

  