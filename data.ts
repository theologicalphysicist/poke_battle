import axios, { AxiosInstance, AxiosResponse } from "axios";

const POKEAPI_INSTANCE: AxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
});

//DONE: FETCH AND DISPLAY POKEMON TO TERMINAL
export const getPokemon = async (name: string, api_instance?: AxiosInstance) => {

    const POKEMON_RESPONSE: AxiosResponse = await POKEAPI_INSTANCE.request({
        url: `/pokemon/${name}`,
        method: "get"
    });

    return POKEMON_RESPONSE.data;
};


export const getPokemonType = async (name: string, api_instance?: AxiosInstance) => {

    const POKEMON_RESPONSE: AxiosResponse = await POKEAPI_INSTANCE.request({
        url: `/pokemon/${name}`,
        method: "get"
    });

    return POKEMON_RESPONSE.data.types;
};


//DONE: GET DAMAGE RELATIONS FOR A POKEMON
export const getDamageRelations = async (type: string, api_instance?: AxiosInstance) => {

    const DAMAGE_REL_RES: AxiosResponse = await POKEAPI_INSTANCE.request({
        url: `/type/${type}`,
        method: "get"
    });

    return DAMAGE_REL_RES.data.damage_relations;
};