import { configureStore } from '@reduxjs/toolkit'
import { counterRocks } from '../features/resources/rockCounter'
import { counterIronOre } from '../features/resources/ironOreCounter'
import { counterCopperOre } from '../features/resources/copperOreCounter'
import { counterCopperIgnot } from '../features/resources/copperIgnotCounter'
import { counterIgnotOre } from '../features/resources/ironIgnotCounter'
import { counterMechanicalParts } from '../features/resources/mechanicalPartsCounter'
import { counterEletricalParts } from '../features/resources/eletricalPartsCounter'
import { manageMessages } from '../features/resources/manageMessages'

export const store = configureStore({
  reducer: {
    rockCounter: counterRocks.reducer,
    ironOreCounter: counterIronOre.reducer,
    copperOreCounter: counterCopperOre.reducer,
    ironIgnotCounter: counterIgnotOre.reducer,
    copperIgnotCounter: counterCopperIgnot.reducer,
    mechanicalPartsCounter: counterMechanicalParts.reducer,
    electricalPartsCounter: counterEletricalParts.reducer,
    manageMessages: manageMessages.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch