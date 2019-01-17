import React from 'react'
import { Card, CardImg, CardTitle } from 'reactstrap';
import heartbeat from './heartbeat-solid.svg';

class PokemonCard extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {
      flipped: false
    }
  }
  

render() {
  return (
    <React.Fragment>
      {this.props.pokemon.map(char => {
        return (
          <div key={char.id} className="card-container">
            <div className="card-inner">
              <div className="card-front">
                <img className="image" src={char.sprites.front} alt="oh no!" />
                  <div className="header">{char.name}</div>
                    <div className="extra-content">
                      <img className="icon" src={heartbeat} alt="HP" />
                      <span>{char.stats[5].value} HP</span>
                    </div>
              </div>
            </div>
            <div className="card-inner">
              <div className="card-back">
                <img className="back-image" src={char.sprites.back} alt="oh no!" />
                <div className="header">{char.name}</div>
                  <div className="extra-content">
                    <i className="icon fas fa-shield-alt"></i>
                    <span>{char.stats[2].value} Defense</span>
                  </div>
                  <div className="extra-content">
                    <i className="icon  fas fa-fist-raised"></i>
                    <span>{char.stats[3].value} Attack</span>
                  </div>
                  <div className="extra-content">
                    <i className="icon  fas fa-running"></i>
                    <span>{char.stats[4].value} Speed</span>
                  </div>
                  <div>
                  <div>height: {char.height}cm</div>
                  <div>weight: {char.weight}g</div>
                  </div>
                  <div className="extra-content">
                    <ul>
                      <h3>Abilities</h3>
                        {char.abilities.map(ability => {
                          return(
                            <li key={ability}>
                              {ability}
                            </li>
                          )
                        })}
                    </ul>
                  
                </div>
              </div>
            </div>
          </div>
        )
      })}
      </React.Fragment>
    )
  }
}

export default PokemonCard
