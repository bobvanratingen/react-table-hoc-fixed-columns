"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTable = require("react-table-6");

var _uniqid = _interopRequireDefault(require("uniqid"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = function _default(ReactTable) {
  var ReactTableFixedColumns =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ReactTableFixedColumns, _React$Component);

    function ReactTableFixedColumns(props) {
      var _this;

      _classCallCheck(this, ReactTableFixedColumns);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactTableFixedColumns).call(this, props));

      _this.onResizedChange = function () {
        var onResizedChange = _this.props.onResizedChange;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (onResizedChange) {
          onResizedChange.apply(void 0, args);
        }

        args[0].forEach(function (_ref) {
          var id = _ref.id,
              value = _ref.value;
          _this.columnsWidth[id] = value;
        });

        _this.forceUpdate();
      };

      _this.getColumns = (0, _helpers.memoize)(function (columns) {
        var sortedColumns = (0, _helpers.sortColumns)(columns);

        var columnsWithFixed = _this.getColumnsWithFixed(sortedColumns);

        return columnsWithFixed;
      });
      (0, _helpers.checkErrors)(_this.props.columns);
      _this.columnsWidth = {};
      _this.uniqClassName = _this.props.uniqClassName || (0, _uniqid["default"])('rthfc-');
      return _this;
    }

    _createClass(ReactTableFixedColumns, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateRowsPosition();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.updateRowsPosition();
      }
    }, {
      key: "updateRowsPosition",
      value: function updateRowsPosition() {
        var headerRows = document.querySelectorAll(".".concat(this.uniqClassName, " .rt-thead"));
        var topPosition = 0;
        /* eslint-disable no-param-reassign */

        Array.from(headerRows).forEach(function (row) {
          row.style.top = "".concat(topPosition, "px");
          topPosition += row.offsetHeight;
        });
        /* eslint-enable no-param-reassign */
      }
    }, {
      key: "getLeftOffsetColumns",
      value: function getLeftOffsetColumns(columns, index) {
        var offset = 0;

        for (var i = 0; i < index; i += 1) {
          var column = columns[i];

          if (column.show !== false) {
            var id = (0, _helpers.getColumnId)(column);
            var width = this.columnsWidth[id] || column.width || column.minWidth || 100;
            offset += width;
          }
        }

        return offset;
      }
    }, {
      key: "getRightOffsetColumns",
      value: function getRightOffsetColumns(columns, index) {
        var offset = 0;

        for (var i = index + 1; i < columns.length; i += 1) {
          var column = columns[i];

          if (column.show !== false) {
            var id = (0, _helpers.getColumnId)(column);
            var width = this.columnsWidth[id] || column.width || column.minWidth || 100;
            offset += width;
          }
        }

        return offset;
      }
    }, {
      key: "getColumnsWithFixed",
      value: function getColumnsWithFixed(columns, parentIsfixed, parentIsLastFixed, parentIsFirstFixed) {
        var _this2 = this;

        var defaultColumn = this.props.column;
        return columns.map(function (column, index) {
          var fixed = column.fixed || parentIsfixed || false;
          var nextColumn = (0, _helpers.findNextColumnNotHidden)(columns, index);

          var _parentIsLastFixed = fixed && parentIsfixed === undefined && nextColumn && !nextColumn.fixed;

          var isLastFixed = fixed && (parentIsfixed ? [true, 'left'].includes(parentIsfixed) && parentIsLastFixed : true) && (parentIsfixed && !nextColumn || !parentIsfixed && nextColumn && !nextColumn.fixed);
          var prevColumn = (0, _helpers.findPrevColumnNotHidden)(columns, index);

          var _parentIsFirstFixed = fixed && parentIsfixed === undefined && prevColumn && !prevColumn.fixed;

          var isFirstFixed = fixed && (parentIsfixed ? parentIsfixed === 'right' && parentIsFirstFixed : true) && (parentIsfixed && !prevColumn || !parentIsfixed && prevColumn && !prevColumn.fixed);
          var columnIsLeftFixed = (0, _helpers.isLeftFixed)({
            fixed: fixed
          });
          var columnIsRightFixed = (0, _helpers.isRightFixed)({
            fixed: fixed
          });

          var left = columnIsLeftFixed && _this2.getLeftOffsetColumns(columns, index);

          var right = columnIsRightFixed && _this2.getRightOffsetColumns(columns, index);

          var output = _objectSpread({}, column, {
            fixed: fixed,
            className: (0, _classnames["default"])(defaultColumn.className, column.className, fixed && 'rthfc-td-fixed', columnIsLeftFixed && 'rthfc-td-fixed-left', columnIsRightFixed && 'rthfc-td-fixed-right', isLastFixed && 'rthfc-td-fixed-left-last', isFirstFixed && 'rthfc-td-fixed-right-first'),
            style: _objectSpread({}, defaultColumn.style, {}, column.style, {
              left: left,
              right: right
            }),
            headerClassName: (0, _classnames["default"])(defaultColumn.headerClassName, column.headerClassName, fixed && 'rthfc-th-fixed', columnIsLeftFixed && 'rthfc-th-fixed-left', columnIsRightFixed && 'rthfc-th-fixed-right', (_parentIsLastFixed || parentIsLastFixed && isLastFixed) && 'rthfc-th-fixed-left-last', (_parentIsFirstFixed || parentIsFirstFixed && isFirstFixed) && 'rthfc-th-fixed-right-first'),
            headerStyle: _objectSpread({}, defaultColumn.headerStyle, {}, column.headerStyle, {
              left: left,
              right: right
            })
          });

          if (column.columns) {
            output.columns = _this2.getColumnsWithFixed(column.columns, fixed, _parentIsLastFixed, _parentIsFirstFixed);
          }

          return output;
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            innerRef = _this$props.innerRef,
            columns = _this$props.columns,
            props = _objectWithoutProperties(_this$props, ["className", "innerRef", "columns"]);

        return _react["default"].createElement(ReactTable, _extends({}, props, {
          ref: innerRef,
          className: (0, _classnames["default"])(className, this.uniqClassName, 'rthfc', '-sp'),
          columns: this.getColumns(columns),
          onResizedChange: this.onResizedChange
        }));
      }
    }]);

    return ReactTableFixedColumns;
  }(_react["default"].Component);

  ReactTableFixedColumns.propTypes = {
    columns: _propTypes["default"].array.isRequired,
    innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
    className: _propTypes["default"].string,
    onResizedChange: _propTypes["default"].func,
    uniqClassName: _propTypes["default"].string,
    column: _propTypes["default"].object
  };
  ReactTableFixedColumns.defaultProps = {
    innerRef: null,
    className: null,
    onResizedChange: null,
    uniqClassName: null,
    column: _reactTable.ReactTableDefaults.column
  };
  return ReactTableFixedColumns;
};

exports["default"] = _default;