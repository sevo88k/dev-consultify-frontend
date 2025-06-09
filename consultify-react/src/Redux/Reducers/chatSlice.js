import { createSlice } from "@reduxjs/toolkit";
import { getConversation } from "../Actions/chat";
import { getAssistance } from "../Actions/user/userAll";

const initialState = {
  conversation: {},
  showAssist: true,
  assistConversationId: null,
  showChat: false,
  isMinChat: false,
  consultationConvo: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      state.conversation[payload?.convoId].push(payload);
    },
    addConsMessage: (state, { payload }) => {
      state.consultationConvo.push(payload);
    },
    closeAssist: (state) => {
      state.showAssist = false;
    },
    viewChat: (state) => {
      state.showChat = true;
      state.showAssist = false;
    },
    closeChat: (state) => {
      state.showChat = false;
    },
    minChat: (state) => {
      state.isMinChat = true;
    },
    maxChat: (state) => {
      state.isMinChat = false;
    },
    addConvoArray: (state, { payload }) => {
      state.consultationConvo = payload;
    },
    setAssistance: (state, { payload }) => {
      console.log(payload)
      if (payload) {
        window.sessionStorage.setItem("convoId", payload?.conversationId);
        state.assistConversationId = payload?.conversationId;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getConversation.fulfilled, (state, { payload }) => {
      if (payload.success) {
        var convoId = payload.message.convoId;
        state.conversation = {
          ...state.conversation,
          [convoId]: payload.message.convoArray,
        };
      }
    });
    // .addCase(getAssistance.fulfilled, (state, { payload }) => {
    //   if (payload?.user?.success) {
    //     if (payload?.user?.message?.conversationId) {
    //       window.sessionStorage.setItem(
    //         "convoId",
    //         payload.user.message.conversationId
    //       );
    //       state.assistConversationId = payload?.user?.message?.conversationId;
    //     }
    //   }
    // });
  },
});

export const {
  addMessage,
  addSocket,
  closeAssist,
  viewChat,
  closeChat,
  minChat,
  maxChat,
  addConsMessage,
  addConvoArray,
  addDoctorNotes,
  addUserNotes,
  setAssistance,
} = chatSlice.actions;

export default chatSlice.reducer;
