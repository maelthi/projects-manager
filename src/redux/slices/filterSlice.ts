import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface FilterState {
  filter: string
}

const initialState: FilterState = {
  filter: "",
}

export const filterSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setStoreFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
  },
})

export const { setStoreFilter } = filterSlice.actions

export default filterSlice.reducer
