"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersDAO = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var mysql = _interopRequireWildcard(require("mysql"));

var util = _interopRequireWildcard(require("util"));

var _User = require("../models/User");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var UsersDAO = /*#__PURE__*/function () {
  function UsersDAO(dbHost, dbPort, dbUsername, dbPassword) {
    (0, _classCallCheck2.default)(this, UsersDAO);
    (0, _defineProperty2.default)(this, "dbHost", void 0);
    (0, _defineProperty2.default)(this, "dbPort", void 0);
    (0, _defineProperty2.default)(this, "dbUsername", void 0);
    (0, _defineProperty2.default)(this, "dbPassword", void 0);
    (0, _defineProperty2.default)(this, "pool", void 0);
    this.dbHost = dbHost;
    this.dbPort = dbPort;
    this.dbUsername = dbUsername;
    this.dbPassword = dbPassword;
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: this.dbHost,
      port: this.dbPort,
      user: this.dbUsername,
      password: this.dbPassword
    });
  }

  (0, _createClass2.default)(UsersDAO, [{
    key: "findAllUsers",
    value: function findAllUsers(callback) {
      var users = [];
      this.pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT * FROM 391MILESTONE.USER', function (err, rows, fields) {
          connection.release();
          if (err) throw err;

          for (var i = 0; i < rows.length; i++) {
            users.push(new _User.User(rows[i].ID, rows[i].FIRST_NAME, rows[i].LAST_NAME, rows[i].EMAIL, rows[i].PHONE_NUMBER, rows[i].USERNAME, rows[i].PASSWORD, rows[i].IS_ACTIVE, rows[i].ROLE));
          }

          callback(users);
        });
      });
    }
  }, {
    key: "findUserById",
    value: function findUserById(id, callback) {
      var user;
      this.pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT * FROM 391MILESTONE.USER WHERE USER_ID=?', [id], function (err, rows, fields) {
          connection.release();
          if (err) throw err;

          for (var i = 0; i < rows.length; i++) {
            user = new _User.User(rows[i].ID, rows[i].FIRST_NAME, rows[i].LAST_NAME, rows[i].EMAIL, rows[i].PHONE_NUMBER, rows[i].USERNAME, rows[i].PASSWORD, rows[i].IS_ACTIVE, rows[i].ROLE);
          }

          callback(user);
        });
      });
    }
  }, {
    key: "createUser",
    value: function createUser(user, callback) {
      var status = 0;
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(err, connection) {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!err) {
                    _context.next = 2;
                    break;
                  }

                  throw err;

                case 2:
                  connection.release();
                  connection.query = util.promisify(connection.query);

                  if (connection.query('INSERT INTO 391MILESTONE.USER(FIRST_NAME, LAST_NAME, EMAIL, PHONE_NUMBER, USERNAME, PASSWORD) VALUES (?,?,?,?,?,?)', [user.firstName, user.lastName, user.email, user.phoneNumber, user.username, user.password])) {
                    status = 1;
                  } else {
                    status = -1;
                  }

                  callback(status);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "updateProduct",
    value: function updateProduct(user, id, callback) {
      var status = 0;
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(err, connection) {
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!err) {
                    _context2.next = 2;
                    break;
                  }

                  throw err;

                case 2:
                  connection.release();
                  connection.query = util.promisify(connection.query);

                  if (connection.query('UPDATE 391MILESTONE.USER SET FIRST_NAME = ?, LAST_NAME = ?, EMAIL = ?, PHONE_NUMBER = ?, USERNAME = ?, PASSWORD = ? WHERE USER_ID = ?', [user.firstName, user.lastName, user.email, user.phoneNumber, user.username, user.password, user.id])) {
                    status = 1;
                  } else {
                    status = -1;
                  }

                  callback(status);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "deleteProduct",
    value: function deleteProduct(id, callback) {
      var status = 0;
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(err, connection) {
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!err) {
                    _context3.next = 2;
                    break;
                  }

                  throw err;

                case 2:
                  connection.release();
                  connection.query = util.promisify(connection.query);

                  if (connection.query('DELETE FROM 391MILESTONE.USER WHERE ID = ?', [id])) {
                    status = 1;
                  } else {
                    status = -1;
                  }

                  callback(status);

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }]);
  return UsersDAO;
}();

