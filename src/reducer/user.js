import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



//createAsyncThunk

//userList
export const userList = createAsyncThunk('userList', async () => {
 let payload = []
 let page = 1
 for (let i = 1; i <= page; i++) {
  const res = await axios.get(`https://reqres.in/api/users?page=${i}`)
  page = res.data.total_pages
  payload = [...payload, ...res.data.data]
 }
 return payload
})


//singleuserdata
export const singleuserdata = createAsyncThunk('singleuserdata', async (id) => {
 const res = await axios.get(`https://reqres.in/api/users/${id}`)
 return res.data.data
})



//initialState
const initialState = {
 userNameList: [],
 singleUserData: null
}


const slice = createSlice({
 name: 'UserData',
 initialState,
 reducers: {

 }, extraReducers: {

  //userList
  [userList.fulfilled]: (state, action) => {
   state.userNameList = action.payload
  },
  [userList.rejected]: (state, action) => {
   console.log('reject')
  },


  //singleuserdata
  [singleuserdata.fulfilled]: (state, action) => {
   state.singleUserData=action.payload
  },
  [singleuserdata.rejected]: (state, action) => {
   console.log('reject')
  }


 }
})


export default slice.reducer