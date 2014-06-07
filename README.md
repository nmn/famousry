
# Famousry
JQuery Masonry / Isotope alternative implemented with famo.us.
At the moment famousry only handles a single column width and all the elements to should confrom to that width. It automatically figures out the best layout to keep the order closest to the original while also making all the columns come as close to ending at the same-height as possible.

Built on the strength of famous, the it's got good performance and can handle a large number of elements and animations between various positions, even if you resize very frequently.


##Dependencies
It is actually quite simple really

First make sure you have node.js installed... without that nothing works!  You can either install it with your favorite package manager or with [the installer](http://nodejs.org/download) found on [nodejs.org](http://nodejs.org).

This project relies on grunt-cli, and bower to do all the heavy lifting for you

```
npm install -g grunt-cli bower
```

##Getting Started

```
npm install && bower install
```

That's it!!!

##Running the Development Server

Simply run ```grunt serve``` and you will start a local development server and open Chrome.  Watch tasks will be running, and your browser will be automatically refreshed whenever a file in the repo changes.

You can run serve with ```--port=9001``` to manually pick the port that the server will run on

*This option is currently borked...*
You can also change the port livereload is running on with the option ```--livereload=8675309```
*... if you think you can fix it check out the [issue on github](https://github.com/Famous/generator-famous/issues/22)*

If you would like to have your server be accessible to other devices on your local machine use the option ```--hostname=0.0.0.0```

##Production

If you would like to compile your project for distribution simply run the command ```grunt``` to build ```dist/``` which will be a deployment ready version of your app.  Preprocessing will be applied to html, all js will be concatenated and minified.  All js / css assets will also have their name prepended with a hash for cache busting.

## Contributing
All contributions are welcome! The simplest way to show your support for this project is to **"star" it**.

##License
Famousry is licensed under the MIT license. Famo.us is licensed under it's own license.

## Future
Famousry is mostly a proof-of-concept. I'm working on making it production-ready. Soon it should be as easy to use as a jQuery plug-in where you can drop it into an existing float or inline-block based layout, and it should automatically work with it.

Also, soon it should have these features:
- elements with multi-column spans
- custom transitions
- filtering elements, using a custom filter fuction
- dynamically adding and removing elements
- automatically handle resizing elements

