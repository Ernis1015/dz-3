import { startRegistr, finishReg, regFail } from './action';

const initialState = {
    isLoading: false,
    user: null,
    error: null
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case startRegistr:
            return { ...state, isLoading: true }
        case finishReg:
            return { ...state, isLoading: false, user: action.payload }
        case regFail:
            return { ...state, isLoading: false, error: action.payload }
        default:
            return state
    }
}

export default registrationReducer;