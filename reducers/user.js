import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: null,
    email: null,
    idProfilPict: "",
    profilPictURL: null,
    token: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
    },

    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.email = null;
    },

    setPhoto: (state, action) => {
      console.log(action.payload);
      const { profilPictURL, idProfilPict } = action.payload;
      state.value.profilPictURL = profilPictURL;
      state.value.idProfilPict = idProfilPict;
    },

    setUsername: (state, action) => {
      state.value.username = action.payload;
    },

    setEmail: (state, action) => {
      console.log(action.payload);
      state.value.email = action.payload;
    },
  },
});

export const { login, logout, setPhoto, setUsername, setEmail } = userSlice.actions;
export default userSlice.reducer;
