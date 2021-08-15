import { createConnection } from "typeorm";

import Backend from "./Backend";
async function main() {
  // seeting
  // const argv = process.argv;
  // console.log(argv);

  const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "TEST",
    entities: [`${__dirname}/entity/*.entity.js`],
    synchronize: true,
    dropSchema: true,
  });

  
  Backend.listen(4000, () => {
    console.log("start server");
  });
}

main();

/*

  select * from user 
    inner join user_community 
      on user.id = user_community.usersId
    inner join community
      on user_community.communitiesId = community.id

*/
