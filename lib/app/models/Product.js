"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Product = /*#__PURE__*/function () {
  function Product(id, productName, productDescription, productPrice, productQuantity) {
    (0, _classCallCheck2.default)(this, Product);
    (0, _defineProperty2.default)(this, "_id", void 0);
    (0, _defineProperty2.default)(this, "_productName", void 0);
    (0, _defineProperty2.default)(this, "_productDescription", void 0);
    (0, _defineProperty2.default)(this, "_productPrice", void 0);
    (0, _defineProperty2.default)(this, "_productQuantity", void 0);
    this._id = id;
    this._productName = productName;
    this._productDescription = productDescription;
    this._productPrice = productPrice;
    this._productQuantity = productQuantity;
  }

  (0, _createClass2.default)(Product, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
  }, {
    key: "productName",
    get: function get() {
      return this._productName;
    },
    set: function set(value) {
      this._productName = value;
    }
  }, {
    key: "productDescription",
    get: function get() {
      return this._productDescription;
    },
    set: function set(value) {
      this._productDescription = value;
    }
  }, {
    key: "productPrice",
    get: function get() {
      return this._productPrice;
    },
    set: function set(value) {
      this._productPrice = value;
    }
  }, {
    key: "productQuantity",
    get: function get() {
      return this._productQuantity;
    },
    set: function set(value) {
      this._productQuantity = value;
    }
  }]);
  return Product;
}();

exports.Product = Product;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvUHJvZHVjdC50cyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwiaWQiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3REZXNjcmlwdGlvbiIsInByb2R1Y3RQcmljZSIsInByb2R1Y3RRdWFudGl0eSIsIl9pZCIsIl9wcm9kdWN0TmFtZSIsIl9wcm9kdWN0RGVzY3JpcHRpb24iLCJfcHJvZHVjdFByaWNlIiwiX3Byb2R1Y3RRdWFudGl0eSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFBYUEsTztBQVFULG1CQUFZQyxFQUFaLEVBQXdCQyxXQUF4QixFQUE2Q0Msa0JBQTdDLEVBQXlFQyxZQUF6RSxFQUErRkMsZUFBL0YsRUFBd0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEgsU0FBS0MsR0FBTCxHQUFXTCxFQUFYO0FBQ0EsU0FBS00sWUFBTCxHQUFvQkwsV0FBcEI7QUFDQSxTQUFLTSxtQkFBTCxHQUEyQkwsa0JBQTNCO0FBQ0EsU0FBS00sYUFBTCxHQUFxQkwsWUFBckI7QUFDQSxTQUFLTSxnQkFBTCxHQUF3QkwsZUFBeEI7QUFDSDs7OztTQUVELGVBQWlCO0FBQ2IsYUFBTyxLQUFLQyxHQUFaO0FBQ0gsSztTQUVELGFBQU9LLEtBQVAsRUFBc0I7QUFDbEIsV0FBS0wsR0FBTCxHQUFXSyxLQUFYO0FBQ0g7OztTQUVELGVBQTBCO0FBQ3RCLGFBQU8sS0FBS0osWUFBWjtBQUNILEs7U0FFRCxhQUFnQkksS0FBaEIsRUFBK0I7QUFDM0IsV0FBS0osWUFBTCxHQUFvQkksS0FBcEI7QUFDSDs7O1NBRUQsZUFBaUM7QUFDN0IsYUFBTyxLQUFLSCxtQkFBWjtBQUNILEs7U0FFRCxhQUF1QkcsS0FBdkIsRUFBc0M7QUFDbEMsV0FBS0gsbUJBQUwsR0FBMkJHLEtBQTNCO0FBQ0g7OztTQUVELGVBQTJCO0FBQ3ZCLGFBQU8sS0FBS0YsYUFBWjtBQUNILEs7U0FFRCxhQUFpQkUsS0FBakIsRUFBZ0M7QUFDNUIsV0FBS0YsYUFBTCxHQUFxQkUsS0FBckI7QUFDSDs7O1NBRUQsZUFBOEI7QUFDMUIsYUFBTyxLQUFLRCxnQkFBWjtBQUNILEs7U0FFRCxhQUFvQkMsS0FBcEIsRUFBbUM7QUFDL0IsV0FBS0QsZ0JBQUwsR0FBd0JDLEtBQXhCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUHJvZHVjdCB7XG5cbiAgICBwcml2YXRlIF9pZDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3Byb2R1Y3ROYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcHJvZHVjdERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcHJvZHVjdFByaWNlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcHJvZHVjdFF1YW50aXR5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBwcm9kdWN0TmFtZTogc3RyaW5nLCBwcm9kdWN0RGVzY3JpcHRpb246IHN0cmluZywgcHJvZHVjdFByaWNlOiBudW1iZXIsIHByb2R1Y3RRdWFudGl0eTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3ROYW1lID0gcHJvZHVjdE5hbWU7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3REZXNjcmlwdGlvbiA9IHByb2R1Y3REZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fcHJvZHVjdFByaWNlID0gcHJvZHVjdFByaWNlO1xuICAgICAgICB0aGlzLl9wcm9kdWN0UXVhbnRpdHkgPSBwcm9kdWN0UXVhbnRpdHk7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBzZXQgaWQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwcm9kdWN0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZHVjdE5hbWU7XG4gICAgfVxuXG4gICAgc2V0IHByb2R1Y3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvZHVjdE5hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJvZHVjdERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9kdWN0RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IHByb2R1Y3REZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3REZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwcm9kdWN0UHJpY2UoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3RQcmljZTtcbiAgICB9XG5cbiAgICBzZXQgcHJvZHVjdFByaWNlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcHJvZHVjdFByaWNlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHByb2R1Y3RRdWFudGl0eSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZHVjdFF1YW50aXR5O1xuICAgIH1cblxuICAgIHNldCBwcm9kdWN0UXVhbnRpdHkodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wcm9kdWN0UXVhbnRpdHkgPSB2YWx1ZTtcbiAgICB9XG59Il19