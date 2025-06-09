import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { deleteForum, getForum, getForumById,
  deleteCategory, getCategory, getCategoryById
} from "../Action/ContaindicationAction";

const initialState = {
    forums: [],
    totalForum: null,
    forrumDetails: null,
    category: [],
    totalCategory: null,
    categoryDetails: null,
};

export const forrumSlice = createSlice({
  name: "forrumSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(getForum.fulfilled, (state, { payload }) => {
        if (payload?.success) {
          state.forums = payload.data.forum;
          state.totalForum = payload.data.totalForums;
        } else if (!payload?.success) {
          toast.error(payload?.message);
        }
      })
      .addCase(getForumById.fulfilled, (state, { payload }) => {
        if (payload?.success) {
          state.forrumDetails = payload.data;
        } else if (!payload?.success) {
          toast.error(payload?.message);
        }
      })
      .addCase(deleteForum.fulfilled, (state, { payload }) => {
        if (payload?.success) {
          console.log(payload,"payload");
          state.forums = state.forums?.filter((item)=> item?._id != payload?.data?._id);
         // toast.success(payload?.message);
        } else if (!payload?.success) {
          toast.error(payload?.message);
        }
      })

      .addCase(getCategory.fulfilled, (state, { payload }) => {
        if (payload?.success) {
          state.category = payload.data.category;
          state.totalCategory = payload.data.totalCategory;
        } else if (!payload?.success) {
          toast.error(payload?.message);
        }
      })
      .addCase(getCategoryById.fulfilled, (state, { payload }) => {
        if (payload?.success) {
          state.categoryDetails = payload.data;
        } else if (!payload?.success) {
          toast.error(payload?.message);
        }
      })
      .addCase(deleteCategory.fulfilled, (state, { payload }) => {
        if (payload?.success) {
          console.log(payload,"payload");
          state.category = state.category?.filter((item)=> item?._id != payload?.data?._id);
         // toast.success(payload?.message);
        } else if (!payload?.success) {
          toast.error(payload?.message);
        }
      })
      
  },
});

export default forrumSlice.reducer;
