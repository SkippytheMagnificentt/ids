import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  messages: Array<string>
}

const initialState: CounterState = {
  messages: ["Welcome To Idle Space Conquerors!"],
}

export const manageMessages = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    removeFirst: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.messages.shift()
    },
    addMessage: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeFirst, addMessage } = manageMessages.actions

export default manageMessages.reducer