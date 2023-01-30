"use strict";

var _regeneratorRuntime2 = require("@babel/runtime-corejs3/regenerator");
var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _weakMap = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/weak-map"));
var _weakSet = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/weak-set"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));
var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classPrivateFieldGet"));
var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"));
var _marked = /*#__PURE__*/_regeneratorRuntime2.mark(gen1);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _privateField = /*#__PURE__*/new _weakMap.default();
var _privateMethod = /*#__PURE__*/new _weakSet.default();
var A = /*#__PURE__*/function () {
  function A() {
    (0, _classCallCheck2.default)(this, A);
    _classPrivateMethodInitSpec(this, _privateMethod);
    _classPrivateFieldInitSpec(this, _privateField, {
      writable: true,
      value: ''
    });
    (0, _classPrivateFieldSet2.default)(this, _privateField, 'A');
  }
  (0, _createClass2.default)(A, null, [{
    key: "publicStaticMethod",
    value: function publicStaticMethod() {
      _classStaticPrivateFieldSpecSet(A, A, _PRIVATE_STATIC_FIELD, 2);
      return _classStaticPrivateFieldSpecGet(A, A, _PRIVATE_STATIC_FIELD);
    }
  }]);
  return A;
}();
function _privateMethod2() {
  console.log('this.#privateField', (0, _classPrivateFieldGet2.default)(this, _privateField));
}
(0, _defineProperty2.default)(A, "STATIC_FIELD", 0);
var _PRIVATE_STATIC_FIELD = {
  writable: true,
  value: 1
};
console.log(A.publicStaticMethod() === 42);
var B = /*#__PURE__*/function (_A) {
  (0, _inherits2.default)(B, _A);
  var _super = _createSuper(B);
  function B() {
    var _this;
    (0, _classCallCheck2.default)(this, B);
    _this = _super.call(this);
    _this.b = 'b';
    return _this;
  }
  return (0, _createClass2.default)(B);
}(A);
var foo = function foo() {
  console.log('arrow function!');
};
var arr = [1, 2, 3, 4];
console.log('arr.includes(1)?', (0, _includes.default)(arr).call(arr, 1));
var arr2 = (0, _map.default)(arr).call(arr, function (item) {
  console.log('arr item', item);
  return item;
});
var p1 = new _promise.default();
function gen1() {
  return _regenerator.default.wrap(function gen1$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
      case "end":
        return _context.stop();
    }
  }, _marked);
}