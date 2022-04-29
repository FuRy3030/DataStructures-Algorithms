import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialSearchValue = { value: '' };

const headerSearchSlice = createSlice({
    name: 'searchBar',
    initialState: initialSearchValue,
    reducers: {
        changeSearchValue(state, action) {
            state.value = action.payload;
        }
    }
});

const store = configureStore({
    reducer: { search: headerSearchSlice.reducer }
});

export const SearchBarActions = headerSearchSlice.actions;

export default store;