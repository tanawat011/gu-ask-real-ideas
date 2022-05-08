import { createSlice } from '@reduxjs/toolkit'

export const baseSlice = createSlice({
  name: 'test',
  initialState: {
    isOpenBackdrop: false,
    isOpenRightSidebar: false,
  },
  reducers: {
    openBackdrop: state => {
      state.isOpenBackdrop = true
    },
    closeBackdrop: state => {
      state.isOpenBackdrop = false
      state.isOpenRightSidebar = false
    },
    openRightSidebar: state => {
      state.isOpenRightSidebar = true
    },
    closeRightSidebar: state => {
      state.isOpenRightSidebar = false
    },
  },
})

export const { closeBackdrop, openBackdrop, closeRightSidebar, openRightSidebar } = baseSlice.actions

export default baseSlice.reducer
