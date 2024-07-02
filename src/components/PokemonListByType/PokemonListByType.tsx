import React from "react";
import { useParams } from "react-router"
import useGetPokemonListByType from "../../hooks/useGetPokemonListByTypes";
import { Grid } from "../shared/Gird/Grid";
import { PokemonCard } from "../PokemonCard/PokemonCard";


export const PokemonByTypeList = () => {
    const { typeName } = useParams();
    const { pokemonList } = useGetPokemonListByType(typeName ?? "");

    return (
        <Grid>
           {pokemonList?.map((pokemon) => (
            <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon?.pokemon} />
           ))}
        </Grid>
    );
};