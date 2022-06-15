const sha256 = require("../utils/hash");

class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  get hash() {
    return sha256(this.name + this.score);
  }
}

module.exports = User;
