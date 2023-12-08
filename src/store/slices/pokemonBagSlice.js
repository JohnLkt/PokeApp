import { createSlice } from '@reduxjs/toolkit'

export const pokemonBagSlice = createSlice({
  name: 'pokemonBag',
  initialState: {
    value: [],
    warning: 'Choose what to do',
  },
  reducers: {
    addPokemon: (state, action) => {
      state.value.push(action.payload);
      state.warning = 'Successfully caught Pokemon and added to Bag';
    },
    deletePokemon: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
    setWarningState: (state, action) => {
      state.warning = action.payload;
    },
    resetWarningState: (state, ) => {
      state.warning = 'Choose What To Do';
    }
  },
})

export const { addPokemon, deletePokemon, setWarningState, resetWarningState } = pokemonBagSlice.actions;

export default pokemonBagSlice.reducer;