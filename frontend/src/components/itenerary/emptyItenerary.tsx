import { Box, Flex, Heading } from "@chakra-ui/react"

const EmptyItenerary = () => {
  return (
    <Flex alignItems="center" justifyContent="center" flexDirection="column" gap="5px" width="100%" h="310px">
        <Heading fontSize="25px">Your itenerary is empty</Heading>
        <Heading fontSize="25px">Create your trip first</Heading>

    </Flex>
  )
}

export default EmptyItenerary