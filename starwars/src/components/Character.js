// Write your Character component here
import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";

const Character = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        setCharacters(response.data);
        console.log("characters: ", response.data.results)
      })
      .catch(error => console.log("Error!", error));
  }, []);
  if (!characters.results) return <h3>Loading...</h3>;
  return (
    <div>
        <Container>
            <Row>
                {characters.results.map(character=>{
                    return <CharacterCard character={character} key={character.id} />;
                })}
            </Row>
        </Container>
    </div>
  );
}

export default Character;
