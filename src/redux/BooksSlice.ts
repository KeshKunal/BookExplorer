import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const BASE_URL = "https://openlibrary.org"

interface BookResponse {
    works: {
        authors: { name: string}[];
        title: string;
        key: string;
        cover_id?: number;
    }[];
}
interface SearchResult {
    title: string;
    author_name: string[];
    key: string;
    cover_i?: number;
}
interface BookDetailsResponse {
    title: string;
    subjects: string[];
    description: string | {value: string}
    key: string;
    covers?: number[]
}

interface BookState {
  booksByCategory: { [category: string]: BookResponse["works"] };
  searchResults: SearchResult[];
  bookDetails: BookDetailsResponse | null;
  loading: boolean;
  error: string | null;
}

export const fetchBooksByCategory = createAsyncThunk
(
    "books/fetchBooksByCategory",
    async (category: string) => {
        const response = await axios.get<BookResponse>(`$(BASE_URL)/subjects/${category.toLowerCase()}.json?limit=4)`);
        return { category, books: response.data.works};
    }
);

export const fetchSearchResults = createAsyncThunk<SearchResult[], string>(
    `books/fetchSearchResults`,
    async (query: string) =>{
        const response = await axios.get(`${BASE_URL}/search.json?q=${query}`)
        return response.data.doc.map((doc: {
            title: string;
            author_name: string[];
            key: string;
            cover_i?: number;
        }) => ({
            title: doc.title,
            author_name: doc.author_name || [],
            key: doc.key,
            cover_i: doc.cover_i
        }));
    }

);

export const fetchBookDetails = createAsyncThunk<BookDetailsResponse, string>(
    "books/fetchBookDetails",
    async (bookId: string) => {
        const response = await axios.get<BookDetailsResponse>(
            `${BASE_URL}/works/${bookId}.json`
        );
        return response.data;
    }
);

const initialState: BookState = {
    booksByCategory:{},
    searchResults: [],
    bookDetails: null,
    loading: false,
    error: null,
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooksByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBooksByCategory.fulfilled, (state, action: PayloadAction<{category: string; books: BookResponse["works"]}>) => {
                state.loading = false;
                state.booksByCategory[action.payload.category] = action.payload.books;
            })
            .addCase(fetchBooksByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch books";
            })
            .addCase(fetchSearchResults.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSearchResults.fulfilled, (state, action: PayloadAction<SearchResult[]>) => {
                state.loading = false;
                state.searchResults = action.payload;
            })
            .addCase(fetchSearchResults.rejected, (state, action) =>
        {
            state.loading = false;
            state.error = action.error.message || "failed to fetch data"
        })
        .addCase(fetchBookDetails.pending, (state) =>
        {
            state.loading= true;
            state.error = null;
        })
        .addCase(fetchBookDetails.fulfilled, (state, action: PayloadAction<BookDetailsResponse>) => {
            state.loading = false;
            state.bookDetails = action.payload
        })
        .addCase(fetchBookDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data"
        })
    }
});

export default booksSlice;