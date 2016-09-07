import React, {Component} from 'react';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.sate = {
      currentPrice: undefined
    };
  }

  render () {
    var button;
    return (
      <div className='auction-entry-container'>
        <h3>{this.props.item.title || 'Sample Title'}</h3>
        <div>
          <img src={this.props.item.picture || 'http://www.officeshop.co.nz/shop/494-664-large/account-overdue-dixon-stamp.jpg'}></img>
        </div>
        <div>
          Description: <span>{this.props.item.description || 'Some random description, blah blah blah'}</span>
        </div>
        <div>
          Current Price: <span>{this.currentPrice || '$13.37'}</span>
        </div>
        <div>
          Date of Expiration: <span>{this.props.item.endDate || '10-10-2020 9:00 PM'}</span>
        </div>
        { 
          button = this.props.auth() ? (
          <div>
            <button type='button' className='btn btn-primary'> Bid </button>
          </div>
          )
        : <div /> 
        }
        
      </div>
    );
  }
}