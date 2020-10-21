import React, { Component } from 'react';
import styled from 'styled-components';

const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
`;

export default class PokemonCard extends Component {
    state = {
            name: '',
            imageUrl: '',
            pokemonIndex: ''
    };

    componentDidMount () {
        const { name, url } = this.props;
        const pokemonIndex = url.split("/")[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/Sprits/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({
            name,  
            imageUrl, 
            pokemonIndex})
    }  

    render() {


        return (
            <div className='col'>
                <div className="card">
                    <div className="card-body mx-left">
                        <h6 className="card-title">
                        {this.state.pokemonIndex} {this.state.name
                            .toLowerCase()
                            .split(' ')
                            .map(
                                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                            )
                            .join(' ')}
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}
