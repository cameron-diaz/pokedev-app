import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { pokemonsRoute } from "../../utils/Constants";

export const getInitialPokemonData = createAsyncThunk(
    // redux convertion of using namespace and action name separated by /
    "pokemon/initialData", 
    async () => {
    try {
        const { data } = await axios.get(pokemonsRoute);
        return data.results

    } catch (error) {
        console.log(error)
    }
})