// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

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
    let newdrivers = [...drivers, name];
    return newdrivers;
}

function prependDriver(name) {
    let newdrivers = [name, ...drivers];
    return newdrivers;
}

function removeLastDriver() {
    let removeddriver = drivers.slice(0, -1);
    return removeddriver;
}

function removeFirstDriver() {
    let removeddriver = drivers.slice(1);
    return removeddriver;
}