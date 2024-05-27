import React from 'react'
import { Route, Switch,withRouter } from 'react-router-dom';

import TopicEventComponent from './TopicEventComponent';
import TopicTalkShowComponent from './TopicTalkShowComponent';


class Topics extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <>
        <h1>Hello Topics component</h1>
        <Switch>
          <Route path={`${match.url}/event`} component={TopicEventComponent} />
          <Route path={`${match.url}/talk-show`} component={TopicTalkShowComponent} />
        </Switch>
      </>
    )
  }
}

export default withRouter(Topics);