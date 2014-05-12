/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Isotope = require('views/Isotope');
    var Scrollview = require('famous/views/Scrollview');

    // create the main context
    var mainContext = Engine.createContext();
    mainContext.setPerspective(500);

    var isotope = new Isotope();
    var scrollView = new Scrollview({
        clipSize: window.innerHeight
    });
    scrollView.sequenceFrom([isotope]);
    Engine.pipe(scrollView);
    mainContext.add(scrollView);

});
