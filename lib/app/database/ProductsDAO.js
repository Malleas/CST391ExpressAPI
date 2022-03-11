"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsDAO = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var mysql = _interopRequireWildcard(require("mysql"));

var _Product = require("../models/Product");

var util = _interopRequireWildcard(require("util"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProductsDAO = /*#__PURE__*/function () {
  function ProductsDAO(dbHost, dbPort, dbUsername, dbPassword) {
    (0, _classCallCheck2.default)(this, ProductsDAO);
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

  (0, _createClass2.default)(ProductsDAO, [{
    key: "findAllProducts",
    value: function findAllProducts(callback) {
      var products = [];
      this.pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT * FROM 391MILESTONE.PRODUCT', function (err, rows, fields) {
          connection.release();
          if (err) throw err;

          for (var i = 0; i < rows.length; i++) {
            products.push(new _Product.Product(rows[i].PRODUCT_ID, rows[i].PRODUCT_NAME, rows[i].PRODUCT_DESCRIPTION, rows[i].PRODUCT_PRICE, rows[i].PRODUCT_QUANTITY));
          }

          callback(products);
        });
      });
    }
  }, {
    key: "findProductById",
    value: function findProductById(id, callback) {
      var product;
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(err, connection) {
          var results, i;
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
                  _context.next = 6;
                  return connection.query("SELECT * FROM 391MILESTONE.PRODUCT WHERE PRODUCT_ID=?", [id]);

                case 6:
                  results = _context.sent;

                  for (i = 0; i < results.length; i++) {
                    product = new _Product.Product(results[i].ID, results[i].PRODUCT_NAME, results[i].PRODUCT_DESCRIPTION, results[i].PRODUCT_PRICE, results[i].PRODUCT_QUANTITY);
                  }

                  callback(product);

                case 9:
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
    key: "createProduct",
    value: function createProduct(product, callback) {
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

                  if (connection.query('INSERT INTO 391MILESTONE.PRODUCT(PRODUCT_NAME, PRODUCT_DESCRIPTION, PRODUCT_PRICE, PRODUCT_QUANTITY) VALUES(?,?,?,?)', [product.productName, product.productDescription, product.productPrice, product.productQuantity])) {
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
    key: "updateProduct",
    value: function updateProduct(product, id, callback) {
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

                  if (connection.query('UPDATE 391MILESTONE.PRODUCT SET PRODUCT_NAME = ?, PRODUCT_DESCRIPTION = ?, PRODUCT_PRICE = ?, PRODUCT_QUANTITY = ? WHERE PRODUCT_ID = ?', [product.productName, product.productDescription, product.productPrice, product.productQuantity, product.id])) {
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
  }, {
    key: "deleteProduct",
    value: function deleteProduct(id, callback) {
      var status = 0;
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(err, connection) {
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!err) {
                    _context4.next = 2;
                    break;
                  }

                  throw err;

                case 2:
                  connection.release();
                  connection.query = util.promisify(connection.query);

                  if (connection.query('DELETE FROM 391MILESTONE.PRODUCT WHERE PRODUCT_ID = ?', [id])) {
                    status = 1;
                  } else {
                    status = -1;
                  }

                  callback(status);

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }]);
  return ProductsDAO;
}();

exports.ProductsDAO = ProductsDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9Qcm9kdWN0c0RBTy50cyJdLCJuYW1lcyI6WyJQcm9kdWN0c0RBTyIsImRiSG9zdCIsImRiUG9ydCIsImRiVXNlcm5hbWUiLCJkYlBhc3N3b3JkIiwicG9vbCIsIm15c3FsIiwiY3JlYXRlUG9vbCIsImNvbm5lY3Rpb25MaW1pdCIsImhvc3QiLCJwb3J0IiwidXNlciIsInBhc3N3b3JkIiwiY2FsbGJhY2siLCJwcm9kdWN0cyIsImdldENvbm5lY3Rpb24iLCJlcnIiLCJjb25uZWN0aW9uIiwicXVlcnkiLCJyb3dzIiwiZmllbGRzIiwicmVsZWFzZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwiUHJvZHVjdCIsIlBST0RVQ1RfSUQiLCJQUk9EVUNUX05BTUUiLCJQUk9EVUNUX0RFU0NSSVBUSU9OIiwiUFJPRFVDVF9QUklDRSIsIlBST0RVQ1RfUVVBTlRJVFkiLCJpZCIsInByb2R1Y3QiLCJ1dGlsIiwicHJvbWlzaWZ5IiwicmVzdWx0cyIsIklEIiwic3RhdHVzIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJwcm9kdWN0UHJpY2UiLCJwcm9kdWN0UXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7SUFFYUEsVztBQVFULHVCQUFZQyxNQUFaLEVBQTRCQyxNQUE1QixFQUE0Q0MsVUFBNUMsRUFBZ0VDLFVBQWhFLEVBQW9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hGLFNBQUtILE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxJQUFMLEdBQVlDLEtBQUssQ0FBQ0MsVUFBTixDQUFpQjtBQUN6QkMsTUFBQUEsZUFBZSxFQUFFLEVBRFE7QUFFekJDLE1BQUFBLElBQUks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d0IsTUFBRCxDQUFSOztBQVRvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSBcIm15c3FsXCJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uL21vZGVscy9Qcm9kdWN0XCI7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gXCJ1dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0RBT3tcbiAgICBwcml2YXRlIGRiSG9zdDogc3RyaW5nO1xuICAgIHByaXZhdGUgZGJQb3J0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkYlVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBkYlBhc3N3b3JkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb29sOiBhbnk7XG5cblxuICAgIGNvbnN0cnVjdG9yKGRiSG9zdDogc3RyaW5nLCBkYlBvcnQ6IG51bWJlciwgZGJVc2VybmFtZTogc3RyaW5nLCBkYlBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kYkhvc3QgPSBkYkhvc3Q7XG4gICAgICAgIHRoaXMuZGJQb3J0ID0gZGJQb3J0O1xuICAgICAgICB0aGlzLmRiVXNlcm5hbWUgPSBkYlVzZXJuYW1lO1xuICAgICAgICB0aGlzLmRiUGFzc3dvcmQgPSBkYlBhc3N3b3JkO1xuICAgICAgICB0aGlzLnBvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb25MaW1pdDogMTAsXG4gICAgICAgICAgICBob3N0OiB0aGlzLmRiSG9zdCxcbiAgICAgICAgICAgIHBvcnQ6IHRoaXMuZGJQb3J0LFxuICAgICAgICAgICAgdXNlcjogdGhpcy5kYlVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuZGJQYXNzd29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZEFsbFByb2R1Y3RzKGNhbGxiYWNrOiBhbnkpe1xuICAgICAgICBsZXQgcHJvZHVjdHM6UHJvZHVjdFtdID0gW107XG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGZ1bmN0aW9uIChlcnI6YW55LCBjb25uZWN0aW9uOmFueSl7XG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gMzkxTUlMRVNUT05FLlBST0RVQ1QnLCBmdW5jdGlvbiAoZXJyOmFueSwgcm93czphbnksIGZpZWxkczphbnkpe1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8cm93cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLnB1c2gobmV3IFByb2R1Y3Qocm93c1tpXS5QUk9EVUNUX0lELCByb3dzW2ldLlBST0RVQ1RfTkFNRSwgcm93c1tpXS5QUk9EVUNUX0RFU0NSSVBUSU9OLCByb3dzW2ldLlBST0RVQ1RfUFJJQ0UsIHJvd3NbaV0uUFJPRFVDVF9RVUFOVElUWSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb2R1Y3RzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZFByb2R1Y3RCeUlkKGlkOm51bWJlciwgY2FsbGJhY2s6YW55KXtcbiAgICAgICAgbGV0IHByb2R1Y3Q6UHJvZHVjdFxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOmFueSwgY29ubmVjdGlvbjphbnkpe1xuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KVxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSAzOTFNSUxFU1RPTkUuUFJPRFVDVCBXSEVSRSBQUk9EVUNUX0lEPT9cIiwgW2lkXSk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KHJlc3VsdHNbaV0uSUQsIHJlc3VsdHNbaV0uUFJPRFVDVF9OQU1FLCByZXN1bHRzW2ldLlBST0RVQ1RfREVTQ1JJUFRJT04sIHJlc3VsdHNbaV0uUFJPRFVDVF9QUklDRSwgcmVzdWx0c1tpXS5QUk9EVUNUX1FVQU5USVRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHByb2R1Y3QpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVQcm9kdWN0KHByb2R1Y3Q6UHJvZHVjdCwgY2FsbGJhY2s6YW55KXtcbiAgICAgICAgbGV0IHN0YXR1cyA9IDA7XG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uIChlcnI6YW55LCBjb25uZWN0aW9uOmFueSl7XG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpXG4gICAgICAgICAgICBpZihjb25uZWN0aW9uLnF1ZXJ5KCdJTlNFUlQgSU5UTyAzOTFNSUxFU1RPTkUuUFJPRFVDVChQUk9EVUNUX05BTUUsIFBST0RVQ1RfREVTQ1JJUFRJT04sIFBST0RVQ1RfUFJJQ0UsIFBST0RVQ1RfUVVBTlRJVFkpIFZBTFVFUyg/LD8sPyw/KScsXG4gICAgICAgICAgICAgICAgW3Byb2R1Y3QucHJvZHVjdE5hbWUsIHByb2R1Y3QucHJvZHVjdERlc2NyaXB0aW9uLCBwcm9kdWN0LnByb2R1Y3RQcmljZSwgcHJvZHVjdC5wcm9kdWN0UXVhbnRpdHldKSl7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gMTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHN0YXR1cyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVByb2R1Y3QocHJvZHVjdDpQcm9kdWN0LCBpZDpudW1iZXIsIGNhbGxiYWNrOmFueSl7XG4gICAgICAgIGxldCBzdGF0dXMgPSAwO1xuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOmFueSwgY29ubmVjdGlvbjphbnkpe1xuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rpb24ucXVlcnkoJ1VQREFURSAzOTFNSUxFU1RPTkUuUFJPRFVDVCBTRVQgUFJPRFVDVF9OQU1FID0gPywgUFJPRFVDVF9ERVNDUklQVElPTiA9ID8sIFBST0RVQ1RfUFJJQ0UgPSA/LCBQUk9EVUNUX1FVQU5USVRZID0gPyBXSEVSRSBQUk9EVUNUX0lEID0gPycsXG4gICAgICAgICAgICAgICAgW3Byb2R1Y3QucHJvZHVjdE5hbWUsIHByb2R1Y3QucHJvZHVjdERlc2NyaXB0aW9uLCBwcm9kdWN0LnByb2R1Y3RQcmljZSwgcHJvZHVjdC5wcm9kdWN0UXVhbnRpdHksIHByb2R1Y3QuaWRdKSl7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gMTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHN0YXR1cyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZVByb2R1Y3QoaWQ6bnVtYmVyLCBjYWxsYmFjazphbnkpe1xuICAgICAgICBsZXQgc3RhdHVzID0gMDtcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24gKGVycjphbnksIGNvbm5lY3Rpb246YW55KXtcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSlcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rpb24ucXVlcnkoJ0RFTEVURSBGUk9NIDM5MU1JTEVTVE9ORS5QUk9EVUNUIFdIRVJFIFBST0RVQ1RfSUQgPSA/JywgW2lkXSkpe1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IDE7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhzdGF0dXMpO1xuICAgICAgICB9KVxuICAgIH1cbn0iXX0=