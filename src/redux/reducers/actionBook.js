import * as actionTypes from "./types/bookmarkType";

export const addToBook = (itemID) => {
    return {
        type: actionTypes.ADD_TO_BOOK,
        payload: {
            id: itemID,
        }
    }
}

export const deleteToBook = (itemID) => {
    return {
        type: actionTypes.DELETE_TO_BOOK,
        payload: {
            id: itemID
        }
    }
}
