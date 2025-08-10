
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.timestamp = new Date();
    Singleton.instance = this;
  }

  getTimestamp() {
    return this.timestamp;
  }
}

const instanceA = new Singleton();
const instanceB = new Singleton();

console.log("Instancia A:", instanceA.getTimestamp());
console.log("Instancia B:", instanceB.getTimestamp());
console.log("¿Es la misma instancia?", instanceA === instanceB);

export default Singleton;
