function getTodos() {
    return new Promise(function(resolve, reject) {
        let data = [
            {id:1, task: 'buy milk', userId: 1},
            {id:2, task: 'buy present', userId: 2}
        ];
        setTimeout(() => { resolve(data) }, 1000)
    });
}

function getUserInfo(userId) {
    return new Promise(function(resolve, reject) {
        const data = [
            {id: 1,name: 'Vic'},
            {id: 2,name: 'Pet'},
        ]
        const result = data.find((el) => el.id === userId);

        if(result) {
            resolve(result);
        } else {
            reject('Error: No Data')
        }
    })
}

getTodos()
    .then((data) => { return data[0]})
    .then((todo) => {
        return getUserInfo(todo.userId);
    })
    .then((data) => { console.log(data) })
    .catch((data) => console.error(data))

