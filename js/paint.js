"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coloring = function () {
  function Coloring(container, parameters) {
    _classCallCheck(this, Coloring);

    this.container = container.slice(1);
    this.parameters = parameters;

    if (!this.parameters.colors) {
      this.parameters.colors = [{
        color: "#ff0000",
        palette: ["#ff0000", "#ff0005", "#ff000a", "#ff000f", "#ff0014", "#ff0019", "#ff001e", "#ff9999", "#ffcccc"]
      }, {
        color: "#ff002b",
        palette: ["#ff002b", "#ff1a40", "#ff3355", "#ff4d6a", "#ff6680", "#ff8095", "#ff99aa", "#ffb3bf", "#ffccd5"]
      }, {
        color: "#ffa500",
        palette: ["#ffa500", "#ffaf1a", "#ffb833", "#ffc14d", "#ffd280", "#ffdb99", "#ffe4b3", "#ffedcc", "#fff6e5"]
      }, {
        color: "#ffff00",
        palette: ["#ffff00", "#ffff1a", "#ffff33", "#ffff4d", "#ffff66", "#ffff66", "#ffff80", "#ffff99", "#ffffb3"]
      }, {
        color: "#008000",
        palette: ["#008000", "#00b300", "#00cc00", "#00e600", "#00ff00", "#1aff1a", "#33ff33", "#4dff4d", "#66ff66"]
      }, {
        color: "#00ff00",
        palette: ["#00ff00", "#1aff1a", "#33ff33", "#4dff4d", "#66ff66", "#80ff80", "#99ff99", "#b3ffb3", "#ccffcc"]
      }, {
        color: "#008cff",
        palette: ["#008cff", "#1a98ff", "#33a3ff", "#4dafff", "#66baff", "#80c6ff", "#99d1ff", "#b3ddff", "#cce8ff"]
      }, {
        color: "#0000ff",
        palette: ["#0000ff", "#1a1aff", "#3333ff", "#4d4dff", "#6666ff", "#8080ff", "#9999ff", "#b3b3ff", "#ccccff"]
      }, {
        color: "#8b00ff",
        palette: ["#8b00ff", "#981aff", "#a333ff", "#af4dff", "#ba66ff", "#c680ff", "#d199ff", "#ddb3ff", "#e8ccff"]
      }];
    }

    this.init();
  }

  _createClass(Coloring, [{
    key: "init",
    value: function init() {
      this._picture();
      this._panel();
    }
  }, {
    key: "_paint",
    value: function _paint(event) {
      if (!this.container) {
        this.container = this.dataset.component;
      }
      var cl = document.getElementsByClassName(this.container + '__palette-item_active')[0];
      event.target.style.fill = cl.style.backgroundColor;
    }
  }, {
    key: "_changeColor",
    value: function _changeColor(event) {
      this.container = this.dataset.component;
      var cl = document.getElementsByClassName(this.container + '__palette-item_active')[0];
      cl.classList.remove(this.container + '__palette-item_active');
      this.classList.add(this.container + '__palette-item_active');
    }
  }, {
    key: "_picture",
    value: function _picture() {
      var _this = this;

      var pictureObject = document.createElement("object");
      var pictureContainer = document.createElement("div");
      var defaultFill = 'white';
      pictureContainer.appendChild(pictureObject);
      pictureContainer.className = this.container + "__picture";
      pictureObject.className = this.container + "__object";
      pictureObject.type = "image/svg+xml";
      pictureObject.data = this.parameters.url;
      pictureObject.addEventListener("load", function () {
        var documentObject = pictureObject.contentDocument;
        var elementTypes = ["ellipse", "polygon", "polyline", "path", "circle", "rect"];
        elementTypes.forEach(function (type) {
          var els = documentObject.querySelectorAll(type);
          els.forEach(function (el) {

            if (el.getAttribute('fill') == '#808285' || el.getAttribute('fill') == '#6D6E71') {
              return;
            }

            var closedFigure = '';
            if (el.getAttribute('d')) {
              closedFigure = el.getAttribute('d').replace(/\s+/g, '');
              closedFigure = closedFigure.slice(-1);
            }
            if (type == 'path' && closedFigure.toLowerCase() !== 'z') {
              return;
            }
            el.dataset.component = _this.container;
            if (_this._paint) {
              el.addEventListener("click", _this._paint);
            }
            if (defaultFill) {
              el.style.fill = defaultFill;
            }
          });
        });
        var raster = documentObject.querySelectorAll("pictureObject");
        raster.forEach(function (img) {
          img.style.pointerEvents = "none";
        });
      }, false);
      document.getElementsByClassName(this.container)[0].appendChild(pictureContainer);
    }
  }, {
    key: "_panel",
    value: function _panel() {
      var panelContainer = document.createElement("div");
      panelContainer.className = this.container + "__panel";
      panelContainer.classList.add(this.container + "__panel_no-print");
      // Add colors and palette
      this._colors(panelContainer);

      if (this.parameters.printButton) {
        var printButton = document.createElement("button");
        printButton.className = this.parameters.printButtonClass ? this.parameters.printButtonClass : this.container + "__print";
        printButton.innerHTML = this.parameters.printButtonText ? this.parameters.printButtonText : '';
        printButton.addEventListener("click", this.print);
        panelContainer.appendChild(printButton);
      }
      document.getElementsByClassName(this.container)[0].appendChild(panelContainer);
    }
  }, {
    key: "_colors",
    value: function _colors(panel) {
      var colorsContainer = document.createElement("div");
      colorsContainer.className = this.container + "__colors";
      var color = void 0;
      var colorsLength = this.parameters.colors.length;
      for (var i = 0; i < colorsLength; i++) {
        color = document.createElement("button");
        color.className = this.container + "__colors-item";
        color.dataset.color = this.parameters.colors[i].color;
        color.dataset.palette = this.parameters.colors[i].palette;
        color.dataset.component = this.container;
        if (i == 0) {
          color.classList.add(this.container + "__colors-item_active");
          this._createPalette(panel, i);
        }
        // Add event
        if (this._updatePalette) {
          color.addEventListener("click", this._updatePalette);
        }
        // Added color for button
        if (this.parameters.colors) {
          color.style.backgroundColor = this.parameters.colors[i].color;
        }
        colorsContainer.appendChild(color);
      }
      panel.appendChild(colorsContainer);
    }
  }, {
    key: "_createPalette",
    value: function _createPalette(panel, colorId) {
      var paletteContainer = document.createElement("div");
      paletteContainer.className = this.container + "__palette";
      var palette = void 0;

      for (var paletteIndex = 0; paletteIndex < this.parameters.colors[colorId].palette.length; paletteIndex++) {
        palette = document.createElement("button");
        palette.className = this.container + "__palette-item";
        palette.dataset.component = this.container;
        palette.style.backgroundColor = this.parameters.colors[colorId].palette[paletteIndex];

        if (this.parameters.colors[colorId].color == this.parameters.colors[colorId].palette[paletteIndex]) {
          palette.classList.add(this.container + '__palette-item_active');
        }

        if (this._changeColor) {
          palette.addEventListener("click", this._changeColor);
        }
        paletteContainer.appendChild(palette);
      }

      panel.appendChild(paletteContainer);
    }
  }, {
    key: "_updatePalette",
    value: function _updatePalette() {
      var _this2 = this;

      if (!this.container) {
        this.container = this.dataset.component;
      }
      document.getElementsByClassName(this.container + '__colors-item_active')[0].classList.remove(this.container + '__colors-item_active');
      this.classList.add(this.container + '__colors-item_active');
      document.getElementsByClassName(this.container + '__palette-item_active')[0].classList.remove(this.container + '__palette-item_active');
      var paletteColor = this.dataset.palette.split(',');
      var paletteElements = document.getElementsByClassName(this.container + '__palette-item');
      var timeout = 50;

      var _loop = function _loop(paletteElementsIndex) {

        setTimeout(function () {
          // Таймаут для плавной замены палитры
          paletteElements[paletteElementsIndex].style.backgroundColor = paletteColor[paletteElementsIndex];
        }, timeout);
        timeout += 50;

        if (_this2.dataset.color == paletteColor[paletteElementsIndex]) {
          paletteElements[paletteElementsIndex].classList.add(_this2.container + '__palette-item_active');
        }
      };

      for (var paletteElementsIndex = 0; paletteElementsIndex < paletteElements.length; paletteElementsIndex++) {
        _loop(paletteElementsIndex);
      }
    }
  }, {
    key: "print",
    value: function print() {
      window.print();
    }
  }]);

  return Coloring;
}();