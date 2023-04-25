import axios, { AxiosInstance, AxiosResponse } from "axios";

//_ CUSTOM IMPORTS
import {consola} from "consola";

//_ LOCAL IMPORTS
import pkg from "./match.ts";
const { getPokeSet3, getPokeSet1 } = pkg;

//DONE: SET UP TYPESCRIPT

//_ CREATE GENERAL API INSTANCE

//DONE: NEED LIST OF TEST POKEMON
//* to be changed later depending on desired input
//* possible to allow for corrections to pokemon name, incase of misinput
//* also possible to allow random pokedeck generation?

const TEST_POKEDECK: string[] = [
    "manectric",
    "bisharp",
    "leafeon",
    "scolipede",
    "chewtle",
    "nosepass"
];

//TODO: NEED FUNCTION TO COMPARE POKEMON

consola.info(await getPokeSet3(TEST_POKEDECK));

//TODO: CREATE POKEMON TS-TYPE, TO EXTRACT REQUIRED INFO OF POKEMON ONLY, AND POSSIBLY A TYPESET & POKESET
//TODO: HOW TO FILTER POKEMON FETCHED IN TERMS OF TYPE