// Action creater
export const selectQuote = (quote) => {
    // Return an action
    return {
        type: 'QUOTE_SELECTED',
        payload: quote
    };
};