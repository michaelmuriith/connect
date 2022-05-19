import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import './Characterslist.css';

export default function Characterslist() {

    const {error, loading, data} = useCharacters();
    
    if(loading) return <div>Spinner...</div>;

    if (error) return <div>Something went wrong</div>

    return <div className="CharacterList">
        {data.characters.results.map(character => {
            return <div>
                <img src={character.image} />
                <h2>{character.name}</h2>
            </div>
        })}
    </div> 
}
