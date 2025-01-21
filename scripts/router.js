class Router
{
    static routes = {
        "Home": "home.html",
        "About Us": "about.html",
        "Wedding Card": "card.html",
        "Photos": "photos.html",
        "Events": "events.html",
        "Schedule": "schedule.html",
        "RSVP": "rsvp.html",
    };

    static AddRoute(name, path)
    {
        return Router.routes[name] = path;
    }

    static GetRoute(name)
    {
        return Router.routes[name];
    }

}