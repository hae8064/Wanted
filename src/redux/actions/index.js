export const addBook = (item) => {
  return {
    type: "ADD_BOOK",
    payload: item,
  };
};

export const deleteBook = (items) => {
  return {
    type: "DELETE_BOOK",
    payload: items,
  };
};
