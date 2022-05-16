import { createSlice } from '@reduxjs/toolkit'

import { langList } from '@data/langList'
import { profileMenuList } from '@data/profileMenuList'
import { sidebarMenuList } from '@data/sidebarMenuList'

export const baseSlice = createSlice({
  name: 'test',
  initialState: {
    isOpenBackdrop: false,
    isOpenRightSidebar: false,
    langList,
    profileMenuList,
    sidebarMenuList,
    sidebarMenuSelectedIndexes: [],
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
    setMenuSelectedIndexes: (state, action) => {
      state.sidebarMenuSelectedIndexes = action.payload
    },
  },
})

export const {
  closeBackdrop,
  openBackdrop,
  closeRightSidebar,
  openRightSidebar,
  setMenuSelectedIndexes,
} = baseSlice.actions

export default baseSlice.reducer
