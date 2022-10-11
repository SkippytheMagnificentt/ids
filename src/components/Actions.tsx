import * as React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store';
import  MiningActions  from './MiningActions';
import RefiningActions from './RefiningActions';

export default function Actions(props:any) {

const { actionState } = props;

const renderActions = function(param:string) {
    switch ( param) {
        case "mine":
            return <MiningActions />;
            break;
        case "refine":
            return <RefiningActions />;
        default:
            return <MiningActions />;
    }
}

    return (renderActions(actionState))   
}