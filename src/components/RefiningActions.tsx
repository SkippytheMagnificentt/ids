import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, decrementByAmount } from '../features/resources/rockCounter'
import { incrementByAmount } from '../features/resources/ironOreCounter';
import { RootState } from '../app/store';

export default function RefiningActions() {

const dispatch = useDispatch()

    return (
        <Box>
            <Button
                onClick={() => (
                    dispatch(decrementByAmount(5)),
                    dispatch(incrementByAmount(3))
                    )}
            >
                Refine Rock
            </Button>
        </Box>
    )
}