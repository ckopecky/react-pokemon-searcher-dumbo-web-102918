import React from 'react'
import PokemonCard from './PokemonCard'
import { CardGroup } from 'reactstrap';
import axios from 'axios';

class PokemonCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon : []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/pokemon")
      .then(response => {
        this.setState({pokemon: response.data});
        console.log(this.state, "this.state")
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <CardGroup className="card-group">
        <PokemonCard pokemon = {this.state.pokemon}/>
      </CardGroup>
    )
  }
}

export default PokemonCollection
