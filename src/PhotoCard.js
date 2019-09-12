import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const PhotoCard = props => {

    return (
            <Card key={props.id}> 
              <CardImg top width="100%" src={props.src} alt={props.alt} />
              <CardBody>
                <CardTitle>{props.alt}</CardTitle>
                <CardText>Image Description: {props.description}</CardText>
                <Button onClick={() => {props.date}}>Change Date</Button>
              </CardBody>
            </Card>
        );
      };

  

export default PhotoCard
