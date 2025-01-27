import React, { useMemo } from "react";
import { useParams } from "react-router";
import useGetPokemon from "../../hooks/useGetPokemon";
import { getMainPokemonType } from "../../utils/getMainPokemonTypes";
import { capitilizeFirstLetter } from '../../utils/capitilizeFirtsLetter';
import { convertcm } from "../../utils/convertcm";
import { convertkg } from "../../utils/convertkg";
import { PokemonSprites } from "../PokemonSprites/PokemonSprites";

import { TypeIcons } from "../shared/TypeIcon/TypeIcon";



export const PokemonInfo = () => {
    const { pokemonName } = useParams();
    const { pokemonData } = useGetPokemon(pokemonName);
    const mainType = useMemo(
        () => pokemonData && getMainPokemonType(pokemonData),
        [pokemonData]
    );

    return (
        <div className="flex flex-row justify-between shadow-lg bg-gray-100 rounded-lg">
            <div className={`${mainType}-background w-72 h-72 rounded-l-lg items-center`}>
                <img
                src={pokemonData?.sprites?.front_default}
                alt={pokemonData?.name ?? ""}
                className="mx-auto w-72 h-72"/>
            </div>
            <div className='flex flex-col grow p-5 gap-3'>

                <div className="relative flex">
                <h1 className='text-3xl font-bold'>{capitilizeFirstLetter(pokemonData?.name ?? "")}</h1>
                <TypeIcons types={pokemonData?.types ?? []} />
                </div>
                <h1 className='text-3xl font-bold'>{capitilizeFirstLetter(pokemonData?.name ?? "")}</h1>



                <span>{`Peso: ${convertkg(pokemonData?.weight ?? 0)} kg `}</span>
                <span>{`Altura: ${convertcm(pokemonData?.height ?? 0)} cm `}</span>
                <PokemonSprites pokemonName={pokemonName}/>
            </div>
        </div>
    )
};

