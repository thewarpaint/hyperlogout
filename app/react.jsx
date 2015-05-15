var SiteList, Site;

SiteList = React.createClass({
  render: function () {
    var listNodes = this.props.sites.map(function (site) {
      return (
        <Site data={ site } />
      );
    });

    return (
      <div className="site-list">
        { listNodes }
      </div>
    );
  }
});

Site = React.createClass({
  logout: function () {
    var promises = this.props.data.actions.map(function (action) {
      if(!action.method || action.method === 'get') {
        return Hyperlogout.get(action.url);
      } else {
        action.params = action.params || {};
        return Hyperlogout.post(action.url, action.params);
      }
    });

    Q.allSettled(promises).done((function () {
      this.setState({ loggedOut: true });
    }).bind(this));
  },
  getInitialState: function () {
    return {
      loggedOut: false
    };
  },
  componentDidMount: function () {
    this.logout();
  },
  render: function () {
    return (
      <div className="site">
        <h1>{ this.props.data.name }</h1>
        <span>{ this.state.loggedOut ? 'Ok!' : '...' }</span>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  React.render(
    <SiteList sites={ Hyperlogout.sites } />,
    document.getElementById('content')
  );
});
