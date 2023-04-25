import { getPokemonType, getDamageRelations, getPokemon } from "./data";
import types from "./types.json";

/*  //_ OPTION 1 (call this Algo3)
    //* get pokemon type
    //* get search for all pokemon of damage multipliers to that type
    //* compare by base state
    //* iterate for each opponent pokemon
*/


/*  //_ OPTION 2
    * calculate a type set for pokemon
    * create an opposing typeset that maximises damage values
        * i.e., +1 for double damage, -1 for half-damage
    * find best pokemon to fit that typeset via base-stat

    _ ALGORITHM CHOICES
    *1. select pokemon that best combats a typeset of an increasing number of pokemon, and add that to my pokeset (call this Algo1)

    *2. n-dimensional grid of type distribution of opponents pokeset (i.e., +1 to grass stat for every pokemon that is a grass type)
    *   then find mean position and create pokeset that combats that mean position (call this Algo2)

*/

export const getPokeSet3 = async (opponent_pokedeck: string[]) => {
    let my_pokedeck: any = {};
    types.pokemonTypes.forEach((type: any) => {
        my_pokedeck[type] = 0
    });

    //* TOO COMPLICATED, CAN BE REFACTORED
    for (const POKEMON of opponent_pokedeck) {
        // console.log(`${POKEMON}: ${JSON.stringify(await getPokemonType(POKEMON), null, 4)}\n`);
        const OPP_TYPES: any[] = await getPokemonType(POKEMON);

        for (const OPP_TYPE of OPP_TYPES) {
            // console.log(OPP_TYPE.type.name);
            const TYPES_RES = await getDamageRelations(OPP_TYPE.type.name);

            const DDF = TYPES_RES.double_damage_from;
            for (const O_TYPE of DDF) {
                my_pokedeck[O_TYPE.name] += 1;
            };

            const DDT = TYPES_RES.double_damage_to;
            for (const O_TYPE of DDT) {
                my_pokedeck[O_TYPE.name] -= 1;
            };

            const HDF = TYPES_RES.half_damage_from;
            for (const O_TYPE of HDF) {
                my_pokedeck[O_TYPE.name] += 1;
            };

            const HDT = TYPES_RES.half_damage_to;
            for (const O_TYPE of HDT) {
                my_pokedeck[O_TYPE.name] -= 1;
            };
        };
    };

    return my_pokedeck;

};

const getPokeSet2 = (opponent_pokedeck: any) => {

}

export const getPokeSet1 = async (opponent_pokedeck: string[]) => {
    //* HERE, WOULD CALL getPokeSet3, but for [opponent_pokedeck[0]], [opponent_pokedeck[0], opponent_pokedeck[1]], etc...
    await getPokeSet3
}