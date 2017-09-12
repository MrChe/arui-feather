'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp; /* This Source Code Form is subject to the terms of the Mozilla Public
                                          * License, v. 2.0. If a copy of the MPL was not distributed with this
                                          * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var _reactAddonsCreateFragment = require('react-addons-create-fragment');

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cn = require('../cn');

var _cn2 = _interopRequireDefault(_cn);

var _performance = require('../performance');

var _performance2 = _interopRequireDefault(_performance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Компонент группы чекбоксов.
 */
var CheckBoxGroup = (_dec = (0, _cn2.default)('checkbox-group'), _dec2 = (0, _performance2.default)(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(CheckBoxGroup, _React$Component);

    function CheckBoxGroup() {
        _classCallCheck(this, CheckBoxGroup);

        return _possibleConstructorReturn(this, (CheckBoxGroup.__proto__ || Object.getPrototypeOf(CheckBoxGroup)).apply(this, arguments));
    }

    _createClass(CheckBoxGroup, [{
        key: 'render',
        value: function render(cn) {
            var _this2 = this;

            var children = null;
            var checkboxGroupParts = {};

            if (this.props.children) {
                children = this.props.children.length ? this.props.children : [this.props.children];
            }

            if (children) {
                children.forEach(function (checkbox, index) {
                    checkboxGroupParts['checkbox-' + index] = _this2.props.type !== 'button' && _this2.props.type !== 'line' ? _react2.default.createElement(
                        'div',
                        null,
                        checkbox
                    ) : checkbox;
                });
            }

            return _react2.default.createElement(
                'span',
                {
                    className: cn({ type: this.props.type }) + ' control-group',
                    role: 'group',
                    tabIndex: '-1'
                },
                !!this.props.label && _react2.default.createElement(
                    'div',
                    { className: cn('label') },
                    this.props.label
                ),
                (0, _reactAddonsCreateFragment2.default)(checkboxGroupParts)
            );
        }
    }]);

    return CheckBoxGroup;
}(_react2.default.Component), _class2.propTypes = {
    /** Тип компонента */
    type: _propTypes2.default.oneOf(['normal', 'button', 'line']),
    /** Дочерние элементы `CheckBoxGroup`, как правило, компоненты `CheckBox` */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    /** Тема компонента */
    theme: _propTypes2.default.oneOf(['alfa-on-color', 'alfa-on-white']),
    /** Дополнительный класс */
    className: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
    /** Лейбл для группы */
    label: _propTypes2.default.node
}, _temp)) || _class) || _class);
exports.default = CheckBoxGroup;
//# sourceMappingURL=checkbox-group.js.map