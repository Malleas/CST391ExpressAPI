"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var User = /*#__PURE__*/function () {
  function User(id, firstName, lastName, email, phoneNumber, username, password, isActive, role) {
    (0, _classCallCheck2.default)(this, User);
    (0, _defineProperty2.default)(this, "_id", void 0);
    (0, _defineProperty2.default)(this, "_firstName", void 0);
    (0, _defineProperty2.default)(this, "_lastName", void 0);
    (0, _defineProperty2.default)(this, "_email", void 0);
    (0, _defineProperty2.default)(this, "_phoneNumber", void 0);
    (0, _defineProperty2.default)(this, "_username", void 0);
    (0, _defineProperty2.default)(this, "_password", void 0);
    (0, _defineProperty2.default)(this, "_isActive", void 0);
    (0, _defineProperty2.default)(this, "_role", void 0);
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._username = username;
    this._password = password;
    this._isActive = isActive;
    this._role = role;
  }

  (0, _createClass2.default)(User, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
  }, {
    key: "firstName",
    get: function get() {
      return this._firstName;
    },
    set: function set(value) {
      this._firstName = value;
    }
  }, {
    key: "lastName",
    get: function get() {
      return this._lastName;
    },
    set: function set(value) {
      this._lastName = value;
    }
  }, {
    key: "email",
    get: function get() {
      return this._email;
    },
    set: function set(value) {
      this._email = value;
    }
  }, {
    key: "phoneNumber",
    get: function get() {
      return this._phoneNumber;
    },
    set: function set(value) {
      this._phoneNumber = value;
    }
  }, {
    key: "username",
    get: function get() {
      return this._username;
    },
    set: function set(value) {
      this._username = value;
    }
  }, {
    key: "password",
    get: function get() {
      return this._password;
    },
    set: function set(value) {
      this._password = value;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this._isActive;
    },
    set: function set(value) {
      this._isActive = value;
    }
  }, {
    key: "role",
    get: function get() {
      return this._role;
    },
    set: function set(value) {
      this._role = value;
    }
  }]);
  return User;
}();

exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvVXNlci50cyJdLCJuYW1lcyI6WyJVc2VyIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaXNBY3RpdmUiLCJyb2xlIiwiX2lkIiwiX2ZpcnN0TmFtZSIsIl9sYXN0TmFtZSIsIl9lbWFpbCIsIl9waG9uZU51bWJlciIsIl91c2VybmFtZSIsIl9wYXNzd29yZCIsIl9pc0FjdGl2ZSIsIl9yb2xlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxJO0FBYVQsZ0JBQVlDLEVBQVosRUFBd0JDLFNBQXhCLEVBQTJDQyxRQUEzQyxFQUE2REMsS0FBN0QsRUFBNEVDLFdBQTVFLEVBQWlHQyxRQUFqRyxFQUFtSEMsUUFBbkgsRUFBcUlDLFFBQXJJLEVBQXdKQyxJQUF4SixFQUFzSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xLLFNBQUtDLEdBQUwsR0FBV1QsRUFBWDtBQUNBLFNBQUtVLFVBQUwsR0FBa0JULFNBQWxCO0FBQ0EsU0FBS1UsU0FBTCxHQUFpQlQsUUFBakI7QUFDQSxTQUFLVSxNQUFMLEdBQWNULEtBQWQ7QUFDQSxTQUFLVSxZQUFMLEdBQW9CVCxXQUFwQjtBQUNBLFNBQUtVLFNBQUwsR0FBaUJULFFBQWpCO0FBQ0EsU0FBS1UsU0FBTCxHQUFpQlQsUUFBakI7QUFDQSxTQUFLVSxTQUFMLEdBQWlCVCxRQUFqQjtBQUNBLFNBQUtVLEtBQUwsR0FBYVQsSUFBYjtBQUNIOzs7O1NBR0QsZUFBaUI7QUFDYixhQUFPLEtBQUtDLEdBQVo7QUFDSCxLO1NBRUQsYUFBT1MsS0FBUCxFQUFzQjtBQUNsQixXQUFLVCxHQUFMLEdBQVdTLEtBQVg7QUFDSDs7O1NBRUQsZUFBd0I7QUFDcEIsYUFBTyxLQUFLUixVQUFaO0FBQ0gsSztTQUVELGFBQWNRLEtBQWQsRUFBNkI7QUFDekIsV0FBS1IsVUFBTCxHQUFrQlEsS0FBbEI7QUFDSDs7O1NBRUQsZUFBdUI7QUFDbkIsYUFBTyxLQUFLUCxTQUFaO0FBQ0gsSztTQUVELGFBQWFPLEtBQWIsRUFBNEI7QUFDeEIsV0FBS1AsU0FBTCxHQUFpQk8sS0FBakI7QUFDSDs7O1NBRUQsZUFBb0I7QUFDaEIsYUFBTyxLQUFLTixNQUFaO0FBQ0gsSztTQUVELGFBQVVNLEtBQVYsRUFBeUI7QUFDckIsV0FBS04sTUFBTCxHQUFjTSxLQUFkO0FBQ0g7OztTQUVELGVBQTBCO0FBQ3RCLGFBQU8sS0FBS0wsWUFBWjtBQUNILEs7U0FFRCxhQUFnQkssS0FBaEIsRUFBK0I7QUFDM0IsV0FBS0wsWUFBTCxHQUFvQkssS0FBcEI7QUFDSDs7O1NBRUQsZUFBdUI7QUFDbkIsYUFBTyxLQUFLSixTQUFaO0FBQ0gsSztTQUVELGFBQWFJLEtBQWIsRUFBNEI7QUFDeEIsV0FBS0osU0FBTCxHQUFpQkksS0FBakI7QUFDSDs7O1NBRUQsZUFBdUI7QUFDbkIsYUFBTyxLQUFLSCxTQUFaO0FBQ0gsSztTQUVELGFBQWFHLEtBQWIsRUFBNEI7QUFDeEIsV0FBS0gsU0FBTCxHQUFpQkcsS0FBakI7QUFDSDs7O1NBRUQsZUFBd0I7QUFDcEIsYUFBTyxLQUFLRixTQUFaO0FBQ0gsSztTQUVELGFBQWFFLEtBQWIsRUFBNkI7QUFDekIsV0FBS0YsU0FBTCxHQUFpQkUsS0FBakI7QUFDSDs7O1NBRUQsZUFBbUI7QUFDZixhQUFPLEtBQUtELEtBQVo7QUFDSCxLO1NBRUQsYUFBU0MsS0FBVCxFQUF3QjtBQUNwQixXQUFLRCxLQUFMLEdBQWFDLEtBQWI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2Vye1xuXG4gICAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9maXJzdE5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9sYXN0TmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2VtYWlsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGhvbmVOdW1iZXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF91c2VybmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3Bhc3N3b3JkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaXNBY3RpdmU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfcm9sZTogbnVtYmVyO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGhvbmVOdW1iZXI6IG51bWJlciwgdXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgaXNBY3RpdmU6IGJvb2xlYW4sIHJvbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHRoaXMuX2xhc3ROYW1lID0gbGFzdE5hbWU7XG4gICAgICAgIHRoaXMuX2VtYWlsID0gZW1haWw7XG4gICAgICAgIHRoaXMuX3Bob25lTnVtYmVyID0gcGhvbmVOdW1iZXI7XG4gICAgICAgIHRoaXMuX3VzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICAgIHRoaXMuX3JvbGUgPSByb2xlO1xuICAgIH1cblxuXG4gICAgZ2V0IGlkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBzZXQgaWQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBmaXJzdE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0TmFtZTtcbiAgICB9XG5cbiAgICBzZXQgZmlyc3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZmlyc3ROYW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGxhc3ROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0TmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbGFzdE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9sYXN0TmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBlbWFpbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW1haWw7XG4gICAgfVxuXG4gICAgc2V0IGVtYWlsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZW1haWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcGhvbmVOdW1iZXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bob25lTnVtYmVyO1xuICAgIH1cblxuICAgIHNldCBwaG9uZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3Bob25lTnVtYmVyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHVzZXJuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VybmFtZTtcbiAgICB9XG5cbiAgICBzZXQgdXNlcm5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl91c2VybmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwYXNzd29yZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XG4gICAgfVxuXG4gICAgc2V0IHBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBzZXQgaXNBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcm9sZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9sZTtcbiAgICB9XG5cbiAgICBzZXQgcm9sZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3JvbGUgPSB2YWx1ZTtcbiAgICB9XG59Il19