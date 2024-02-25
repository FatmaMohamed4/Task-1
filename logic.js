const fs = require("fs")
const data = require("./Data.json")
const { resolveObjectURL } = require("buffer")

//Load data 
const loadData = () => {
    try {
        const DataJson = fs.readFileSync("Data.json").toString()
        return  JSON.parse(DataJson)
    }
    catch {
        return []
    }
    
  }

  //save data
  const savaAllData = (data) => {
    const AllDataJson = JSON.stringify(data)
    fs.writeFileSync("Data.json" , AllDataJson )
}


//add user 
const addUser = (id ,fname , lname , age , city) => {

    const data = loadData()

    const existData = data.filter((obj) => {
      return obj.id === id 
    })



    if (existData.length == 0) {
      data.push({
          id : id,
          fname : fname,
          lname : lname,
          age : age,
          city : city
       })
 
       savaAllData(data)
    } else {
      console.log("ERROR exist ID")
    }

}

//delete user
const deleteUser =(id)=>{
    const load = loadData()
    const keep = load.filter((obj)=>{
        return obj.id !==id
    })
    savaAllData(keep)
    console.log ("Deleted user successfully >>>>>")
}

//read user
const readUser = (id) =>{
    const load = loadData()
    const user =load.find((obj) =>{
        return obj.id == id
    })
    
    if (user) {
        console.log(user.id,user.fname,user.lname,user.age,user.city)
    }else{
        console.log("user not found")
    }
}

//list data =>{forEach}
const listUser = ()=>{
    const data = loadData()
    data.forEach ((obj)=>{
        console.log(obj.fname, obj.age, obj.city)
    })
}

module.exports={
    addUser,
    deleteUser,
    readUser,
    listUser
}