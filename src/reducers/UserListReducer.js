import { FETCH_USER_ACTION } from '../statics/GlobalConst';

const data = {
    uList: [],
    firstTime: false
}

export default (state = data, action) => {
    switch (action.type) {
        case FETCH_USER_ACTION:
            let list = action.payload;
            return { ...state, uList: list, firstTime: true }
        default:
            return state;
    }
}