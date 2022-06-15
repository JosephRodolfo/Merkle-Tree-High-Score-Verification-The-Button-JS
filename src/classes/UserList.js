class UserList{
	constructor() {
		this.list = [];
	}

	add(user) {
		this.list.push(user);
	}
}

module.exports = UserList;