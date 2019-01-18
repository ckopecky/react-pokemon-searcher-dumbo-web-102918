import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm';
import axios from 'axios';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

// import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon : [],
      totalItems: 0,
      currentPage: 0,
      pageSize: 0,
      pagesCount: 0
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/pokemon")
      .then(response => {
        let pageSize = 15;
        let pagesCount = Math.ceil(response.data.length/pageSize);
        this.setState({pokemon: response.data, totalItems: response.data.length, pageSize: pageSize, pagesCount: pagesCount});
        console.log(this.state, "this.state")
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleClick(e, index) {
    e.preventDefault();
    this.setState({ currentPage: index });
  }

  render() {
    return (
      <div className="main-container">
        
        <h1>Go Pokemon!</h1>
        <br />
        <React.Fragment>
          <div className="pagination-wrapper">
            <Pagination aria-label="Pokemon navigation">
              <PaginationItem>
                <PaginationLink 
                  onClick={e => this.handleClick(e, 0)}
                  previous
                  href="#"
                >First</PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={this.state.currentPage <= 0}>
                <PaginationLink
                  onClick={e => this.handleClick(e, this.state.currentPage - 1)} 
                  previous 
                  href="#">Previous</PaginationLink>
              </PaginationItem>
              {/* Numbers between arrows */}
              {[...Array(this.state.pagesCount)].map((page, i) => {
               return (
                <PaginationItem active={i === this.state.currentPage} key={i}>
                  <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
               )
              })}
              <PaginationItem disabled={this.state.currentPage >= this.state.pagesCount - 1}>
                <PaginationLink 
                  onClick={e => this.handleClick(e, this.state.currentPage + 1)}
                  next
                  href="#"
                  >Next</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={e => this.handleClick(e, this.state.pagesCount - 1)}
                >Last</PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
        </React.Fragment>
        <br />
        <PokemonCollection 
          pokemon={this.state.pokemon} 
          currentPage={this.state.currentPage}
          pageSize={this.state.pageSize}
          />
        <br />

        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
