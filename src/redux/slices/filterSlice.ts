import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface FilterState {
  filter: string
  query: string
}

const initialState: FilterState = {
  filter: "",
  query: "",
}

export const filterSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setStoreFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
    setStoreQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
  },
})

export const { setStoreFilter, setStoreQuery } = filterSlice.actions

export default filterSlice.reducer
