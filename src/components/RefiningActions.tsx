import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import {  useDispatch } from 'react-redux'
import { decrementByAmount } from '../features/resources/rockCounter'
import { incrementByAmount } from '../features/resources/ironOreCounter';
import { incrementByAmount as incrementCopperOre } from '../features/resources/copperOreCounter';

export default function RefiningActions() {

const dispatch = useDispatch()

    return (
        <Box>
            <Button
                onClick={() => (
                    dispatch(decrementByAmount(5)),
                    dispatch(incrementByAmount(3)),
                    dispatch(incrementCopperOre(1))
                    )}
            >
                Refine Rock
            </Button>
        </Box>
    )
}