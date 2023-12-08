import { createSlice } from '@reduxjs/toolkit'

export const pokemonSearchSlice = createSlice({
  name: 'pokemonSearch',
  initialState: {
    value: '',
    warning: ' ',
  },
  reducers: {
    setPokemonSearch: (state, action) => {
      state.value = action.payload
    },
    resetPokemonSearch: (state) => {
      state.value = ''
    },
    setSearchWarning: (state, action) => {
      state.warning = action.payload
    },
    resetSearchWarning: (state) => {
      state.warning = ' '
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPokemonSearch, resetPokemonSearch, setSearchWarning, resetSearchWarning } = pokemonSearchSlice.actions

export default pokemonSearchSlice.reducer