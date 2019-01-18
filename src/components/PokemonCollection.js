import React from 'react'
import PokemonCard from './PokemonCard'
import { CardGroup } from 'reactstrap';

const PokemonCollection = props => {
    console.log(props, "pokemon collection");
    return (
      <CardGroup className="card-group">
        <PokemonCard 
          pokemon={props.pokemon}
          currentPage={props.currentPage}
          pageSize={props.pageSize}
        
        />
      </CardGroup>
    )
  }


export default PokemonCollection
