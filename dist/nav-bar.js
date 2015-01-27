System.register(["react", "aurelia-framework"], function (_export) {
  "use strict";

  var React, Behavior, _prototypeProperties, NavBarElem, NavBar;
  return {
    setters: [function (_react) {
      React = _react["default"];
    }, function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      NavBarElem = React.createClass({
        displayName: "NavBarElem",
        getInitialState: function () {
          return {
            router: {}
          };
        },
        render: function () {
          var navLoader = null;
          if (this.props.router.isNavigating) {
            navLoader = React.createElement(
              "li",
              { className: "loader" },
              React.createElement("i", { className: "fa fa-spinner fa-spin fa-2x" })
            );
          }
          return React.createElement(
            "nav",
            { className: "navbar navbar-default navbar-fixed-top", role: "navigation" },
            React.createElement(
              "div",
              { className: "navbar-header" },
              React.createElement(
                "button",
                { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1" },
                React.createElement(
                  "span",
                  { className: "sr-only" },
                  "Toggle Navigation"
                ),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" })
              ),
              React.createElement(
                "a",
                { className: "navbar-brand", href: "#" },
                React.createElement("i", { className: "fa fa-home" }),
                React.createElement(
                  "span",
                  null,
                  this.props.router.title
                )
              )
            ),
            React.createElement(
              "div",
              { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
              React.createElement(
                "ul",
                { className: "nav navbar-nav" },
                this.props.router.navigation.map(function (row) {
                  return React.createElement(
                    "li",
                    { className: row.isActive ? "active" : "" },
                    React.createElement(
                      "a",
                      { href: row.href, key: row.href },
                      row.title
                    )
                  );
                })
              ),
              React.createElement(
                "ul",
                { className: "nav navbar-nav navbar-right" },
                navLoader
              )
            )
          );
        }
      });
      NavBar = (function () {
        function NavBar(element) {
          this.element = element;
        }

        _prototypeProperties(NavBar, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("nav-bar").withProperty("router").noView();
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              React.render(React.createElement(NavBarElem, { router: this.router }), this.element);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return NavBar;
      })();
      _export("NavBar", NavBar);
    }
  };
});