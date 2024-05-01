// const wait = (time, cb) => {
//     setTimeout(() => {
//         cb()
//     }, time)
// }

// wait(3000, () => { console.log('3s')});

// above function using promise

const wait = (time) => {
    return new Promise(() => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

// wait(3000, () => {
//     wait(2000, () => {

//     })
// })

wait(3000)
    .then(() => {
        return wait(2000)
    })
    .then()