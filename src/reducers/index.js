import {combineReducers} from 'redux';


const quoteReducer = () => {
    return [
        {author: 'George Bernard Shaw', text: 'Life isnt about finding yourself. Life is about creating yourself.'},
        {author: 'Audrey Hepburn', text: 'The most important thing is to enjoy your life - to be happy - its all that matters.'},
        {author: 'Arthur Rubinstein', text: 'I have found that if you love life, life will love you back.'},
        {author: 'Confucius', text: 'Life is really simple, but we insist on making it complicated.'}
    ];
};

const selectedQuoteReducer = (selectedQuote=null, action) => {
    if(action.type === 'QUOTE_SELECTED') {
        return action.payload;
    }
    return selectedQuote;
};

export default combineReducers({
    quotes: quotesReducer,
    selectedQuote: selectedQuoteReducer
});