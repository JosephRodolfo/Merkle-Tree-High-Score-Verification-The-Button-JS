// TODO: Add comments

const MerkelTree = require("../classes/MerkelTree");
const User = require("../classes/User");
const UserList = require("../classes/UserList");

let userList = new UserList();

for (let index = 0; index < 5; index++) {
  userList.add(new User(Math.random(), Math.random()));
}

const tree = new MerkelTree();

tree.createTree(userList.list);

//valid
tree.verify(userList.list[2]);

//not valid, after messing with name
userList.list[2].name = 0.993939338;
tree.verify(userList.list[2]);
