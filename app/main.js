var Hyperlogout = {
  iframeCount: 0,

  /**
   * Default method for actions is GET.
   * Please check the supported icons here: http://fontawesome.io/icons/
   */
  sites: [
    {
      name:"AOL",
      actions: [
        {
          url: "http://my.screenname.aol.com/_cqr/logout/mcLogout.psp?sitedomain=startpage.aol.com&" +
            "authLev=0&lang=en&locale=us"
        },
        {
          url: "https://api.screenname.aol.com/auth/logout?state=snslogout&r=" + Math.random()
        }
      ]
    },
    {
      name: "Amazon",
      actions: [
        {
          url: "http://www.amazon.com/gp/flex/sign-out.html?action=sign-out"
        }
      ]
    },
    {
      name: "Blogger",
      actions: [
        {
          url: "http://www.blogger.com/logout.g"
        }
      ]
    },
    {
      name: "Delicious",
      icon: "delicious",
      actions: [
        {
          url: "http://www.delicious.com/logout"
        }
      ]
    },
    {
      name: "DeviantART",
      icon: "deviantart",
      actions: [
        {
          method: "post",
          url: "http://www.deviantart.com/users/logout"
        }
      ]
    },
    {
      name: "DreamHost",
      actions: [
        {
          url: "https://panel.dreamhost.com/index.cgi?Nscmd=Nlogout"
        }
      ]
    },
    {
      name: "Dropbox",
      icon: "dropbox",
      actions: [
        {
          url: "https://www.dropbox.com/logout"
        }
      ]
    },
    {
      name: "eBay",
      actions: [
        {
          url: "https://signin.ebay.com/ws/eBayISAPI.dll?SignIn"
        }
      ]
    },
    {
      name: "Gandi",
      actions: [
        {
          url: "https://www.gandi.net/login/out"
        }
      ]
    },
    {
      name: "Gmail",
      actions: [
        {
          url: "http://mail.google.com/mail/?logout"
        }
      ]
    },
    {
      name: "GoDaddy",
      actions: [
        {
          url: "https://idp.godaddy.com/logout.aspx"
        }
      ]
    },
    {
      name: "Google",
      actions: [
        {
          url: "https://www.google.com/accounts/Logout"
        }
      ]
    },
    {
      name: "Hacker News",
      icon: "hacker-news",
      actions: [
        {
          url: "https://news.ycombinator.com/logout"
        }
      ]
    },
    {
      name: "Hulu",
      actions: [
        {
          url: "https://secure.hulu.com/logout"
        }
      ]
    },
    {
      name: "Instagram",
      icon: "instagram",
      actions: [
        {
          url: "https://instagram.com/accounts/logout/"
        }
      ]
    },
    {
      name: "Instapaper",
      actions: [
        {
          url: "http://www.instapaper.com/user/logout"
        }
      ]
    },
    {
      name: "Linode",
      actions: [
        {
          url: "https://manager.linode.com/session/logout"
        }
      ]
    },
    {
      name: "LiveJournal",
      actions: [
        {
          method: "post",
          url: "http://www.livejournal.com/logout.bml",
          params: {
            "action:killall": "1"
          }
        }
      ]
    },
    {
      name: "MySpace",
      actions: [
        {
          url: "http://www.myspace.com/index.cfm?fuseaction=signout"
        }
      ]
    },
    {
      name: "Netflix",
      actions: [
        {
          url: "https://www.netflix.com/SignOut"
        }
      ]
    },
    {
      name: "New York Times",
      actions: [
        {
          url: "http://www.nytimes.com/logout"
        }
      ]
    },
    {
      name: "Newegg",
      actions: [
        {
          url: "https://secure.newegg.com/NewMyAccount/AccountLogout.aspx"
        }
      ]
    },
    {
      name: "Photobucket",
      actions: [
        {
          url: "http://photobucket.com/logout"
        }
      ]
    },
    {
      name: "Skype",
      icon: "skype",
      actions: [
        {
          url: "https://secure.skype.com/account/logout"
        }
      ]
    },
    {
      name: "Slashdot",
      actions: [
        {
          url: "http://slashdot.org/my/logout"
        }
      ]
    },
    {
      name: "SoundCloud",
      icon: "soundcloud",
      actions: [
        {
          url: "http://soundcloud.com/logout"
        }
      ]
    },
    {
      name: "ThinkGeek",
      actions: [
        {
          url: "https://www.thinkgeek.com/brain/account/login.cgi?a=lo"
        }
      ]
    },
    {
      name: "Threadless",
      actions: [
        {
          url: "http://www.threadless.com/logout"
        }
      ]
    },
    {
      name: "Tumblr",
      icon: "tumblr",
      actions: [
        {
          url: "http://www.tumblr.com/logout"
        }
      ]
    },
    {
      name: "Vimeo",
      icon: "vimeo-square",
      actions: [
        {
          url: "http://vimeo.com/log_out"
        }
      ]
    },
    {
      name: "Wikipedia",
      actions: [
        {
          url: "http://en.wikipedia.org/w/index.php?title=Special:UserLogout"
        }
      ]
    },
    {
      name: "Windows Live",
      actions: [
        {
          url: "http://login.live.com/logout.srf"
        }
      ]
    },
    {
      name: "Woot",
      actions: [
        {
          url: "https://account.woot.com/logout"
        }
      ]
    },
    {
      name: "Wordpress",
      icon: "wordpress",
      actions: [
        {
          url: "https://wordpress.com/wp-login.php?action=logout"
        }
      ]
    },
    {
      name: "Yahoo!",
      icon: "yahoo",
      actions: [
        {
          url: "https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=" +
            "http://www.yahoo.com/"
        }
      ]
    },
    {
      name: "YouTube",
      icon: "youtube",
      actions: [
        {
          method: "post",
          url: "http://www.youtube.com",
          params: {
            "action_logout": "1"
          }
        }
      ]
    }
  ],

  cleanup: function (elements) {
    elements.forEach(function (element) {
      element.parentNode.removeChild(element);
    });
  },

  get: function (url) {
    var defer = Q.defer(),
        img = document.createElement('img');

    img.onload = defer.resolve;
    img.onerror = defer.reject;
    img.className = 'hidden';
    document.body.appendChild(img);
    img.src = url;

    defer.promise.finally(function () {
      Hyperlogout.cleanup([img]);
    });

    return defer.promise;
  },

  post: function (url, params) {
    var defer = Q.defer(),
        form = document.createElement('form'),
        iframe = document.createElement('iframe');

    iframe.className = 'hidden';
    iframe.onload = defer.resolve;
    iframe.onerror = defer.reject;
    iframe.name = 'iframe' + Hyperlogout.iframeCount++;
    document.body.appendChild(iframe);

    defer.promise.finally(function () {
      Hyperlogout.cleanup([iframe, form]);
    });

    form.className = 'hidden';
    form.action = url;
    form.method = 'POST';
    form.target = iframe.name;

    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = param;
        input.value = params[param];
        form.appendChild(input);
      }
    }

    document.body.appendChild(form);
    form.submit();

    return defer.promise;
  },
};
