import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clothes: [],
  temporaryClothe: {
    name: "",
    maintype: "",
    color: {},
    image: "",
    subtype: "",
    brand: "",
    event: {
      party: false,
      sport: false,
      casual: false,
      work: false,
    },
    material: "",
    cut: "",
    season: {
      spring: false,
      summer: false,
      fall: false,
      winter: false,
    },
    waterproof: "false",
    id: ""
  },
};

export const clotheSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.temporaryClothe.name = action.payload;
    },
    setMaintype: (state, action) => {
      state.temporaryClothe.maintype = action.payload;
    },
    setId: (state, action) => {
      state.temporaryClothe.id = action.payload;
    },
    setColor: (state, action) => {
      state.temporaryClothe.color = action.payload;
    },
    setImage: (state, action) => {
      state.temporaryClothe.image = action.payload;
    },
    setSubtype: (state, action) => {
      state.temporaryClothe.subtype = action.payload;
    },
    setBrand: (state, action) => {
      state.temporaryClothe.brand = action.payload;
    },
    setEvent: (state, action) => {
      if (action.payload === 'Soirée') {
          state.temporaryClothe.event.party = !state.temporaryClothe.event.party;
      } else if (action.payload === 'Sport') {
          state.temporaryClothe.event.sport = !state.temporaryClothe.event.sport;
      } else if (action.payload === 'Casual') {
          state.temporaryClothe.event.casual = !state.temporaryClothe.event.casual;
      } else if (action.payload === 'Work') {
          state.temporaryClothe.event.work = !state.temporaryClothe.event.work;
      }
    },
    setMaterial: (state, action) => {
      state.temporaryClothe.material = action.payload;
    },
    setCut: (state, action) => {
      state.temporaryClothe.cut = action.payload;
    },
    setSeason: (state, action) => {
      if (action.payload === 'Printemps') {
        state.temporaryClothe.season.spring = !state.temporaryClothe.season.spring;
    } else if (action.payload === 'Été') {
        state.temporaryClothe.season.summer = !state.temporaryClothe.season.summer;
    } else if (action.payload === 'Automne') {
        state.temporaryClothe.season.fall = !state.temporaryClothe.season.fall;
    } else if (action.payload === 'Hiver') {
        state.temporaryClothe.season.winter = !state.temporaryClothe.season.winter;
    }    },
    setWaterproof: (state, action) => {
      state.temporaryClothe.waterproof = action.payload;
    },
    saveTemporaryClothe: (state) => {
      state.clothes.push(state.temporaryClothe);
    },
    deleteClothe: (state, action) => {
      console.log("id passé au reducer", action.payload)  
      state.clothes = state.clothes.filter(e => e.id !== action.payload)
  },

    resetTemporaryClothe: (state) => {
      state.temporaryClothe = {
        name: "",
        maintype: "",
        color: {},
        image: "",
        subtype: "",
        brand: "",
        event: {
          party: false,
          sport: false,
          casual: false,
          work: false,
        },
        material: "",
        cut: "",
        season: {
          spring: false,
          summer: false,
          fall: false,
          winter: false,
        },
        waterproof: "",
        id: ""
      };
    },

    saveClothe: (state) => {
      const combinedClothe = {
        name: state.temporaryClothe.name,
        maintype: state.temporaryClothe.maintype,
        color: state.temporaryClothe.color,
        image: state.temporaryClothe.image,
        subtype: state.temporaryClothe.subtype,
        brand: state.temporaryClothe.brand,
        event: state.temporaryClothe.event,
        material: state.temporaryClothe.material,
        cut: state.temporaryClothe.cut,
        season: state.temporaryClothe.season,
        waterproof: state.temporaryClothe.waterproof,
        id: state.temporaryClothe.id,
        username: null
      };
      state.clothes.push(combinedClothe);
      state.temporaryClothe = {
        name: null,
        maintype: null,
        color: null,
        image: null,
        subtype: null,
        brand: null,
        event: null,
        material: null,
        cut: null,
        season: null,
        waterproof: null,
        id: null,
        username: null
    }
  },
  resetClothesStore: (state, action) =>{
    state.clothes = []
  },
  PushFromDBToClothesStore: (state, action) =>{
    state.clothes = action.payload
  },
    // resetClothes: (state) => {
    //   state.clothes = [
    //     {
    //       name: "Pull Zara Noir",
    //       maintype: "top",
    //       color: { hexa: "#000000", name: "black" },
    //       image:
    //         "https://res.cloudinary.com/deqzrhnzz/image/upload/v1691133671/8184_big_fmjmif.jpg",
    //       subtype: "Pull",
    //       brand: "Zara",
    //       event: {
    //         party: true,
    //         sport: false,
    //         casual: true,
    //         work: true,
    //       },
    //       material: "",
    //       cut: "",
    //       season: {
    //         spring: false,
    //         summer: false,
    //         fall: false,
    //         winter: false,
    //       },
    //       waterproof: false,
    //     },
    //     {
    //       name: "T-shirt Nike Blanc",
    //       maintype: "top",
    //       color: { hexa: "#ffffff", name: "white" },
    //       image:
    //         "https://res.cloudinary.com/deqzrhnzz/image/upload/v1691133800/32d0a59364014c588fc4f2717311ed4e_jl11eo.jpg",
    //       subtype: "T-shirt",
    //       brand: "Nike",
    //       event: {
    //         party: true,
    //         sport: true,
    //         casual: true,
    //         work: true,
    //       },
    //       material: "",
    //       cut: "",
    //       season: {
    //         spring: false,
    //         summer: false,
    //         fall: false,
    //         winter: false,
    //       },
    //       waterproof: false,
    //     },
    //     {
    //       name: "Pantalon Zara Beige",
    //       maintype: "bottom",
    //       color: { hexa: "#D4BE8D", name: "beige" },
    //       image:
    //         "https://res.cloudinary.com/deqzrhnzz/image/upload/v1691134615/dh528-pantalon-ete-chanvre-beach_jffaah.jpg",
    //       subtype: "Pantalon",
    //       brand: "Zara",
    //       event: {
    //         party: true,
    //         sport: false,
    //         casual: false,
    //         work: true,
    //       },
    //       material: "",
    //       cut: "",
    //       season: {
    //         spring: false,
    //         summer: false,
    //         fall: false,
    //         winter: false,
    //       },
    //       waterproof: false,
    //     },
    //     {
    //       name: "Nike Air Force Beige",
    //       maintype: "shoes",
    //       color: { hexa: "#D4BE8D", name: "beige" },
    //       image:
    //         "https://res.cloudinary.com/deqzrhnzz/image/upload/v1691134799/jd_647147_a_ivfcm3.jpg",
    //       subtype: "Basket",
    //       brand: "Nike",
    //       event: {
    //         party: true,
    //         sport: false,
    //         casual: true,
    //         work: false,
    //       },
    //       material: "",
    //       cut: "",
    //       season: {
    //         spring: false,
    //         summer: false,
    //         fall: false,
    //         winter: false,
    //       },
    //       waterproof: false,
    //     },
    //     {
    //       name: "Lunettes Prada Noir",
    //       maintype: "accessories",
    //       color: { hexa: "#000000", name: "black" },
    //       image:
    //         "https://res.cloudinary.com/deqzrhnzz/image/upload/v1691134933/prada-pr17ws-1ab-5s0-49-20-noir-medium_ylebnp.jpg",
    //       subtype: "Lunettes",
    //       brand: "Prada",
    //       event: {
    //         party: false,
    //         sport: false,
    //         casual: false,
    //         work: false,
    //       },
    //       material: "",
    //       cut: "",
    //       season: {
    //         spring: false,
    //         summer: false,
    //         fall: false,
    //         winter: false,
    //       },
    //       waterproof: false,
    //     },
    //     {
    //       name: "Casquette NY noir",
    //       maintype: "accessories",
    //       color: { hexa: "#000000", name: "black" },
    //       image:
    //         "https://res.cloudinary.com/deqzrhnzz/image/upload/v1691135050/casquette-baseball-new-york-yankees_lw5n8a.jpg",
    //       subtype: "Casquette",
    //       brand: "NY",
    //       event: {
    //         party: true,
    //         sport: false,
    //         casual: true,
    //         work: false,
    //       },
    //       material: "",
    //       cut: "",
    //       season: {
    //         spring: false,
    //         summer: false,
    //         fall: false,
    //         winter: false,
    //       },
    //       waterproof: false,
    //     },
    //     {
    //       name: "Ceinture LV Cuir",
    //       maintype: "accessories",
    //       color: { hexa: "#000000", name: "black" },
    //       image:
    //         "https://res.cloudinary.com/deqzrhnzz/image/upload/v1691135217/cuir-de-ceinture-reversible-32mm--073967CAAA-front-1-300-0-1000-1000_g_fwmby4.jpg",
    //       subtype: "Ceinture",
    //       brand: "LV",
    //       event: {
    //         party: true,
    //         sport: true,
    //         casual: true,
    //         work: true,
    //       },
    //       material: "",
    //       cut: "",
    //       season: {
    //         spring: false,
    //         summer: false,
    //         fall: false,
    //         winter: false,
    //       },
    //       waterproof: false,
    //     },
    //   ];
    // },
  },
});

export const {
  setName,
  setMaintype,
  setColor,
  setImage,
  setSubtype,
  setBrand,
  setEvent,
  setMaterial,
  setCut,
  setSeason,
  setWaterproof,
  saveTemporaryClothe,
  resetTemporaryClothe,
  resetClothesStore,
  resetClothes,
  setId,
  saveClothe,
  deleteClothe,
  PushFromDBToClothesStore
} = clotheSlice.actions;

export default clotheSlice.reducer;