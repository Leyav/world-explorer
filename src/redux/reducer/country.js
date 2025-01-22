import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
    const response = await axios.get(
        'https://restcountries.com/v2/all?fields=name,region,flag'
    );
    return response.data;
});

const countrySlice = createSlice({
    name: 'countries',
    initialState: { countries: [], status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.countries = action.payload;
            })
            .addCase(fetchCountries.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default countrySlice.reducer;
