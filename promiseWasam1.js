// cricket example  by  Wasam
function firstOver(num) {
    let over1st = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("First Over in progress");
            if (num > 3) {
                resolve("End of First Over");
            }
            else if (num <= 3) {
                reject("Score Chased. Pak has won the match");
            }
        }, 5000);
    });
    return over1st;
}
;
function secondOver() {
    let over2nd = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Second Over in progress");
            resolve("End of Second Over");
        }, 3000);
    });
    return over2nd;
}
;
// let Over_1=firstOver();
//Over_1
firstOver(2)
    .then((text) => {
    console.log(text);
    return secondOver();
}).then((text) => {
    console.log(text);
}).catch((err) => {
    console.log(err);
});
export {};
