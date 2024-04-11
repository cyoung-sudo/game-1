import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    board: [
      ["R", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
      ["_", "R", "_", "_", "E", "_", "_", "_", "_", "_", "_"],
      ["_", "_", "R", "_", "_", "_", "_", "_", "E", "_", "R"],
      ["_", "_", "_", "R", "_", "P", "_", "_", "_", "R", "_"],
      ["_", "_", "_", "_", "R", "_", "_", "_", "R", "_", "_"],
      ["_", "_", "E", "_", "_", "R", "_", "R", "_", "_", "_"],
      ["_", "_", "_", "_", "_", "_", "R", "_", "_", "_", "_"],
    ],
    turn: 0
  },
  reducers: {
    updateBoard: (state, action) => {
      state.board = action.payload;
    },
    incrementTurn: (state) => {
      state.turn += 1;
    },
    resetTurn: (state) => {
      state.turn = 0;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateBoard, incrementTurn, resetTurn } = appSlice.actions

export default appSlice.reducer