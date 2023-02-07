const myCountPromise = (param) => {
    return new Promise( (resolve, reject) => {
        if(param != undefined){
            resolve(param * 2)
        }else{
            reject("Maaf tidak ada nilai dalam parameter")
        }
    })
  }

  myCountPromise(2)
  .then((result) => {
     console.log(result)
  })
 .catch((error) => {
     console.log(error)
 })