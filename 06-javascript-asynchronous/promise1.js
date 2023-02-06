const myCountPromise = (param) => {
    if(param != undefined){
        console.log(param * 2)
    }
    return new Promise( (resolve, reject) => {
        resolve("");
    })
  }

  myCountPromise(2)
  .then((result) => {
     console.log(result)
  })
 .catch((error) => {
     console.log(error)
 })