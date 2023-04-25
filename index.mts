import axios, { AxiosInstance } from "axios";
//TODO: SET UP TYPESCRIPT

import {consola} from "consola";

//_ CREATE GENERAL API INSTANCE
const POKEAPI_INSTANCE: AxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
});

//DONE: NEED LIST OF TEST POKEMON
const TEST_POKEMON: string[] = [
    "manectric",
    "Bisharp",
    "Leafeon",
    "Scolipede",
    "chewtle",
    "Nosepass"
];

//TODO: NEED FUNCTION TO COMPARE POKEMON

//DONE: FETCH AND DISPLAY POKEMON TO TERMINAL
const getPokemon = async (name: string) => {

    const POKEMON_RESPONSE = await POKEAPI_INSTANCE.request({
        url: `/pokemon/${name}`,
        method: "get"
    });

    return POKEMON_RESPONSE.data;
};

//TODO: GET DAMAGE RELATIONS FOR A POKEMON
const getDamageRelations = async (type: string) => {

    const DAMAGE_REL_RES = await POKEAPI_INSTANCE.request({
        url: `/type/${type}`,
        method: "get"
    });

    return DAMAGE_REL_RES.data;
};

consola.info(await getPokemon(TEST_POKEMON[0]));