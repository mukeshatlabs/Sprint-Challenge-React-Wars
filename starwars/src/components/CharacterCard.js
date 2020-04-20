// Write your Character component here
import React from "react";
import { Card, CardImg, CardBody, CardTitle, Col } from "reactstrap";

const CharacterCard = ({ character }) => {
  return (
    <div>
        <Col xs="6" md="4" xl="3">
        {/* 
        Col is controlling the width of the card. If screen is at "xs" screensize (< 576px), 
        each Col will be a width of 6th. The maximum width is 12, which would span the entire row. 
        Therefore, at the smallest screensize, we see 12/6 = 2 cards.
        At medium ("md") screensize, we see 12/4 = 3 cards
        At xl screensize we see 12/3 = 4 cards
        */}
        <Card>
            <CardBody>
                <CardTitle>{character.name}</CardTitle>
            </CardBody>
            <CardImg width="90%" src={character.image} alt="Card image cap" />
        </Card>
        </Col>
    </div>
  );
};
export default CharacterCard;
