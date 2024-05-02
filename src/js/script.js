const user = {
  name: 'Valera',
  age: 22,
  gender: 'male',
};

function printName(prefix) {
  console.log(`${prefix} ${this.name}`);
}

const myApply = (func, ctx, args) => {
  ctx.printName = func;
  ctx.printName(...args);
  delete ctx.printName;
};

myApply(printName, user, ['TopSecretUsername']);
