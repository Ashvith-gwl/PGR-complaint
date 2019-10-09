const initState = {
    admin: [
        { id: "1", name: "wqwq", emailid: "qw", department: "qwwq",complaint:"qweqwre dd" },
        { id: "2", name: "wqwq", emailid: "wq", department: "qwq", complaint:"qwds sdcdsvd" }
    ]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_POST":
            let admin = state.admin;
            // return admin.concat([action.data]);
            return { ...state, admin: admin.concat([action.data]) }
        case 'DELETE_POST':
            let admins = state.admin;
            admins = admins.filter((post) => post.id !== action.id);
            return { ...state, admin: admins };
        default:
            return state;
    }
}

export default reducer;