function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
      var books=[
          {name: "shinchan", totalPage: 50, isColorful: true},
          {name: "Kalkulus", totalPage: 250, isColorful: false},
          {name: "doraemon", totalPage: 40, isColorful: true},
          {name: "algoritma", totalPage: 250, isColorful: false},
      ]
      if (amountOfPage >= 40) {
          resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
          var reason= "Maaf buku di bawah 40 halaman tidak tersedia"         
          reject(reason);
        }
    });
  }

let execute = async () => {
    try {
        let result1 = await filterBooksPromise(true,40)
        console.log(result1)
        let result2 = await filterBooksPromise(false,250)
        console.log(result2)
        let result3 = await filterBooksPromise(true,30)
        console.log(result3)
    } catch (error) {
        console.log(error)
    }
}

execute()