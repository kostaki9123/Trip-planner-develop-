import { Link , Flex ,Text} from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'

const BurgerItem = ({title , icon , setSellected ,selected, to} : any) => {
    const active = to === selected
  return (
    <Link  as={ReactRouterLink}  to={to} _hover={{textDecoration : "none"}}   onClick={() => setSellected(to)}
    >
      <Flex borderRadius="14px" w="100%" h="60px" alignItems="start" bgColor={active ? "rgb(40,44,53)" : "rgb(26,28,34)"} >
         <Flex ml="19px" mr="4px" w="40px" color="gray" h="100%" alignItems="center" justifyContent="center" fontSize="24px">
            <Icon as={icon}></Icon>
         </Flex>
         <Flex alignItems="center" justifyContent="center" fontSize="17px" h="100%">
            <Text fontWeight="600" color={active ? "white" : "grey"}>{title}</Text>
         </Flex>    
      </Flex>
    </Link>
  )
}

export default BurgerItem