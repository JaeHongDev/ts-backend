import { Backend } from "../Bakend";



function main(){


  // Express server
  const backend = new Backend();
  backend.open()


  // global error handle
  global.process.on("uncaughtException",()=>{
    console.log("err")
  })
  
}

main();