import { configureStore } from '@reduxjs/toolkit'
import pokemonSearchReducer from './slices/pokemonSearchSlice'
import pokemonBagReducer from './slices/pokemonBagSlice'

export default configureStore({
  reducer: {
    pokemonSearch: pokemonSearchReducer,
    pokemonBag: pokemonBagReducer,
  },
})