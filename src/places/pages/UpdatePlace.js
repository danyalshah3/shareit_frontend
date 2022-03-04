import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u2'
    }
  ];
  


const UpdatePlace = () => {
    const placeId = useParams().placeId

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    if (!identifiedPlace ) {
        return (
            <div className="center">
            <h2>Could not find place!</h2>
            </div>
        )
    }
    return <form className="place-form">
     <Input id="title" 
     elements="input" 
     type="text" 
     label="Title" 
     validators={[VALIDATOR_REQUIRE()]}
    errorText="Please enter a valid title."
    onInput={() => {}}
    value={identifiedPlace.title} 
    valid={true}  />

<Input id="description" 
     elements="textarea" 
     label="description" 
     validators={[VALIDATOR_REQUIRE()]}
    errorText="Please enter a valid description (min. 5 characters)."
    onInput={() => {}}
    value={identifiedPlace.description} 
    valid={true}  />

    <Button type="submit" disabled={true}>Update Place</Button>
    </form>
    
    

}

export default UpdatePlace