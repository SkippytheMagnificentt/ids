import * as React from 'react';
import  MiningActions  from './MiningActions';
import RefiningActions from './RefiningActions';

export default function Actions(props:any) {

const { actionState } = props;

const renderActions = function(param:string) {
    switch ( param) {
        case "mine":
            return <MiningActions />;
        case "refine":
            return <RefiningActions />;
        default:
            return <MiningActions />;
    }
}

    return (renderActions(actionState) )   
}