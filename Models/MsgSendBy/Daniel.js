const Model = require(`../AbstractModels/Model`);

const danielID = 91863156703371264;

class Daniel extends Model {
  handle() {
    this.msg.react(`🤡`);
  }
}

module.exports = Daniel;
