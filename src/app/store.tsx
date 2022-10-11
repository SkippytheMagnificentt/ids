import { configureStore } from '@reduxjs/toolkit'
import { counterRocks } from '../features/resources/rockCounter'
import { counterIronOre } from '../features/resources/ironOreCounter'

export const store = configureStore({
  reducer: {
    rockCounter: counterRocks.reducer,
    ironOreCounter: counterIronOre.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch