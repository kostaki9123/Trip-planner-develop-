import { useRadioGroup  } from "@chakra-ui/react"
import { HStack , } from "@chakra-ui/react"
import RadioCard from "./radiuscard"

interface ExampleProps {
    onRadioChange: (value: "movingbox" | "point") => void;
    defaultvalue : "movingbox" | "point"
  }



const Example = ( { onRadioChange , defaultvalue }: ExampleProps ) => {
    const options = ['point', 'movingbox',]

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: defaultvalue,
      onChange: (value :"movingbox" | "point")  => {
        console.log(value)
        onRadioChange(value);
      }
    })
  
    const group = getRootProps() 
  
    return (
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    )
}

export default Example