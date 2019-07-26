let drivers = ["Milo", "Otis", "Garfield"]

function drivers() {
  return drivers;
}

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let theDrivers = [...drivers, name];
  return theDrivers;
}

function prependDriver(name) {
  let theDrivers = [name, ...drivers];
  return theDrivers;
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length -1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
