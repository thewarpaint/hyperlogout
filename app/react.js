var SiteList, Site, SiteIcon;

SiteList = React.createClass({displayName: "SiteList",
  render: function () {
    var listNodes = this.props.sites.map(function (site) {
      return (
        React.createElement(Site, {data:  site })
      );
    });

    return (
      React.createElement("ul", {className: "site-list"}, 
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
      React.createElement("li", {className:  'site ' + (this.state.loggedOut ? 'logged-out' : 'logged-in') }, 
        React.createElement("h2", null, React.createElement(SiteIcon, {icon:  this.props.data.icon}),  this.props.data.name), 
        React.createElement("span", {className: "site-status"}, 
          React.createElement("i", {className:  'fa fa-fw fa-' + (this.state.loggedOut ? 'check' : 'clock-o') }))
      )
    );
  }
});

SiteIcon = React.createClass({displayName: "SiteIcon",
  render: function () {
    if(!this.props.icon) {
      return null;
    }

    return (
      React.createElement("i", {className:  'fa fa-fw fa-' + this.props.icon})
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  React.render(
    React.createElement(SiteList, {sites:  Hyperlogout.sites}),
    document.getElementById('content')
  );
});
