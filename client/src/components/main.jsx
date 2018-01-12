import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Listings from './listings.jsx';
import ListingEntryDetail from './ListingEntryDetail.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <main>
        <Switch>
          <Route exact path="/" component={Listings} />
          <Route path="/listings/:id" component={ListingEntryDetail} />
        </Switch>
      </main>
    )
  }

}

const Child = ({match}) => (
  <div>
    <h3> ID: {match.params.id} </h3>
  </div>
)

export default Main;