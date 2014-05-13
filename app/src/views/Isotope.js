/*globals define*/
define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var View = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    /*
     * @name Isotope
     * @constructor
     * @description
     */

    function Isotope(options) {
        View.apply(this, arguments);
        this.views = [];
        this.mods = [];
        for (var i = 0; i < 300; i++){
            this.views.push((new Surface({
                size: [100, 50 + Math.floor(Math.random() * 300)],
                properties: {
                    background: 'rgb(' + Math.floor(Math.random() * 100) + ', ' + Math.floor(Math.random() * 140) + ', ' + Math.floor(Math.random() * 250) + ')'
                }
            })));
            this.mods.push(new Modifier());
            this.add(this.mods[i]).add(this.views[i]);
        }

        this.tallest = 0;
        _renderViews.call(this);

        Engine.on('resize', _renderViews.bind(this));

    }

    Isotope.prototype = Object.create(View.prototype);
    Isotope.prototype.constructor = Isotope;

    Isotope.DEFAULT_OPTIONS = {
        width: 105
    };

    Isotope.prototype.getSize = function() {
        var size = View.prototype.getSize.call(this);
        if (size) {
            size[1] = this.tallest + 5;
        } else {
            return [window.innerWidth, Math.max(this.tallest + 5, window.innerHeight)];
        }
        return size;
    };

    function _renderViews() {
        var columns = Math.floor(window.innerWidth / this.options.width);
        var extraSpace = window.innerWidth % this.options.width;
        var heights = [];
        for (var i = 0; i < columns; i++){
            heights.push(5);
        }
        this.views.forEach(function(surface, index) {
            var column = index % columns;
            var row = Math.floor(index/columns);
            var height = surface.getSize()[1];
            if (row !== 0){
                column = smallestInArray(heights);
            }
            // var modifier = new Modifier({
            //     transform: Transform.translate(column*155 + extraSpace/2, heights[column], 0)
            // });
            this.mods[index].halt();
            this.mods[index].setTransform(Transform.translate(column*this.options.width + extraSpace/2, heights[column], 0), {duration: 500, curve:'easeOut'});
            heights[column] += height + 5;
            if (heights[column] > this.tallest){
                this.tallest = heights[column];
            }

        }.bind(this));
    }

    function smallestInArray(array) {
        var smallest = 0;
        for (var i = 1; i<array.length; i++){
            if (array[i] < array[smallest]){
                smallest = i;
            }
        }
        return smallest;
    }

    module.exports = Isotope;

});
