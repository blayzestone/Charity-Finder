import React from 'react';
import { connect } from 'react-redux';
import { 
  Button,
  CardLink,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

import { saveCharity } from '../store/actions';

const CharityCard = ({ charity, saveCharity, renderSaveButton }) => {
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
          {
            renderSaveButton 
            && <Button 
            onClick={() => saveCharity(charity)} 
            color="danger" 
            className="d-block m-auto"
          >
            Save to profile
          </Button>
          }
        </CardBody>
      </Card>
  );
}

export default connect(null, { saveCharity })(CharityCard);