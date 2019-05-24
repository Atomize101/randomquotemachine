import React from 'react';
import { connect } from 'react-redux';
import { selectQuote } from '../actions';

class QuoteList extends React.Component {
    renderList() {
        return this.props.quotes.map((quote) => {
            return (
                <div className="item" key={quote.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                                onClick={() => this.props.selectQuote(quote)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{quote.title}</div>
                </div>
            );
        });
    }
    
    render() {
        return <div className="ui divided list">{this.renderList()}</div>;    
    }
}

const mapStateToProps = (state) => {
    return { quotes: state.quotes };
};

export default connect(mapStateToProps, { selectQuote })(QuoteList);

