import React, {Component} from 'react';
import AuctionEntry from './auctionentry.jsx';

export default class Auction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrys: []
    };
    this.updateEntrys = this.updateEntrys.bind(this);
    this.grabAuctions = this.grabAuctions.bind(this);
  }

  componentDidMount () {
    this.grabAuctions();
  }

  updateEntrys (entryArray) {
    this.setState({
      entrys: [entryArray]
    });
    console.log(this.state);
  }

  grabAuctions () {
    var context = this;
    $.ajax({
      method: 'GET',
      url: '/api/allitems',
      headers: {'Content-Type': 'application/json'},
      success: function (res) {
        context.updateEntrys(res);
      }
    });
  }

  render () {
    return (
      <div>
        <h1>Current Auctions</h1>
        <div className="container" style={{display: 'flex', 'flexWrap': 'wrap'}}>
          <div className="row">
          {
            this.state.entrys.map((entry) => {
              return (<AuctionEntry item={entry} auth={this.props.auth} />);
            })
          }
          </div>
        </div>
      </div>
    );
  }
}