import * as React from 'react';
import  MiningActions  from './MiningActions';
import RefiningActions from './RefiningActions';
import SmeltingActions from './SmeltingActions';
import PartsActions from './PartsActions';

export default function Actions(props:any) {

const { actionState } = props;

const renderActions = function(param:string) {
    switch ( param) {
        case "mine":
            return <MiningActions />;
        case "refine":
            return <RefiningActions />;
        case "smelt":
            return <SmeltingActions />
        case "parts":
            return <PartsActions />
        default:
            return <MiningActions />;
    }
}

    return (renderActions(actionState) )   
}