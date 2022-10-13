import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const refineLogic = (resourceType, resourceCount) => {
    if (resourceType === "rock" && resourceCount < 5) {
        return false
    }

    return true;
}

export { refineLogic }