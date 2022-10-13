import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import {  useDispatch } from 'react-redux';
import { decrementByAmount as decrementIronIgnot } from '../features/resources/ironIgnotCounter';
import { decrementByAmount as decrementCopperIgnot } from '../features/resources/copperIgnotCounter';
import { incrementByAmount as incrementMechanicalPArts } from '../features/resources/mechanicalPartsCounter';
import { incrementByAmount as incrementElectricalParts } from '../features/resources/eletricalPartsCounter';

export default function PartsActions() {

const dispatch = useDispatch()

    return (
    <div>
        <Box>
            <Button
                onClick={() => (
                    dispatch(decrementIronIgnot(5)),
                    dispatch(incrementMechanicalPArts(1))
                    )}
                    >
                Make Mechanical Parts
            </Button>
        </Box>
        <Box>
            <Button
                onClick={() => (
                    dispatch(decrementCopperIgnot(5)),
                    dispatch(incrementElectricalParts(1))
                    )}
                    >
                Make Eletrical Parts
            </Button>
        </Box>
    </div>
    )
}