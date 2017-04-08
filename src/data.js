class UserList {
    constructor() {
        this.data = [];
    }

    add(user) {
        if (!user) {
            return;
        }

        this.data.push(user);
    }

    getUserById(id) {
        const data = this.data
        for (var i = 0; i < data.length; i++) {
            const it = data[i];
            if ((it.id + "") === id) {
                return it;
            }
        }
        return null;
    }

    createUser(name) {
        return {name: name, id: this.getNewId()};
    }
    //get unique id
    getNewId() {
        return new Date().getTime() + Math.random();
    }
}

var userList = new UserList();

export default userList;
