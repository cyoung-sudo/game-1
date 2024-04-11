import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    board: [
      ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
      ["R", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
      ["_", "R", "_", "_", "E", "_", "_", "_", "_", "_", "_"],
      ["_", "_", "R", "_", "_", "_", "_", "_", "E", "_", "R"],
      ["_", "_", "_", "R", "_", "P", "_", "_", "_", "R", "_"],
      ["_", "_", "_", "_", "R", "_", "_", "_", "R", "_", "_"],
      ["_", "_", "E", "_", "_", "R", "_", "R", "_", "_", "_"],
      ["_", "_", "_", "_", "_", "_", "R", "_", "_", "_", "_"],
      ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    ],
    moves: 0
  },
  reducers: {
    updateBoard: (state, action) => {
      state.board = action.payload;
    },
    incrementMoves: (state) => {
      state.moves += 1;
    },
    resetMoves: (state) => {
      state.moves = 0;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateBoard, incrementMoves, resetMoves } = appSlice.actions

export default appSlice.reducer