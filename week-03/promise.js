function doJob(job, time, cb) {
    setTimeout(() => {
        // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
        let now = new Date();
        cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
}

function promiseOfDoJob(job, time) {
    return new Promise((resolve, reject) => {
        doJob(job, time, resolve);
    });
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

// write your code here
// 以下是使用範例

promiseOfDoJob('刷牙', 1000)
    .then((data) => {
        console.log(data);
        return promiseOfDoJob('吃早餐', 3000); // Return the next Promise
    })
    .then((data) => {
        console.log(data);
        return promiseOfDoJob('寫功課', 1000); // Return the next Promise
    })
    .then((data) => {
        console.log(data);
        return promiseOfDoJob('吃午餐', 2000); // Return the next Promise
    })
    .then((data) => {
        console.log(data); // Final task done
    })
    .catch((error) => {
        console.error('Something went wrong:', error);  // catch exception
    });
