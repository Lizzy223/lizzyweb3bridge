import {Table, TableContainer, TableCaption, Thead, Th, Tr, Tfoot, Td, Tbody, list} from '@chakra-ui/react'
import Bank from './bank'
import {useState} from 'react'

const ListOfUser = ()=>{
    const [list, setList] = useState(Bank)
    return(
    <Tr>
        <Td>{Bank.name}</Td>
        <Td>{Bank.tier}</Td>
        <Td>{Bank.numOfDays}</Td>
        <Td>{Bank.amount}</Td>
    </Tr>
    )
}

const Dashboard = ({list})=>{

    return(
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Ajo group</TableCaption>
                <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Tier</Th>
                    <Th>No of days</Th>
                    <Th>Money</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>{Bank.name}</Td>
                    <Td>{Bank.tier}</Td>
                    <Td>{Bank.numOfDays}</Td>
                    <Td>{Bank.amount}</Td>
                </Tr>
                {
                    list.map(lists =>{
                        return(
                            <ListOfUser lists={lists}/>
                        )
                    })
                }
                <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                </Tr>
                </Tbody>
                <Tfoot>
                <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default Dashboard