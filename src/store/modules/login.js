const login = {
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    loginByUserName () {
      return new Promise((resolve, reject) => {

      })
    }
  }
}

export default login
