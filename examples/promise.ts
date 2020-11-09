import { resolve } from "dns";
import { readFileSync } from "mz/fs"

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

// delay(1000 )

// function loadJsonAsync(filename: string): Promise<any> {
//   return readFileSync(filename).then(res => JSON.parse(res))
// }

function loadItem(id: number): Promise<{id: number}> {
  return new Promise(resolve => {
    console.log('loading item', id);
    setTimeout(() => {
      resolve({id})
    }, 1000)
  })
}

let item1, item2;

loadItem(1)
  .then(res => {
    item1 =res;
    return loadItem(2)
  })
  .then(res => {
    item2 = res;
    console.log('done')
  })

Promise.all([loadItem(1),loadItem(2)])
  .then(res => {
    console.log('res', res);

    [item1, item2] = res;
    console.log('done')
  })


  var task1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'one');
  });
  var task2 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 2000, 'two');
  });

  Promise.race([task1, task2]).then(function(value) {
    console.log(value); // "one"
    // Both resolve, but task1 resolves faster
  });