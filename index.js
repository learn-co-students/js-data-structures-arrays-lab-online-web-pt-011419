// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const newArray = [...drivers, `${name}`];
  return newArray
}

function prependDriver(name) {
  const preArray = [name, ...drivers];
  return preArray
}

function removeLastDriver() {
  const remArray = drivers.slice(0, drivers.length - 1);
  return remArray
}

function removeFirstDriver() {
  const remFirstArray = drivers.slice(1, drivers.length)
  return remFirstArray
}
