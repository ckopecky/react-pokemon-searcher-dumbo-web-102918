import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'

// import _ from 'lodash'

class PokemonPage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1>Go Pokemon!</h1>
        <br />
        {/* <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} /> */}
        <br />
        <PokemonCollection />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
