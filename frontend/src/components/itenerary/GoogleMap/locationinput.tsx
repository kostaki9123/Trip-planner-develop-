import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useMapsLibrary } from '@vis.gl/react-google-maps';

type Props = {
  setLocation: (place: google.maps.places.PlaceResult | null) => void;
  deafultValue : any
}

const LocationInput = (props: Props) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');

  const inputt = document.getElementById("pac-input") as HTMLInputElement;

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address' ,] ,
      language:  'en' 
    };

    setPlaceAutocomplete(new places.Autocomplete(inputt, options ));
   
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener('place_changed', () => {
      props.setLocation(placeAutocomplete.getPlace());
    });


  }, [props.setLocation, placeAutocomplete]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent the default behavior of Enter key press
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };
  

  return (
      <FormControl   mb={0.5} zIndex={9999}>
        <Input id="pac-input"  border="none" bgColor="rgb(40,44,53)" ref={inputRef} placeholder="Enter a location" defaultValue={props.deafultValue || undefined} onKeyDown={handleKeyPress} />
      </FormControl>
  );
}

export default LocationInput;
