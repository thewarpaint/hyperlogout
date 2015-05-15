var SiteList, Site;

SiteList = React.createClass({displayName: "SiteList",
  render: function () {
    var listNodes = this.props.sites.map(function (site) {
      return (
        React.createElement(Site, {data:  site })
      );
    });

    return (
      React.createElement("div", {className: "site-list"}, 
         listNodes 
      )
    );
  }
});

Site = React.createClass({displayName: "Site",
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
      React.createElement("div", {className: "site"}, 
        React.createElement("h1", null,  this.props.data.name), 
        React.createElement("span", null,  this.state.loggedOut ? 'Ok!' : '...')
      )
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  React.render(
    React.createElement(SiteList, {sites:  Hyperlogout.sites}),
    document.getElementById('content')
  );
});
