import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define the form data type
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Slice state
interface ContactState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
};

// Async thunk to "send" the form
export const sendContactForm = createAsyncThunk<
  void, // return type
  ContactFormData, // argument type
  { rejectValue: string }
>("contact/sendContactForm", async (formData, thunkAPI) => {
  try {
    // Simulate API request (replace with real backend)
    const response = await new Promise<{ ok: boolean }>((resolve) =>
      setTimeout(() => resolve({ ok: true }), 1000)
    );

    if (!response.ok) {
      throw new Error("Failed to send form");
    }
  } catch (err) {
    return thunkAPI.rejectWithValue("Could not send message. Try again later.");
  }
});

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendContactForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export const selectContact = (state: RootState) => state.contact;
export default contactSlice.reducer;