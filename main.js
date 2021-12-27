function delay(ms) {
   return new Promise(function(resolve, reject) {
        return setInterval(() => resolve(), ms)
    })
}
delay(1000).then(() => console.log("Hello!"))

//////////////////////////////////////////////////////

function getUserInfo() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1, avatar: ''} ), 1000);
    });
}

function getUserAvatar(userInfo) {
    return new Promise(function(resolve, reject) {
        userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
        setTimeout(() => resolve(userInfo), 1000);
        
    });
}

function getUserAdditionalInfo(userInfo) {
    return new Promise(function(resolve, reject) {
        userInfo.interests = ['sport', 'books'];
        setTimeout(() => resolve(userInfo), 1000);
    });
}

getUserInfo().then((data) => getUserAvatar(data)).then(data => getUserAdditionalInfo(data)).then(data => console.log(data))
////////////////////////////////////////////////////

new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({ name: 'Vic', age: 21, id: 1 } )
        reject(console.log('Reject Error'))

        if(resolve) {
            console.log(resolve())
        } else {
            reject()
        }
    }, 1000);
  })
    .then(function(userInfo) {
      return new Promise(function(resolve, reject) {
          userInfo = 'Footbal'
        setTimeout(() => {
            reject(new Error('wrong data') )
            resolve(console.log('Worked Resolve'))

            if(userInfo) {
                resolve()
            } else {
                reject()
            }
        }, 1000); 
      });
    })

