var SiteList, Site, SiteIcon;

SiteList = React.createClass({
  render: function () {
    var listNodes = this.props.sites.map(function (site) {
      return (
        <Site data={ site } />
      );
    });

    return (
      <ul className="site-list">
        { listNodes }
      </ul>
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
      Hyperlogout.plusOne();
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
      <li className={ 'site ' + (this.state.loggedOut ? 'logged-out' : 'logged-in') }>
        <h2><SiteIcon icon={ this.props.data.icon } />{ this.props.data.name }</h2>
        <span className="site-status">
          <i className={ 'fa fa-fw fa-' + (this.state.loggedOut ? 'check' : 'clock-o') }></i></span>
      </li>
    );
  }
});

SiteIcon = React.createClass({
  render: function () {
    if(!this.props.icon) {
      return null;
    }

    return (
      <i className={ 'fa fa-fw fa-' + this.props.icon }></i>
    );
  }
});

document.addEventListener('DOMContentLoaded', function () {
  React.render(
    <SiteList sites={ Hyperlogout.sites } />,
    document.getElementById('content')
  );
});
