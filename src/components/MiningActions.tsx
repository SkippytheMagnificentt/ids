import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/resources/rockCounter'
import { RootState } from '../app/store';

export default function MiningActions() {

const count = useSelector((state: RootState) => state.counter.value)
const dispatch = useDispatch()

    return (
        <Box>
            <Button
                onClick={() => dispatch(increment())}
            >
                Pick up rock
            </Button>
        </Box>
    )
}