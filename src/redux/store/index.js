import { configureStore } from '@reduxjs/toolkit'
import counterreduser from "../reducer/counterslice"
export const store = configureStore({
  reducer: {
    counter:counterreduser
  },
})