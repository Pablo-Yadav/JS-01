function makeIterator(n) {
	let it = n[Symbol.iterator]();
  return it;
}