import * as React from 'react';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store';
import { Container } from '@mui/material';


export default function Resources() {
    const count = useSelector((state: RootState) => state.counter.value)
    return(
        <Container sx={{ display: 'flex', gap: 2 }}>
            <Box> Rock: {count} </Box>
            <Box> Iron Ore:  </Box>
            <Box> Copper Ore:  </Box>
            <Box> Iron Ingots:  </Box>
            <Box> Copper Ingots:  </Box>
            <Box> Mechanical Parts:  </Box>
            <Box> Eletrical Parts:  </Box>
            <Box> Eletricity Supply: </Box>
        </Container>
    )
};