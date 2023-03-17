//your JS code here. If required.

function filtering(arr) {
  let brr = arr.filter((item) => {
    if (item % 2 == 0) {
      return true;
    }
  });
  return brr;
}

function mapping(arr) {
  let brr = arr.map((item) => {
    let mul = item * 2;
    return mul;
  });
  return brr;
}

let arr = [1, 2, 3, 4];

const output = document.querySelector(`#output`);

function promise1(arr) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  });
  return myPromise;
}

function promise2(arr) {
  let ans = filtering(arr);
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log(`filter `, ans);
      resolve(ans);
    }, 1000);
  });
  return myPromise;
}

function promise3(arr) {
  let ans = mapping(arr);
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log(`map `, ans);
      resolve(ans);
    }, 2000);
  });
  return myPromise;
}

promise1(arr)
  .then((res) => {
    // console.log(res);
    return promise2(res);
  })
  .then((res) => {
    // console.log(res);
	  output.innerHTML = res;
    return promise3(res);
  })
  .then((res) => {
    // console.log(`final `, res);
    output.innerHTML = res;
  });
