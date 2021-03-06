//
//  Mutations: Set Language
//
export const setLanguage = (state, payload) => {
  state.user.language = payload;
};

//
//  Mutations: Set Current User
//
export const setCurrentUser = (state, payload) => {
  state.user = {
    ...state.user,
    authenticated: true,
    currentUser: JSON.parse(JSON.stringify(payload)),
  };
};

export const setEditedUser = (state, payload) => {
  state.editedUser = JSON.parse(JSON.stringify(payload));
};

export const setError = (state, payload) => {
  state.error = payload;
};

export const resetState = (state) => {
  state.user = {
    authenticated: false,
    currentUser: {},
    language: "",
  };
};
