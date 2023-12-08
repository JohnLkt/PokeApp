import { createSlice } from '@reduxjs/toolkit'

export const pokemonBagSlice = createSlice({
  name: 'pokemonBag',
  initialState: {
    value: [],
    warning: 'What will you do?',
  },
  reducers: {
    addPokemon: (state, action) => {
      state.value.push(action.payload);
      state.warning = 'Successfully caught Pokémon and added to Bag';
    },
    deletePokemon: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
    setWarningState: (state, action) => {
      state.warning = action.payload;
    },
    resetWarningState: (state, ) => {
      state.warning = 'What will you do';
    }
  },
})

export const { addPokemon, deletePokemon, setWarningState, resetWarningState } = pokemonBagSlice.actions;

export default pokemonBagSlice.reducer;