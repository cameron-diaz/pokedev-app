import { useEffect } from 'react'
import Wrapper from '../organisms/Wrapper'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getInitialPokemonData } from '../../app/reducers/getInitalPokemonData'
import { getPokemonData } from '../../app/reducers/getPokemonData'
import PokemonCardGrid from '../organisms/PokemonCardGrid'

function Search() {
  const dispatch = useAppDispatch()
  const { allPokemon, randomPokemons } = useAppSelector(({ pokemon }) => pokemon)

  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch])

  useEffect(() => {
    if(allPokemon) {
      const clonedPokemons = [...allPokemon]
      const randomPokemonsId = clonedPokemons.sort(
        () => Math.random() - Math.random()
        ).slice(0, 20);
        dispatch(getPokemonData(randomPokemonsId))
    }
    
  }, [allPokemon, dispatch])


  return (
    <>
      <div className="search">
        <input />
        <PokemonCardGrid pokemons={randomPokemons!} />
      </div>
    </>
  )
}

export default Wrapper(Search)