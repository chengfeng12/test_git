const a = 1,
      b = 2;

console.log(a);
setTimeout(() => {
  console.log(a + 3, "a  3");
}, 2000)

setTimeout(() => {
  console.log(b + 3, "b  3");
}, 10)

for (let i = 0; i < 100000; i++) {
  if (i == 100000 - 1) {
    console.log('执行完毕');
  }
}

console.log(b);

let promiseList = [1, 2, 3].map((item, index) => {
  return new Promise((resolve, reject) => {
    // if (index === 0) {
    //   resolve(item)
    // }
    reject('error')
  })
})
// all race any allSettled
Promise.any(promiseList).then(res => {
  console.log(res, "res");
}).catch(err => {
  console.log(err, "err");
})


/* const p1 = () => (new Promise((resolve, reject) => {
	console.log(1);
	let p2 = new Promise((resolve, reject) => {
		console.log(2);
		const timeOut1 = setTimeout(() => {
			console.log(3);
			resolve(4);
		}, 0)
		resolve(5);
	});
	resolve(6);
	p2.then((arg) => {
		console.log(arg);
	});

}));
const timeOut2 = setTimeout(() => {
	console.log(8);
	const p3 = new Promise(reject => {
		reject(9);
	}).then(res => {
		console.log(res)
	})
}, 0)


p1().then((arg) => {
	console.log(arg);
});
console.log(10); */


/**
 * 浅拷贝
 * 
 */

/* let obj = {
  name: "ceshi",
  age: 18,
  info: {
    address: "地址"
  }
}

// 单层是深拷贝，多层是浅拷贝
// let obj2 = { ...obj }
let obj2 = Object.assign({}, obj); // 与拓展运算符一样
console.log(obj2);
obj2.name = "修改";
obj2.info.address = "修改了地址";
console.log(obj2);
console.log(obj); */




const test = () => {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}

test().then(res => {
  console.log(res);
}, err => {
  console.log(err, "222");
}).catch(err => {
  console.log(err, '3333');
})

const sleeep = (time) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve()
      }, time)
  })
}

for (let i = 0; i < 5; i++) {
  sleeep(1000 * i).then(() => {
      console.log(i);
  })
}

const hhhah = 'main'



const test2 = 'main2'