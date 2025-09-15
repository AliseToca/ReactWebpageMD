import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  category?: string;
  image?: string;
}

interface ServicesState {
  items: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  items: [],
  loading: false,
  error: null,
};

const API_URL = "https://68c87ce35d8d9f5147357f1d.mockapi.io/my-api/electrical-services";

export const fetchServices = createAsyncThunk<
  Service[],
  void,
  { rejectValue: string }
>("services/fetchServices", async (_, thunkAPI) => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch services");
    return await res.json();
  } catch (err) {
    return thunkAPI.rejectWithValue("Error loading services");
  }
});


const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchServices.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load services.";
      });
  },
});

export default servicesSlice.reducer;
