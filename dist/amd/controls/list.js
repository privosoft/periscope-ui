define(['exports', 'aurelia-framework', 'jquery'], function (exports, _aureliaFramework, _jquery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.List = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

  var List = exports.List = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), (_class = function () {
    function List() {
      _classCallCheck(this, List);

      _initDefineProp(this, 'items', _descriptor, this);

      _initDefineProp(this, 'title', _descriptor2, this);

      _initDefineProp(this, 'highlightText', _descriptor3, this);

      _initDefineProp(this, 'visible', _descriptor4, this);

      _initDefineProp(this, 'selectedItem', _descriptor5, this);

      _initDefineProp(this, 'focusedItemIndex', _descriptor6, this);
    }

    List.prototype.constrictor = function constrictor() {};

    List.prototype.attached = function attached(params) {

      var self = this;

      (0, _jquery2.default)("body").on("click", function (args) {
        if ((0, _jquery2.default)(args.target).parents(".list-view").length > 0 || (0, _jquery2.default)(args.target).hasClass("list-view")) return;
        self.visible = false;
      });

      if ((0, _jquery2.default)('.list-container').length === 0) return;
      (0, _jquery2.default)('.list-container')[0].addEventListener("keydown", function (e) {
        var container = (0, _jquery2.default)(this);

        if (container.find('li').length === 0) return;

        switch (e.keyCode) {

          case 38:
            if (container.find('li').filter('.focused-item').length === 0) {
              self.focusedItemIndex = container.find('li').length - 1;
            } else {
              var previousIndex = self.focusedItemIndex - 1;
              if (previousIndex < 0) previousIndex = container.find('li').length - 1;
              self.focusedItemIndex = previousIndex;
            }
            break;

          case 40:

            if (container.find('li').filter('.focused-item').length === 0) {
              self.focusedItemIndex = 0;
            } else {
              var nextIndex = self.focusedItemIndex + 1;
              if (nextIndex >= container.find('li').length) nextIndex = 0;
              self.focusedItemIndex = nextIndex;
            }
            break;
          case 13:
            if (self.focusedItemIndex >= 0) {
              self.select(self.focusedItemIndex);
            }
            break;
          case 27:
            self.visible = false;
            break;
        }
        e.preventDefault();
        e.stopPropagation();
      });
    };

    List.prototype.format = function format(itemText) {
      if (this.highlightText !== '' && itemText && itemText.toLowerCase().indexOf(this.highlightText.toLowerCase()) >= 0) {
        var regex = new RegExp(this.highlightText, 'i');
        return itemText.replace(regex, '<b>$&</b>');
      }
      return itemText;
    };

    List.prototype.select = function select(itemIndex) {
      this.selectedItem = this.items[itemIndex];
      this.focusedItemIndex = -1;
    };

    List.prototype.focusedItemIndexChanged = function focusedItemIndexChanged(newValue, oldValue) {
      if (this.focusedItemIndex != undefined) {
        if (this.focusedItemIndex >= 0) this.setFocus(this.focusedItemIndex);else this.clearFocus();
      }
    };

    List.prototype.setFocus = function setFocus(itemIndex) {
      var container = (0, _jquery2.default)(this.listViewContainer);
      if (container.find('li').length === 0) return;
      container.find('li').filter('.focused-item').removeClass("focused-item");
      (0, _jquery2.default)(container.find('li')[itemIndex]).addClass("focused-item");
      (0, _jquery2.default)(container.find('li')[itemIndex]).find('button').first().focus();
    };

    List.prototype.clearFocus = function clearFocus() {
      var container = (0, _jquery2.default)(this.listViewContainer);
      if (container.find('li').filter('.focused-item').length === 0) return;
      container.find('li').filter('.focused-item').first().find('button').first().blur();
      container.find('li').filter('.focused-item').removeClass("focused-item");
    };

    return List;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'items', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'title', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "";
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'highlightText', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "";
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'visible', [_dec], {
    enumerable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'selectedItem', [_dec2], {
    enumerable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'focusedItemIndex', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class));
});