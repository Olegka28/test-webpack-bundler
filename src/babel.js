async function start() {
  return await Promise.resolve("async is work");
}

start().then(console.log);

class Util {
  static id = Date.now();
}

console.log(Util.id);

const name = "Oleg";

import("lodash").then((_) => console.log(_));
