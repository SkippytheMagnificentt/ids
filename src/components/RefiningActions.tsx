import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import {  useDispatch, useSelector } from 'react-redux'
import { decrementByAmount } from '../features/resources/rockCounter'
import { incrementByAmount } from '../features/resources/ironOreCounter';
import { incrementByAmount as incrementCopperOre } from '../features/resources/copperOreCounter';
import { refineLogic  } from '../logic/costLogic';
import { RootState } from '../app/store';

export default function RefiningActions() {

const dispatch = useDispatch()

const rockCount = useSelector((state: RootState) => state.rockCounter.value)

const runRefineCalcs = () => {
    if (refineLogic("rock", rockCount) === true) {
        dispatch(decrementByAmount(5)),
        dispatch(incrementByAmount(3)),
        dispatch(incrementCopperOre(1))
    }
}

    return (
        <Box>
            <Button
                onClick={() => (runRefineCalcs())}
            >
                Refine Rock
            </Button>
        </Box>
    )
}