import React, {Component} from 'react';

export default class AuctionEntry extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentPrice: undefined
    };
    this.calcPrice = this.calcPrice.bind(this);
  }

  componentDidMount () {
    setInterval(() => this.setState({
      currentPrice: '$  ' + this.calcPrice().toFixed(2)
    }), 1000);
  }

  calcPrice () {
    var cal = ((this.props.item.startPrice - this.props.item.endPrice) /
    ((Date.parse(this.props.item.endDate) + 10000000) - Date.parse(this.props.item.startDate))) * (Date.parse(this.props.item.endDate) + 10000000 - Date.now());
    console.log(cal);
    return cal;
  }

  render () {
    var button;
    return (
      <div className='auction-entry-container col-md'>
        <h3>{this.props.item.title || 'Sample Title'}</h3>
        <div>
          <img src={this.props.item.picture || 'http://www.officeshop.co.nz/shop/494-664-large/account-overdue-dixon-stamp.jpg'}></img>
        </div>
        <div>
          Description: <span>{this.props.item.description || 'Some random description, blah blah blah'}</span>
        </div>
        <div>
          Current Price: <span>{this.state.currentPrice}</span>
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