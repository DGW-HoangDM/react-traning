const initState = {
  users: [
    { id: 1, name: 'John' },
    { id: 2, name: 'Henry' },
  ]
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      //console.log('DELETE_USER', action.payload);

      let user = state.users.filter(user => user.id !== action.payload.id);
      return {
        ...state,
        users: user
      }
    case 'CREATE_USER':
      //console.log('CREATE_USER');
      let userCreate = {
        id: Math.floor(Math.random() * 1001),
        name: `Random-${Math.floor(Math.random() * 1001)}`
      };
      return {
        ...state,
        users: [...state.users, userCreate]
      }
    default:
      return state;
  }
}

export default rootReducer;