import React from 'react';
import actions from '../actions';
import QuoteList from './QuoteList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui rown">
                <div className="column eight wide">
                    <QuoteList  />    
                </div>
            </div>
        </div>
    );
};

export default App;