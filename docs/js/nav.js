(function () {

    "use strict";

    var defaultData = "getting-started",
        defaultUrl = '/micro-docs/' + defaultData;

    window.addEventListener('load', function (event) {
        history.pushState(defaultData, null, defaultUrl);
        loadContent(defaultUrl, false);
        document.title = defaultTitle;
    })

    var sidebar = document.querySelector('.sidebar'),
        mainBody = document.querySelector('.main-body'),
        defaultTitle = "Microservices Docs";

    sidebar.addEventListener('click', function (event) {
        if (event.target != event.currentTarget) {
            event.preventDefault();
            var data = event.target.getAttribute('uri'),
                url = '/micro-docs/' + data;
            history.pushState(data, null, url);
            loadContent(url, false);
        }
        event.stopPropagation();
    }, false);

    mainBody.addEventListener('click', function (event) {
        var url = event.target.getAttribute('href');
        if (url) {
            // workaround for popup blocker
            try {
                window.location(url);
            } catch (ignore) {}
        } else {
            if (event.target != event.currentTarget) {
                event.preventDefault();
                var data = event.target.getAttribute('uri'),
                    url = '/micro-docs/' + data;
                history.pushState(data, null, url);
                loadContent(url,false);
            }
        }
        event.stopPropagation();
    }, false);

    window.addEventListener('popstate', function (event) {
        var link = event.state;
        if (link == null) {
            history.pushState(defaultData, null, defaultUrl);
            loadContent(defaultUrl, false);
        } else {
            loadContent(link, false);
        }
        document.title = defaultTitle;
    })

})();

(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = 'images/favicon-32x32.png';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
