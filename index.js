const logic = require("./logic.js")
const yargs = require("yargs")
const x = require("./Data.json")

// Add user
yargs.command ({
    command : "add",
    describe : "to add new User",
    builder: {
        
        id : {
          describe: "this is the id description in add command",
          demandOption: true,
          type : "string"
       } ,
        fname : {
           describe: "this is the first name description in add command",
           demandOption: true,
           type : "string"
        },
        lname : {
          describe: "this is the last name description in add command",
          demandOption: true,
          type : "string"
       },
       city :{
        type :"string"
       },
       age :{
        type :"string"
       }
      },
      handler:(x)=> {
        logic.addUser(x.id , x.fname , x.lname,x.age , x.city)
        console.log("Added user correctly")
      }

    })

//Delete user 
yargs.command({
    command : "delete",
    describe : "to delete user",
    builder: {
        id: {
            describe: "ID of the user to delete",
            demandOption: true,
            type: "string"
        }
    } ,
    handler:(x)=> {
       logic.deleteUser(x.id)
    }
  
  })
  
//read user
  yargs.command({
    command : "read",
    describe : "to read user",
    builder: {
        id: {
            describe: "ID of the user to read",
            demandOption: true,
            type: "string"
        }
    } ,
    handler:(x)=> {
       logic.readUser(x.id)
    }
  
  })

//list user 
yargs.command({
  command:"list",
  describe:"list users",
  handler :() =>{
    logic.listUser()
  }

})

    yargs.parse()