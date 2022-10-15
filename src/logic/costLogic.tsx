import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const refineLogic = (resourceType, resourceCount) => {
    if (resourceType === "rock" && resourceCount < 5) {
        return false
    }
    return true;
}

const smeltLogic = (resourceType, resourceCount) => {
    let result = false;
    switch (resourceType) {
        case "rock":
            if (resourceCount < 5) {
                result = false;
            } else {
                result = true
            }
        break;
        case "copper":
            if (resourceCount < 5) {
                result = false;
            } else {
                result = true
            }
        break;

    }
    return result;
}

export { refineLogic, smeltLogic }