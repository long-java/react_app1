import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import apiPost from '../api/apiPost'; // Import file apiPost

// Slice cho Counter 1
const counterSlice = createSlice({
  name: "counter",
  initialState: { countTest: 0 },
  reducers: {
    increment: (state) => {
      state.countTest += 1;
    },
    decrement: (state) => {
      state.countTest -= 1;
    },
  },
});

// Slice cho Counter 2
const counter2Slice = createSlice({
  name: "counter2",
  initialState: { countTest: 0 },
  reducers: {
    increment: (state) => {
      state.countTest += 2;
    },
    decrement: (state) => {
      state.countTest -= 2;
    },
  },
});

// Tạo thunk để lấy dữ liệu bất đồng bộ
export const fetchPosts = createAsyncThunk("getPosts/fetchPosts", async ({page, id}) => {
  const response = await apiPost.getPosts({page, id});
  return response.data;
});


// Tạo slice
const getPostsSlice = createSlice({
  name: "getPosts",
  initialState: { posts: [], status: "idle", error: null },
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";  // Cập nhật lại status thành idle
    }
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchPosts.pending, (state) => {
      //   state.status = "loading";
      // })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        console.log('succeeded');
        state.status = "succeeded";
        state.posts = action.payload; // Gán dữ liệu từ API vào state
      })
      // .addCase(fetchPosts.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message; // Gán lỗi vào state
      // });
  },
});

// Export actions
export const { increment: increment1, decrement: decrement1 } = counterSlice.actions;
export const { increment: increment2, decrement: decrement2 } = counter2Slice.actions;
export const { get: get } = getPostsSlice.actions;
export const {resetStatus} = getPostsSlice.actions;

// Tạo store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    counter2: counter2Slice.reducer,
		getPosts: getPostsSlice.reducer
  },
});

export default store;
