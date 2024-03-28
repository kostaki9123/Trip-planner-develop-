import { Flex, Menu, MenuButton ,Text , Link , Icon ,Box} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'


const Navitem = ({title , icon , setSellected ,selected, to} : any) => {
    const active = to === selected
  return (
    <Flex 
    onClick={() => setSellected(to)}
    width="100%"
    position="relative"
    >
        <Menu placement="right" >
           <Link
            as={ReactRouterLink}
            to={to} 
            p="4"
            w="100%"
            >
              <MenuButton w="100%"    >
                 <Flex  align="center" justifyContent="center" gap="20px"  >
                    <Icon as={icon} fontSize="xl" color={active ? "lime" : "grey"}></Icon>
                    <Text color={active ? "lime" : "grey"}>{title}</Text>
                    {active  && 
                    <Box backgroundColor="yellow" h="20px" w="5px" position="absolute" right="0" top="30%" borderTopLeftRadius="10px" borderBottomLeftRadius="10px">
                    </Box>} 
                 </Flex>
               </MenuButton>
            </Link>
        </Menu>
    </Flex>
  )
}

export default Navitem