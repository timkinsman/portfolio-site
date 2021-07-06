import { UPDATE_COLORSCHEME } from "./types";

export const updateColorscheme = (payload: string) => {
    return { type: UPDATE_COLORSCHEME, payload };
};