import React from 'react';
import { 
  CardLink,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

const CharityCard = ({ charity }) => {
  return(
      <Card body className="text-center mx-auto my-5 w-75">
        <CardBody className="p-5">
          <CardTitle>{charity.charityName}</CardTitle>
          <CardText>{charity.city}, {charity.state}</CardText>
          <CardLink href={charity.url} target="_blank">Learn More</CardLink>
          {
            charity.acceptingDonations 
              ? <CardLink href={charity.donationUrl} target="_blank">Donate</CardLink> 
              : null
          }
        </CardBody>
      </Card>
  );
}

export default CharityCard;