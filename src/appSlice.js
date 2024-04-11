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
    score: 0,
    moves: 0,
    finish: false
  },
  reducers: {
    updateBoard: (state, action) => {
      state.board = action.payload;
    },
    incrementScore: (state) => {
      state.score += 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
    incrementMoves: (state) => {
      state.moves += 1;
    },
    resetMoves: (state) => {
      state.moves = 0;
    },
    toggleFinish: (state) => {
      state.finish = !state.finish;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateBoard, incrementScore, resetScore, incrementMoves, resetMoves, toggleFinish } = appSlice.actions

export default appSlice.reducer