exports.UsersDAO = UsersDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9Vc2Vyc0RBTy50cyJdLCJuYW1lcyI6WyJVc2Vyc0RBTyIsImRiSG9zdCIsImRiUG9ydCIsImRiVXNlcm5hbWUiLCJkYlBhc3N3b3JkIiwicG9vbCIsIm15c3FsIiwiY3JlYXRlUG9vbCIsImNvbm5lY3Rpb25MaW1pdCIsImhvc3QiLCJwb3J0IiwidXNlciIsInBhc3N3b3JkIiwiY2FsbGJhY2siLCJ1c2VycyIsImdldENvbm5lY3Rpb24iLCJlcnIiLCJjb25uZWN0aW9uIiwicXVlcnkiLCJyb3dzIiwiZmllbGRzIiwicmVsZWFzZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwiVXNlciIsIklEIiwiRklSU1RfTkFNRSIsIkxBU1RfTkFNRSIsIkVNQUlMIiwiUEhPTkVfTlVNQkVSIiwiVVNFUk5BTUUiLCJQQVNTV09SRCIsIklTX0FDVElWRSIsIlJPTEUiLCJpZCIsInN0YXR1cyIsInV0aWwiLCJwcm9taXNpZnkiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVhQSxRO0FBUVQsb0JBQVlDLE1BQVosRUFBNEJDLE1BQTVCLEVBQTRDQyxVQUE1QyxFQUFnRUMsVUFBaEUsRUFBb0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEYsU0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLElBQUwsR0FBWUMsS0FBSyxDQUFDQyxVQUFOLENBQWlCO0FBQ3pCQyxNQUFBQSxlQUFlLEVBQUUsRUFEUTtBQUV6QkMsTUFBQUEsSUFBSSxFQUFFLEtBQUtSLE1BRmM7QUFHekJTLE1BQUFBLElBQUksRUFBRSxL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QUFBLFVBQVUsQ0FBQ0MsS0FBWCxHQUFtQm1CLElBQUksQ0FBQ0MsU0FBTCxDQUFlckIsVUFBVSxDQUFDQyxLQUExQixDQUFuQjs7QUFDQSxzQkFBR0QsVUFBVSxDQUFDQyxLQUFYLENBQWlCLDRDQUFqQixFQUErRCxDQUFDaUIsRUFBRCxDQUEvRCxDQUFILEVBQXdFO0FBQ3BFQyxvQkFBQUEsTUFBTSxHQUFHLENBQVQ7QUFDSCxtQkFGRCxNQUVNO0FBQ0ZBLG9CQUFBQSxNQUFNLEdBQUcsQ0FBQyxDQUFWO0FBQ0g7O0FBQ0R2QixrQkFBQUEsUUFBUSxDQUFDdUIsTUFBRCxDQUFSOztBQVRvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSBcIm15c3FsXCJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcInV0aWxcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy9Vc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2Vyc0RBT3tcbiAgICBwcml2YXRlIGRiSG9zdDogc3RyaW5nO1xuICAgIHByaXZhdGUgZGJQb3J0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkYlVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBkYlBhc3N3b3JkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb29sOiBhbnk7XG5cblxuICAgIGNvbnN0cnVjdG9yKGRiSG9zdDogc3RyaW5nLCBkYlBvcnQ6IG51bWJlciwgZGJVc2VybmFtZTogc3RyaW5nLCBkYlBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kYkhvc3QgPSBkYkhvc3Q7XG4gICAgICAgIHRoaXMuZGJQb3J0ID0gZGJQb3J0O1xuICAgICAgICB0aGlzLmRiVXNlcm5hbWUgPSBkYlVzZXJuYW1lO1xuICAgICAgICB0aGlzLmRiUGFzc3dvcmQgPSBkYlBhc3N3b3JkO1xuICAgICAgICB0aGlzLnBvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb25MaW1pdDogMTAsXG4gICAgICAgICAgICBob3N0OiB0aGlzLmRiSG9zdCxcbiAgICAgICAgICAgIHBvcnQ6IHRoaXMuZGJQb3J0LFxuICAgICAgICAgICAgdXNlcjogdGhpcy5kYlVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuZGJQYXNzd29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZEFsbFVzZXJzKGNhbGxiYWNrOiBhbnkpe1xuICAgICAgICBsZXQgdXNlcnM6VXNlcltdID0gW107XG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGZ1bmN0aW9uIChlcnI6YW55LCBjb25uZWN0aW9uOmFueSl7XG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gMzkxTUlMRVNUT05FLlVTRVInLCBmdW5jdGlvbiAoZXJyOmFueSwgcm93czphbnksIGZpZWxkczphbnkpe1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8cm93cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJzLnB1c2gobmV3IFVzZXIocm93c1tpXS5JRCwgcm93c1tpXS5GSVJTVF9OQU1FLCByb3dzW2ldLkxBU1RfTkFNRSwgcm93c1tpXS5FTUFJTCwgcm93c1tpXS5QSE9ORV9OVU1CRVIsIHJvd3NbaV0uVVNFUk5BTUUsIHJvd3NbaV0uUEFTU1dPUkQsIHJvd3NbaV0uSVNfQUNUSVZFLCByb3dzW2ldLlJPTEUpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjayh1c2VycylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGZpbmRVc2VyQnlJZChpZDpudW1iZXIsIGNhbGxiYWNrOmFueSl7XG4gICAgICAgIGxldCB1c2VyOlVzZXI7XG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGZ1bmN0aW9uIChlcnI6YW55LCBjb25uZWN0aW9uOmFueSl7XG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gMzkxTUlMRVNUT05FLlVTRVIgV0hFUkUgVVNFUl9JRD0/JywgW2lkXSwgZnVuY3Rpb24gKGVycjphbnksIHJvd3M6YW55LCBmaWVsZHM6YW55KXtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHJvd3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICB1c2VyID0gbmV3IFVzZXIocm93c1tpXS5JRCwgcm93c1tpXS5GSVJTVF9OQU1FLCByb3dzW2ldLkxBU1RfTkFNRSwgcm93c1tpXS5FTUFJTCwgcm93c1tpXS5QSE9ORV9OVU1CRVIsIHJvd3NbaV0uVVNFUk5BTUUsIHJvd3NbaV0uUEFTU1dPUkQsIHJvd3NbaV0uSVNfQUNUSVZFLCByb3dzW2ldLlJPTEUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVzZXIpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZVVzZXIodXNlcjpVc2VyLCBjYWxsYmFjazphbnkpe1xuICAgICAgICBsZXQgc3RhdHVzID0gMDtcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24gKGVycjphbnksIGNvbm5lY3Rpb246YW55KXtcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSlcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rpb24ucXVlcnkoJ0lOU0VSVCBJTlRPIDM5MU1JTEVTVE9ORS5VU0VSKEZJUlNUX05BTUUsIExBU1RfTkFNRSwgRU1BSUwsIFBIT05FX05VTUJFUiwgVVNFUk5BTUUsIFBBU1NXT1JEKSBWQUxVRVMgKD8sPyw/LD8sPyw/KScsXG4gICAgICAgICAgICAgICAgW3VzZXIuZmlyc3ROYW1lLCB1c2VyLmxhc3ROYW1lLCB1c2VyLmVtYWlsLCB1c2VyLnBob25lTnVtYmVyLCB1c2VyLnVzZXJuYW1lLCB1c2VyLnBhc3N3b3JkXSkpe1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IDE7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhzdGF0dXMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVQcm9kdWN0KHVzZXI6VXNlciwgaWQ6bnVtYmVyLCBjYWxsYmFjazphbnkpe1xuICAgICAgICBsZXQgc3RhdHVzID0gMDtcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24gKGVycjphbnksIGNvbm5lY3Rpb246YW55KXtcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICAgICAgICBpZihjb25uZWN0aW9uLnF1ZXJ5KCdVUERBVEUgMzkxTUlMRVNUT05FLlVTRVIgU0VUIEZJUlNUX05BTUUgPSA/LCBMQVNUX05BTUUgPSA/LCBFTUFJTCA9ID8sIFBIT05FX05VTUJFUiA9ID8sIFVTRVJOQU1FID0gPywgUEFTU1dPUkQgPSA/IFdIRVJFIFVTRVJfSUQgPSA/JyxcbiAgICAgICAgICAgICAgICBbdXNlci5maXJzdE5hbWUsIHVzZXIubGFzdE5hbWUsIHVzZXIuZW1haWwsIHVzZXIucGhvbmVOdW1iZXIsIHVzZXIudXNlcm5hbWUsIHVzZXIucGFzc3dvcmQsIHVzZXIuaWRdKSl7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gMTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHN0YXR1cyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZVByb2R1Y3QoaWQ6bnVtYmVyLCBjYWxsYmFjazphbnkpe1xuICAgICAgICBsZXQgc3RhdHVzID0gMDtcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24gKGVycjphbnksIGNvbm5lY3Rpb246YW55KXtcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSlcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rpb24ucXVlcnkoJ0RFTEVURSBGUk9NIDM5MU1JTEVTVE9ORS5VU0VSIFdIRVJFIElEID0gPycsIFtpZF0pKXtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAxO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soc3RhdHVzKTtcbiAgICAgICAgfSlcbiAgICB9XG59Il19