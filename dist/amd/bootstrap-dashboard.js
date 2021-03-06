define(['exports', 'aurelia-framework', 'periscope-framework', 'lodash', 'jquery'], function (exports, _aureliaFramework, _periscopeFramework, _lodash, _jquery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BootstrapDashboard = undefined;

  var _ = _interopRequireWildcard(_lodash);

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var BootstrapDashboard = exports.BootstrapDashboard = function (_DashboardBase) {
    _inherits(BootstrapDashboard, _DashboardBase);

    function BootstrapDashboard(name) {
      _classCallCheck(this, BootstrapDashboard);

      var _this = _possibleConstructorReturn(this, _DashboardBase.call(this, name));

      _this.widgetBaseHeight = 70;
      _this.layoutStructure = [];
      _this.currentUrl = "";
      return _this;
    }

    BootstrapDashboard.prototype.replaceWidget = function replaceWidget(oldWidget, newWidget, callback) {
      _DashboardBase.prototype.replaceWidget.call(this, oldWidget, newWidget, callback);
      this.layoutStructure = this.createLayoutStructure(this.layout);
    };

    BootstrapDashboard.prototype.restoreWidget = function restoreWidget(currentWidget) {
      _DashboardBase.prototype.restoreWidget.call(this, currentWidget);
      this.layoutStructure = this.createLayoutStructure(this.layout);
    };

    BootstrapDashboard.prototype.addWidget = function addWidget(widget, dimensions) {
      _DashboardBase.prototype.addWidget.call(this, widget, dimensions);
      this.layoutStructure = this.createLayoutStructure(this.layout);
    };

    BootstrapDashboard.prototype.removeWidget = function removeWidget(widget) {
      _DashboardBase.prototype.removeWidget.call(this, widget);
      this.layoutStructure = this.createLayoutStructure(this.layout);
    };

    BootstrapDashboard.prototype.resizeWidget = function resizeWidget(widget, dimensions) {
      _DashboardBase.prototype.resizeWidget.call(this, widget, dimensions);
      this.layoutStructure = this.createLayoutStructure(this.layout);
    };

    BootstrapDashboard.prototype.attached = function attached() {};

    BootstrapDashboard.prototype.createLayoutStructure = function createLayoutStructure(layout) {
      var sortedWidgets = _.sortBy(layout, function (w) {
        return w.row;
      });
      var result = [];
      _.forOwn(_.groupBy(sortedWidgets, 'row'), function (v, k) {
        var sortedByCol = _.sortBy(v, function (w) {
          return w.col;
        });
        result.push({
          row: k,
          widgets: sortedByCol
        });
      });
      return result;
    };

    BootstrapDashboard.prototype.getColWidth = function getColWidth(layoutWidget) {
      if (layoutWidget.sizeX === "*") {
        var totalX = _.sumBy(this.layout, function (x) {
          if (typeof x.sizeX === 'number' && x.row == layoutWidget.row) return x.sizeX;
        });
        var x = 12 - (totalX - Math.floor(totalX / 12) * 12);
        return "col-md-" + (x != 0 ? x : 12);
      }
      return "col-md-" + layoutWidget.sizeX;
    };

    BootstrapDashboard.prototype.getColHeight = function getColHeight(layoutWidget) {
      var _this2 = this;

      var result = "";
      if (layoutWidget.sizeY === "*") {
        var totalHeight = _.sumBy(this.layout, function (x) {
          if (typeof x.sizeY === 'number' && layoutWidget.row !== x.row) return x.sizeY * _this2.widgetBaseHeight;
        });
        result = (0, _jquery2.default)('#dashboard')[0].clientHeight - totalHeight;
      } else {
        if (layoutWidget.sizeY > 0) result = layoutWidget.sizeY * this.widgetBaseHeight;
      }
      this.setWidgetHeight(layoutWidget, result);
      return "height: " + result + "px;";
    };

    BootstrapDashboard.prototype.setWidgetHeight = function setWidgetHeight(layoutWidget, containerHeight) {
      if (layoutWidget.widget.showHeader) layoutWidget.widget.minHeight = containerHeight - 71;else layoutWidget.widget.minHeight = containerHeight - 31;
    };

    BootstrapDashboard.prototype.openPopup = function openPopup() {
      (0, _jquery2.default)(this.popWidgetHost).modal('show');
    };

    BootstrapDashboard.prototype.share = function share() {
      this.currentUrl = _DashboardBase.prototype.getRoute.call(this);
      (0, _jquery2.default)(this.popupShare).modal('show');
    };

    return BootstrapDashboard;
  }(_periscopeFramework.DashboardBase);
});