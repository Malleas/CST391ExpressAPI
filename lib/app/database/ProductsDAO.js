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
            products.push(new _Product.Product(rows[i].ID, rows[i].PRODUCT_NAME, rows[i].PRODUCT_DESCRIPTION, rows[i].PRODUCT_PRICE, rows[i].PRODUCT_QUANTITY));
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

                  if (connection.query('DELETE FROM 391MILESTONE.PRODUCT WHERE ID = ?', [id])) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9Qcm9kdWN0c0RBTy50cyJdLCJuYW1lcyI6WyJQcm9kdWN0c0RBTyIsImRiSG9zdCIsImRiUG9ydCIsImRiVXNlcm5hbWUiLCJkYlBhc3N3b3JkIiwicG9vbCIsIm15c3FsIiwiY3JlYXRlUG9vbCIsImNvbm5lY3Rpb25MaW1pdCIsImhvc3QiLCJwb3J0IiwidXNlciIsInBhc3N3b3JkIiwiY2FsbGJhY2siLCJwcm9kdWN0cyIsImdldENvbm5lY3Rpb24iLCJlcnIiLCJjb25uZWN0aW9uIiwicXVlcnkiLCJyb3dzIiwiZmllbGRzIiwicmVsZWFzZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwiUHJvZHVjdCIsIklEIiwiUFJPRFVDVF9OQU1FIiwiUFJPRFVDVF9ERVNDUklQVElPTiIsIlBST0RVQ1RfUFJJQ0UiLCJQUk9EVUNUX1FVQU5USVRZIiwiaWQiLCJwcm9kdWN0IiwidXRpbCIsInByb21pc2lmeSIsInJlc3VsdHMiLCJzdGF0dXMiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3REZXNjcmlwdGlvbiIsInByb2R1Y3RQcmljZSIsInByb2R1Y3RRdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVhQSxXO0FBUVQsdUJBQVlDLE1BQVosRUFBNEJDLE1BQTVCLEVBQTRDQyxVQUE1QyxFQUFnRUMsVUFBaEUsRUFBb0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEYsU0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLElBQUwsR0FBWUMsS0FBSyxDQUFDQyxVQUFOLENBQWlCO0FBQ3pCQyxNQUFBQSxlQUFlLEVBQUUsRUFEUTtBQUV6QkMsTUFBQUEsSUFBSSxFQUFFLEtBQUtSLE1B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O0FBVG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBteXNxbCBmcm9tIFwibXlzcWxcIlxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi4vbW9kZWxzL1Byb2R1Y3RcIjtcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcInV0aWxcIjtcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzREFPe1xuICAgIHByaXZhdGUgZGJIb3N0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBkYlBvcnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGRiVXNlcm5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIGRiUGFzc3dvcmQ6IHN0cmluZztcbiAgICBwcml2YXRlIHBvb2w6IGFueTtcblxuXG4gICAgY29uc3RydWN0b3IoZGJIb3N0OiBzdHJpbmcsIGRiUG9ydDogbnVtYmVyLCBkYlVzZXJuYW1lOiBzdHJpbmcsIGRiUGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRiSG9zdCA9IGRiSG9zdDtcbiAgICAgICAgdGhpcy5kYlBvcnQgPSBkYlBvcnQ7XG4gICAgICAgIHRoaXMuZGJVc2VybmFtZSA9IGRiVXNlcm5hbWU7XG4gICAgICAgIHRoaXMuZGJQYXNzd29yZCA9IGRiUGFzc3dvcmQ7XG4gICAgICAgIHRoaXMucG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICAgICAgICAgICAgY29ubmVjdGlvbkxpbWl0OiAxMCxcbiAgICAgICAgICAgIGhvc3Q6IHRoaXMuZGJIb3N0LFxuICAgICAgICAgICAgcG9ydDogdGhpcy5kYlBvcnQsXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmRiVXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5kYlBhc3N3b3JkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kQWxsUHJvZHVjdHMoY2FsbGJhY2s6IGFueSl7XG4gICAgICAgIGxldCBwcm9kdWN0czpQcm9kdWN0W10gPSBbXTtcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oZnVuY3Rpb24gKGVycjphbnksIGNvbm5lY3Rpb246YW55KXtcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSAzOTFNSUxFU1RPTkUuUFJPRFVDVCcsIGZ1bmN0aW9uIChlcnI6YW55LCByb3dzOmFueSwgZmllbGRzOmFueSl7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTxyb3dzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMucHVzaChuZXcgUHJvZHVjdChyb3dzW2ldLklELCByb3dzW2ldLlBST0RVQ1RfTkFNRSwgcm93c1tpXS5QUk9EVUNUX0RFU0NSSVBUSU9OLCByb3dzW2ldLlBST0RVQ1RfUFJJQ0UsIHJvd3NbaV0uUFJPRFVDVF9RVUFOVElUWSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb2R1Y3RzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZFByb2R1Y3RCeUlkKGlkOm51bWJlciwgY2FsbGJhY2s6YW55KXtcbiAgICAgICAgbGV0IHByb2R1Y3Q6UHJvZHVjdFxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOmFueSwgY29ubmVjdGlvbjphbnkpe1xuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KVxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSAzOTFNSUxFU1RPTkUuUFJPRFVDVCBXSEVSRSBQUk9EVUNUX0lEPT9cIiwgW2lkXSk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KHJlc3VsdHNbaV0uSUQsIHJlc3VsdHNbaV0uUFJPRFVDVF9OQU1FLCByZXN1bHRzW2ldLlBST0RVQ1RfREVTQ1JJUFRJT04sIHJlc3VsdHNbaV0uUFJPRFVDVF9QUklDRSwgcmVzdWx0c1tpXS5QUk9EVUNUX1FVQU5USVRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHByb2R1Y3QpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVQcm9kdWN0KHByb2R1Y3Q6UHJvZHVjdCwgY2FsbGJhY2s6YW55KXtcbiAgICAgICAgbGV0IHN0YXR1cyA9IDA7XG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uIChlcnI6YW55LCBjb25uZWN0aW9uOmFueSl7XG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpXG4gICAgICAgICAgICBpZihjb25uZWN0aW9uLnF1ZXJ5KCdJTlNFUlQgSU5UTyAzOTFNSUxFU1RPTkUuUFJPRFVDVChQUk9EVUNUX05BTUUsIFBST0RVQ1RfREVTQ1JJUFRJT04sIFBST0RVQ1RfUFJJQ0UsIFBST0RVQ1RfUVVBTlRJVFkpIFZBTFVFUyg/LD8sPyw/KScsXG4gICAgICAgICAgICAgICAgW3Byb2R1Y3QucHJvZHVjdE5hbWUsIHByb2R1Y3QucHJvZHVjdERlc2NyaXB0aW9uLCBwcm9kdWN0LnByb2R1Y3RQcmljZSwgcHJvZHVjdC5wcm9kdWN0UXVhbnRpdHldKSl7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gMTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHN0YXR1cyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVByb2R1Y3QocHJvZHVjdDpQcm9kdWN0LCBpZDpudW1iZXIsIGNhbGxiYWNrOmFueSl7XG4gICAgICAgIGxldCBzdGF0dXMgPSAwO1xuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbiAoZXJyOmFueSwgY29ubmVjdGlvbjphbnkpe1xuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rpb24ucXVlcnkoJ1VQREFURSAzOTFNSUxFU1RPTkUuUFJPRFVDVCBTRVQgUFJPRFVDVF9OQU1FID0gPywgUFJPRFVDVF9ERVNDUklQVElPTiA9ID8sIFBST0RVQ1RfUFJJQ0UgPSA/LCBQUk9EVUNUX1FVQU5USVRZID0gPyBXSEVSRSBQUk9EVUNUX0lEID0gPycsXG4gICAgICAgICAgICAgICAgW3Byb2R1Y3QucHJvZHVjdE5hbWUsIHByb2R1Y3QucHJvZHVjdERlc2NyaXB0aW9uLCBwcm9kdWN0LnByb2R1Y3RQcmljZSwgcHJvZHVjdC5wcm9kdWN0UXVhbnRpdHksIHByb2R1Y3QuaWRdKSl7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gMTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHN0YXR1cyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZVByb2R1Y3QoaWQ6bnVtYmVyLCBjYWxsYmFjazphbnkpe1xuICAgICAgICBsZXQgc3RhdHVzID0gMDtcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24gKGVycjphbnksIGNvbm5lY3Rpb246YW55KXtcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSlcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rpb24ucXVlcnkoJ0RFTEVURSBGUk9NIDM5MU1JTEVTVE9ORS5QUk9EVUNUIFdIRVJFIElEID0gPycsIFtpZF0pKXtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAxO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soc3RhdHVzKTtcbiAgICAgICAgfSlcbiAgICB9XG59Il19