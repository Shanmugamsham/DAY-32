import { configureStore } from '@reduxjs/toolkit'
import counterreduser from "../reducer/counterslice"
import counterreduser1 from "../reducer/counterslice1"
import counterreduser2 from "../reducer/counterslice2"
import counterreduser3 from "../reducer/counterslice3"
import counterreduser4 from "../reducer/counterslice4"
import counterreduser5 from "../reducer/counterslice5"
export const store = configureStore({
  reducer: {
    counter:counterreduser,
    counter1:counterreduser1,
    counter2:counterreduser2,
    counter3:counterreduser3,
    counter4:counterreduser4,
    counter5:counterreduser5,

  },
})