import api from "../../Service/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMembersForChat = createAsyncThunk(
  "getMembersForChat",
  async (thunkApi) => {
    const response = await api.get("/getNeedAssist");
    return response.data;
  }
);

export const sendMessage = createAsyncThunk(
  "sendMessage",
  async (messageObject, thunkApi) => {
    const response = await api.post("/saveMessage", messageObject);
    return response.data;
  }
);

export const getConversation = createAsyncThunk(
  "getConversation",
  async (convoId, thunkApi) => {
    const response = await api.get(`/getConversation/${convoId}`);
    return response.data;
  }
);

export const delChat = createAsyncThunk("delChat", async (id, thunkApi) => {
  const response = await api.delete(`delChat/${id}`);
  return response.data;
});
