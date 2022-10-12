import * as React from 'react';
import { Box } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store';
import { Container } from '@mui/material';


export default function Resources() {
    const rockCount = useSelector((state: RootState) => state.rockCounter.value)
    const ironOreCount = useSelector((state: RootState) => state.ironOreCounter.value)
    const copperOreCount = useSelector((state: RootState) => state.copperOreCounter.value)
    return(
        <Container sx={{ display: 'flex', gap: 2 }}>
            <Box> Rock: {rockCount} </Box>
            <Box> Iron Ore: {ironOreCount} </Box>
            <Box> Copper Ore: {copperOreCount} </Box>
            <Box> Iron Ingots:  </Box>
            <Box> Copper Ingots:  </Box>
            <Box> Mechanical Parts:  </Box>
            <Box> Eletrical Parts:  </Box>
            <Box> Eletricity Supply: </Box>
        </Container>
    )
};