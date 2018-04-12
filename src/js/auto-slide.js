(function () {
    this.AutoSlide = function() {
        var defaults = {
            id: '',
            idx: 0,
            auto: false,
            imgList: [],
            buildPath: 'images/'
        };

        if (arguments[0] && typeof arguments[0] === "object") {
            this.opts = extend(defaults, arguments[0]);
        }

        this.init();
    };

    /**
     * @public
     */
    AutoSlide.prototype.init = function () {

    };

    /**
     * @private
     */


    function extend(source, properties) {
        for (var property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }
})();