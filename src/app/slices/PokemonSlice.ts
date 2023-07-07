import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeIntialState } from "../../utils/Types";
import { getInitialPokemonData } from "../reducers/getInitalPokemonData";
import { getPokemonData } from "../reducers/getPokemonData";

const initialState:PokemonTypeIntialState = {
    allPokemon: undefined,
    randomPokemons: undefined
}

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInitialPokemonData.fulfilled,(state, action) => {
            state.allPokemon = action.payload
        });

        builder.addCase(getPokemonData.fulfilled, (state, action) => {
            state.randomPokemons = action.payload;
        })
    },
})

export const {} = PokemonSlice.actions;