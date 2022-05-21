import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
  } from '@chakra-ui/react';
  import { BsPerson } from 'react-icons/bs';
  import {useState} from 'react'
  import {useNavigate} from 'react-router-dom'
  //import Bank from './bank'
  
  
  export default function Form() {
    const [name, setName] = useState('');
    const [tier1, setTier1] = useState('');
    const [tier2, setTier2] = useState('');
    const [tier3, setTier3] = useState('');
    // const [list, setList] = useState(Bank);
    let navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        // const input = {
        //     name: name,
        //     tier1: tier1,
        //     tier2: tier2,
        //     tier3: tier3,
        // };
        navigate("/dashboard");
        
    }

    return (
      <Container bg="#fff" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#fff"
            color="#000"
            borderRadius="lg"
            border="1px solid black"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
               
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Ajo app</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to join the saving team!
                    </Text>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" value={name} onChange={(e) =>setName(e.target.value)} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Select the tier you want to join</FormLabel>
                          <Select placeholder='Select option'>
                            <option onSelect={(e) =>setTier1(e.target.value)} value={tier1}>Tier 1</option>
                            <option  onSelect={(e) =>setTier2(e.target.value)} value={tier2}>Tier 2</option>
                            <option  onSelect={(e) =>setTier3(e.target.value)} value={tier3}>Tier 3</option>
                            </Select>
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}} onClick={(e) =>handleSubmit(e)}>
                            Submit
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }