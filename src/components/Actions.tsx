import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/resources/rockCounter'
import { RootState } from '../app/store';
import  MiningActions  from './MiningActions';
import { Component } from 'react';

export default function Actions(props:any) {

const count = useSelector((state: RootState) => state.counter.value)
const dispatch = useDispatch()
const { ActionState } = props;


const renderActions = function(param:string) {
    switch ( param) {
        case "mine":
            return <MiningActions />;
    }
}





    return (
        {renderActions(ActionState)}
    )
}