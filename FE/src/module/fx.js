/* eslint-disable eqeqeq */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
export const curry =
  (f) =>
  (arg, ...args) =>
    args.length ? f(arg, ...args) : (...args) => f(arg, ...args);

export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    acc = f(acc, a);
  }
  return acc;
});

export const go = (...args) => reduce((arg, f) => f(arg), args);

export const take = curry((l, iter) => {
  const res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
});

export const slice = curry((l, iter) => {
  const res = [];
  iter = iter[Symbol.iterator]();
  let cnt = 0;
  let cur;
  while (cnt < l) {
    cur = iter.next().done;
    cnt += 1;
    if (cur) return res;
  }

  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(a);
  }
  return res;
});

export const map = curry((f, iter) => {
  const res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(f(a));
  }
  return res;
});
