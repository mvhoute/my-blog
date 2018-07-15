import React from "react";

import favicon from "./favicon.ico";

module.exports = class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
      <head>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-11155810-9"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'UA-11155810-9');
        </script>

        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {this.props.headComponents}
        <link rel="shortcut icon" href={favicon}/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
        <link rel="stylesheet" href="https://use.typekit.net/atq8bkg.css"/>
      </head>
      <body {...this.props.bodyAttributes}>
      {this.props.preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: this.props.body }}
      />
      {this.props.postBodyComponents}
      </body>
      </html>
    );
  }
};
