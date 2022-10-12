import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import {  useDispatch } from 'react-redux';
import { incrementByAmount as incrementIronIgnot } from '../features/resources/ironIgnotCounter';
import { incrementByAmount as incrementCopperIgnot } from '../features/resources/copperIgnotCounter';
import { decrementByAmount as decrementIronOre } from '../features/resources/ironOreCounter';
import { decrementByAmount as decrementCopperOre } from '../features/resources/copperOreCounter';


export default function SmeltingActions() {

const dispatch = useDispatch()

    return (
    <div>
        <Box>
            <Button
                onClick={() => (
                    dispatch(decrementIronOre(5)),
                    dispatch(incrementIronIgnot(1))
                    )}
                    >
                Smelt Iron
            </Button>
        </Box>
        <Box>
            <Button
                onClick={() => (
                    dispatch(decrementCopperOre(5)),
                    dispatch(incrementCopperIgnot(1))
                    )}
                    >
                Smelt Copper
            </Button>
        </Box>
    </div>
    )
}