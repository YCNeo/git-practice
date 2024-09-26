function doJob(job, time, cb) {
    setTimeout(() => {
        // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
        let now = new Date();
        cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
}

// 老師似乎沒有事先宣告(?)
let now = new Date();

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
console.log(`開始工作 at ${now.toISOString()}`);

// write your code here
// 以下是使用範例
doJob('刷牙', 1000, function (data) {
    // 表示 doJob 做完了
    console.log(data);
});

// 使用 setTimeout() 等刷完牙再吃早餐，所以要等 1000 ms
setTimeout(() => doJob('吃早餐', 3000, data => console.log(data)), 1000);

// 使用 setTimeout() 等吃完早餐再寫功課，所以要等 (1000 + 3000) ms
setTimeout(() => doJob('寫功課', 1000, data => console.log(data)), 1000 + 3000);

// 使用 setTimeout() 等寫完功課再吃午餐，所以要等 (1000 + 3000 + 2000)ms
setTimeout(() => doJob('吃午餐', 2000, data => console.log(data)), 1000 + 3000 + 1000);
