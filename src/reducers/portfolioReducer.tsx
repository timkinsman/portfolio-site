import {
    UPDATE_COLORSCHEME
} from "../actions/types";

const pstrColorscheme = localStorage.getItem("colorscheme")
const INITIAL_STATE: { [colorscheme: string]: string } = {
    colorscheme: pstrColorscheme ? pstrColorscheme : "celadon"
};

// eslint-disable-next-line
export default (state = INITIAL_STATE, action: { type: string; payload: any; }) => {
    switch (action.type) {
        case UPDATE_COLORSCHEME:
            localStorage.setItem("colorscheme", action.payload);
            return {...state, colorscheme: action.payload }
        default:
            return state
    }
}