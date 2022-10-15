import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import {  useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { incrementByAmount as incrementIronIgnot } from '../features/resources/ironIgnotCounter';
import { incrementByAmount as incrementCopperIgnot } from '../features/resources/copperIgnotCounter';
import { decrementByAmount as decrementIronOre } from '../features/resources/ironOreCounter';
import { decrementByAmount as decrementCopperOre } from '../features/resources/copperOreCounter';
import { smeltLogic } from '../logic/costLogic';
import { addMessage } from '../features/resources/manageMessages';


export default function SmeltingActions() {

const dispatch = useDispatch()
const ironOreCount = useSelector((state: RootState) => state.ironOreCounter.value)
const copperOreCount = useSelector((state: RootState) => state.copperOreCounter.value)

const runSmeltingCalcs = (resource:string, quantity) => {
    if (smeltLogic("iron", quantity) === true) {
        dispatch(decrementIronOre(5)),
        dispatch(incrementIronIgnot(1))
    } else {
        dispatch(addMessage("Inssuficient "+{resource}+" for refining."))
    }

    if (smeltLogic("copper", quantity) === true) {
        dispatch(decrementCopperOre(10)),
        dispatch(incrementCopperIgnot(1))
    } else {
        dispatch(addMessage("Inssuficient "+{resource}+" for refining."))
    }
}

    return (
    <div>
        <Box>
            <Button
                onClick={() => (runSmeltingCalcs("iron", ironOreCount))}
                    >
                Smelt Iron
            </Button>
        </Box>
        <Box>
            <Button
                onClick={() => (runSmeltingCalcs("copper", copperOreCount))}
                    >
                Smelt Copper
            </Button>
        </Box>
    </div>
    )
}