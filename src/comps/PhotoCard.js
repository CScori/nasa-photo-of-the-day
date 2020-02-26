import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const PhotoCard = props => {

    return (
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} width='70%' key={props.id}> 
              <CardImg top width="25%" src={props.img} alt={props.title} />
              <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardText>Image Description: {props.explanation}</CardText>
              </CardBody>
            </Card>
        );
      };

  

export default PhotoCard
