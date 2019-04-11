exports.ids = [0];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(14);

var _icon2 = _interopRequireDefault(_icon);

var _button = __webpack_require__(90);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  max-width: 450px;\n  margin: auto;\n'], ['\n  max-width: 450px;\n  margin: auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 32px;\n  font-weight: 400;\n  color: white;\n  @media only screen and (max-width: ', ') {\n    font-size: 20px;\n  }\n'], ['\n  font-size: 32px;\n  font-weight: 400;\n  color: white;\n  @media only screen and (max-width: ', ') {\n    font-size: 20px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: 4rem;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  @media only screen and (max-width: ', ') {\n    height: auto;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n'], ['\n  height: 4rem;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  @media only screen and (max-width: ', ') {\n    height: auto;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  height: 70px;\n'], ['\n  height: 70px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  color: ', ';\n  border: none;\n  :hover {\n    color: ', ';\n  }\n  @media only screen and (max-width: ', ') {\n    margin-bottom: 20px;\n  }\n'], ['\n  font-size: 14px;\n  color: ', ';\n  border: none;\n  :hover {\n    color: ', ';\n  }\n  @media only screen and (max-width: ', ') {\n    margin-bottom: 20px;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n'], ['\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  font-size: 14px;\n  @media only screen and (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  font-size: 14px;\n  @media only screen and (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  flex: 200px 0 0;\n  margin-bottom: 20px;\n'], ['\n  flex: 200px 0 0;\n  margin-bottom: 20px;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  font-size: 16px;\n  color: white;\n  padding-top: 30px;\n  border-top: 1px solid white;\n'], ['\n  font-size: 16px;\n  color: white;\n  padding-top: 30px;\n  border-top: 1px solid white;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  margin-bottom: 10px;\n'], ['\n  margin-bottom: 10px;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  height: 200px;\n'], ['\n  height: 200px;\n']);

__webpack_require__(15);

__webpack_require__(91);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(8);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _I18N = __webpack_require__(9);

var _I18N2 = _interopRequireDefault(_I18N);

var _variable = __webpack_require__(10);

var _color = __webpack_require__(11);

var colors = _interopRequireWildcard(_color);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          Title,
          null,
          _I18N2.default.get('footer.title')
        ),
        _react2.default.createElement(
          'div',
          null,
          _I18N2.default.get('footer.store.title')
        ),
        _react2.default.createElement(
          List,
          null,
          _react2.default.createElement(
            ListItem,
            null,
            _react2.default.createElement(
              'a',
              { href: _I18N2.default.get('footer.store.ios.storeLink'), target: '_blank', rel: 'noopener noreferrer' },
              _react2.default.createElement(StoreImg, { src: _I18N2.default.get('footer.store.ios.storeImg'), className: 'spacer', alt: 'download url' })
            ),
            _react2.default.createElement(
              Help,
              null,
              _I18N2.default.get('footer.store.ios.help')
            ),
            _react2.default.createElement(
              StyledButton,
              { shape: 'round', href: _I18N2.default.get('footer.store.ios.helpLink'), target: '_blank' },
              _react2.default.createElement(StyledIcon, { type: 'apple', theme: 'filled' }),
              _I18N2.default.get('footer.store.ios.btnText')
            )
          ),
          _react2.default.createElement(
            ListItem,
            null,
            _react2.default.createElement(
              'a',
              { href: _I18N2.default.get('footer.store.android.storeLink'), target: '_blank', rel: 'noopener noreferrer' },
              _react2.default.createElement(StoreImg, { src: _I18N2.default.get('footer.store.android.storeImg'), className: 'spacer', alt: 'download url' })
            ),
            _react2.default.createElement(
              Help,
              null,
              _I18N2.default.get('footer.store.android.help')
            ),
            _react2.default.createElement(
              StyledButton,
              { shape: 'round', href: _I18N2.default.get('footer.store.android.helpLink'), target: '_blank' },
              _react2.default.createElement(StyledIcon, { type: 'android', theme: 'filled' }),
              _I18N2.default.get('footer.store.android.btnText')
            )
          )
        ),
        _react2.default.createElement(
          QRTitle,
          null,
          _I18N2.default.get('footer.qrCode.title')
        ),
        _react2.default.createElement(
          List,
          null,
          _react2.default.createElement(
            ListItem,
            null,
            _react2.default.createElement(
              ImgTitle,
              null,
              _I18N2.default.get('footer.qrCode.ios.title')
            ),
            _react2.default.createElement(QRImg, { src: _I18N2.default.get('footer.qrCode.ios.url'), className: 'spacer', alt: 'wallet' })
          ),
          _react2.default.createElement(
            ListItem,
            null,
            _react2.default.createElement(
              ImgTitle,
              null,
              _I18N2.default.get('footer.qrCode.android.title')
            ),
            _react2.default.createElement(QRImg, { src: _I18N2.default.get('footer.qrCode.android.url'), className: 'spacer', alt: 'wallet' })
          )
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

var Container = _styledComponents2.default.div(_templateObject);
var Title = _styledComponents2.default.h2(_templateObject2, _variable.breakPoint.mobile);
var Help = _styledComponents2.default.div(_templateObject3, _variable.breakPoint.mobile);
var StoreImg = _styledComponents2.default.img(_templateObject4);
var StyledButton = (0, _styledComponents2.default)(_button2.default)(_templateObject5, colors.text.theme, colors.text.theme, _variable.breakPoint.mobile);
var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject6);
var List = _styledComponents2.default.ul(_templateObject7, _variable.breakPoint.mobile);
var ListItem = _styledComponents2.default.li(_templateObject8);
var QRTitle = _styledComponents2.default.h4(_templateObject9);
var ImgTitle = _styledComponents2.default.div(_templateObject10);
var QRImg = _styledComponents2.default.img(_templateObject11);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n'], ['\n  text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(8);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _hero = __webpack_require__(96);

var _hero2 = _interopRequireDefault(_hero);

var _intro = __webpack_require__(97);

var _intro2 = _interopRequireDefault(_intro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function () {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(_hero2.default, null),
    _react2.default.createElement(_intro2.default, null)
  );
};

var Container = _styledComponents2.default.div(_templateObject);

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(90);

var _button2 = _interopRequireDefault(_button);

var _row = __webpack_require__(92);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(93);

var _col2 = _interopRequireDefault(_col);

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  padding-top: 100px;\n  text-align: left;\n  background: url(', ') no-repeat;\n  background-size: cover;\n  background-position-x: right;\n  background-position-y: 100%;\n  color: white;\n  @media only screen and (max-width: ', ') {\n    background: url(', ') no-repeat;\n    margin-bottom: 200px;\n    padding-bottom: 100px;\n  }\n'], ['\n  position: relative;\n  padding-top: 100px;\n  text-align: left;\n  background: url(', ') no-repeat;\n  background-size: cover;\n  background-position-x: right;\n  background-position-y: 100%;\n  color: white;\n  @media only screen and (max-width: ', ') {\n    background: url(', ') no-repeat;\n    margin-bottom: 200px;\n    padding-bottom: 100px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  max-width: 1200px;\n  height: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-bottom: 70px;\n'], ['\n  max-width: 1200px;\n  height: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-bottom: 70px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n'], ['\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  height: 35px;\n  position: initial;\n'], ['\n  height: 35px;\n  position: initial;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 13px;\n  font-weight: bold;\n  margin-top: 60px;\n  @media only screen and (max-width: ', ') {\n    margin-top: 0;\n  }\n'], ['\n  font-size: 13px;\n  font-weight: bold;\n  margin-top: 60px;\n  @media only screen and (max-width: ', ') {\n    margin-top: 0;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 42px;\n  font-weight: bolder;\n  color: white;\n  margin-top: 15px;\n  line-height: 1.2em;\n  margin: 30px auto 40px;\n  @media only screen and (max-width: ', ') {\n    font-size: 36px;\n  }\n'], ['\n  font-size: 42px;\n  font-weight: bolder;\n  color: white;\n  margin-top: 15px;\n  line-height: 1.2em;\n  margin: 30px auto 40px;\n  @media only screen and (max-width: ', ') {\n    font-size: 36px;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  color: ', ';\n  padding: 0 30px;\n  font-size: 14px;\n  :hover {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n  padding: 0 30px;\n  font-size: 14px;\n  :hover {\n    color: ', ';\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  height: 14px;\n  margin-right: 15px;\n'], ['\n  height: 14px;\n  margin-right: 15px;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  margin-top: 25px;\n  font-weight: lighter;\n  font-size: 13px;\n'], ['\n  margin-top: 25px;\n  font-weight: lighter;\n  font-size: 13px;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  @media only screen and (max-width: ', ') {\n    position: absolute;\n    top: 40px;\n  }\n'], ['\n  @media only screen and (max-width: ', ') {\n    position: absolute;\n    top: 40px;\n  }\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  height: 20px;\n'], ['\n  height: 20px;\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  text-align: center;\n  font-size: 12px;\n  position: absolute;\n  font-size: 12px;\n  right: 26%;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  :hover {\n    color: inherit;\n  }\n  @media only screen and (max-width: ', ') {\n    display: none;\n  }\n'], ['\n  text-align: center;\n  font-size: 12px;\n  position: absolute;\n  font-size: 12px;\n  right: 26%;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  :hover {\n    color: inherit;\n  }\n  @media only screen and (max-width: ', ') {\n    display: none;\n  }\n']);

__webpack_require__(91);

__webpack_require__(94);

__webpack_require__(95);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactResponsive = __webpack_require__(13);

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _styledComponents = __webpack_require__(8);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _I18N = __webpack_require__(9);

var _I18N2 = _interopRequireDefault(_I18N);

var _variable = __webpack_require__(10);

var _images = __webpack_require__(1);

var _images2 = _interopRequireDefault(_images);

var _color = __webpack_require__(11);

var colors = _interopRequireWildcard(_color);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import './style.less'
exports.default = function () {
  return _react2.default.createElement(
    Container,
    { id: 'hero' },
    _react2.default.createElement(
      ContainerInner,
      null,
      _react2.default.createElement(
        StyledRow,
        null,
        _react2.default.createElement(
          _col2.default,
          { xs: 24, sm: 14 },
          _react2.default.createElement(
            SubTitle,
            null,
            _I18N2.default.get('hero.welcome')
          ),
          _react2.default.createElement(
            Title,
            null,
            _I18N2.default.get('hero.title')
          ),
          _react2.default.createElement(
            StyledButton,
            { shape: 'round', href: '#footer' },
            _react2.default.createElement(
              ButtonInner,
              null,
              _react2.default.createElement(StyledIcon, { src: _images2.default.logo_img, alt: 'icon' }),
              _I18N2.default.get('hero.btnText')
            )
          ),
          _react2.default.createElement(
            Help,
            null,
            _I18N2.default.get('hero.help')
          )
        ),
        _react2.default.createElement(
          _col2.default,
          { xs: 24, sm: 10 },
          _react2.default.createElement(
            _reactResponsive2.default,
            { maxWidth: _variable.breakPoint.mobile },
            _react2.default.createElement(WalletImg, { mobile: true, src: _images2.default.hero_phone_image_mobile_img, alt: 'wallet image' })
          ),
          _react2.default.createElement(
            _reactResponsive2.default,
            { minWidth: _variable.breakPoint.mobile },
            _react2.default.createElement(WalletImg, { src: _images2.default.hero_phone_image_img, alt: 'wallet image' })
          )
        )
      ),
      _react2.default.createElement(
        BottomRow,
        null,
        _react2.default.createElement(
          LearnMore,
          { href: '#intro' },
          _react2.default.createElement(
            'div',
            null,
            _I18N2.default.get('hero.learnMore')
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(DownArrow, { src: _images2.default.down_arrow_img, alt: 'down arrow' })
          )
        )
      )
    )
  );
};

var Container = _styledComponents2.default.div(_templateObject, _images2.default.top_background_img, _variable.breakPoint.mobile, _images2.default.top_background_mobile_img);
var ContainerInner = _styledComponents2.default.div(_templateObject2);
var StyledRow = (0, _styledComponents2.default)(_row2.default)(_templateObject3);
var BottomRow = (0, _styledComponents2.default)(_row2.default)(_templateObject4);
var SubTitle = _styledComponents2.default.div(_templateObject5, _variable.breakPoint.mobile);
var Title = _styledComponents2.default.h1(_templateObject6, _variable.breakPoint.mobile);
var StyledButton = (0, _styledComponents2.default)(_button2.default)(_templateObject7, colors.text.theme, colors.text.theme);
var ButtonInner = _styledComponents2.default.div(_templateObject8);
var StyledIcon = _styledComponents2.default.img(_templateObject9);
var Help = _styledComponents2.default.div(_templateObject10);
var WalletImg = _styledComponents2.default.img(_templateObject11, _variable.breakPoint.mobile);
var DownArrow = _styledComponents2.default.img(_templateObject12);
var LearnMore = _styledComponents2.default.a(_templateObject13, _variable.breakPoint.mobile);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(90);

var _button2 = _interopRequireDefault(_button);

var _row = __webpack_require__(92);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(93);

var _col2 = _interopRequireDefault(_col);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  background-color: white;\n  color: ', ';\n  @media only screen and (max-width: ', ') {\n    overflow: hidden;\n  }\n'], ['\n  position: relative;\n  background-color: white;\n  color: ', ';\n  @media only screen and (max-width: ', ') {\n    overflow: hidden;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  /* max-width: 1200px;\n  margin: 0 auto; */\n  height: 100%;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 960px;\n  margin: 40px auto;\n  @media only screen and (max-width: ', ') {\n  }\n'], ['\n  /* max-width: 1200px;\n  margin: 0 auto; */\n  height: 100%;\n  padding-left: 40px;\n  padding-right: 40px;\n  max-width: 960px;\n  margin: 40px auto;\n  @media only screen and (max-width: ', ') {\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  text-align: left;\n  margin-bottom: 30px;\n'], ['\n  text-align: left;\n  margin-bottom: 30px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 24px;\n  /* @media only screen and (max-width: ', ') {\n  } */\n'], ['\n  color: ', ';\n  font-size: 24px;\n  /* @media only screen and (max-width: ', ') {\n  } */\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 14px;\n'], ['\n  font-size: 14px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  padding-top: 40px;\n  margin-top: 40px;\n  border-top: 1px solid ', ';\n'], ['\n  padding-top: 40px;\n  margin-top: 40px;\n  border-top: 1px solid ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  text-align: center;\n  margin-bottom: 30px;\n'], ['\n  text-align: center;\n  margin-bottom: 30px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  height: 100px;\n'], ['\n  height: 100px;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 16px;\n  margin: 15px auto;\n'], ['\n  color: ', ';\n  font-size: 16px;\n  margin: 15px auto;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  line-height: 1.5em;\n'], ['\n  font-size: 14px;\n  line-height: 1.5em;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  text-align: center;\n  margin-top: 20px;\n'], ['\n  text-align: center;\n  margin-top: 20px;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  border: none;\n  background-color: ', ';\n  color: white;\n  font-weight: 14px;\n  padding: 0 20px;\n  :hover {\n    background-color: ', ';\n    color: white;\n  }\n'], ['\n  border: none;\n  background-color: ', ';\n  color: white;\n  font-weight: 14px;\n  padding: 0 20px;\n  :hover {\n    background-color: ', ';\n    color: white;\n  }\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  height: 16px;\n  margin-right: 10px;\n'], ['\n  height: 16px;\n  margin-right: 10px;\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n\n'], ['\n\n']);

__webpack_require__(91);

__webpack_require__(94);

__webpack_require__(95);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(8);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _I18N = __webpack_require__(9);

var _I18N2 = _interopRequireDefault(_I18N);

var _variable = __webpack_require__(10);

var _images = __webpack_require__(1);

var _images2 = _interopRequireDefault(_images);

var _color = __webpack_require__(11);

var colors = _interopRequireWildcard(_color);

__webpack_require__(98);

var _footer = __webpack_require__(99);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));

    _this.state = {};
    return _this;
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          Container,
          { id: 'intro' },
          _react2.default.createElement(
            ContainerInner,
            { className: 'container-inner' },
            _react2.default.createElement(
              StyledRow,
              { gutter: 24 },
              _react2.default.createElement(
                _col2.default,
                { xs: 24, sm: { span: 6, offset: 2 } },
                _react2.default.createElement(
                  Title,
                  null,
                  _I18N2.default.get('intro.about.title')
                )
              ),
              _react2.default.createElement(
                _col2.default,
                { xs: 24, sm: 16 },
                _react2.default.createElement(
                  Desc,
                  null,
                  _I18N2.default.get('intro.about.desc')
                )
              )
            ),
            _react2.default.createElement(
              StyledRow,
              { gutter: 24 },
              _react2.default.createElement(
                _col2.default,
                { xs: 24, sm: { span: 6, offset: 2 } },
                _react2.default.createElement(
                  Title,
                  null,
                  _I18N2.default.get('intro.social.telegram.title')
                )
              ),
              _react2.default.createElement(
                _col2.default,
                { xs: 24, sm: 16 },
                _react2.default.createElement(
                  Desc,
                  null,
                  _I18N2.default.get('intro.social.telegram.desc')
                ),
                _react2.default.createElement(
                  BtnContainer,
                  null,
                  _react2.default.createElement(
                    SocialButton,
                    { href: _I18N2.default.get('links.telegram'), shape: 'round', target: '_blank', rel: 'noopener noreferrer' },
                    _react2.default.createElement(BtnImg, { src: _images2.default.telegram_icon_img, className: 'spacer', alt: 'download url' }),
                    _react2.default.createElement(
                      BtnText,
                      null,
                      _I18N2.default.get('intro.social.telegram.btnText')
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              FeatureRow,
              { gutter: 24 },
              _react2.default.createElement(
                FeatureItem,
                { xs: 24, sm: 8 },
                _react2.default.createElement(FeatureImg, { src: _images2.default.did_icon_img, className: 'spacer', alt: 'download url' }),
                _react2.default.createElement(
                  FeatureTitle,
                  null,
                  _I18N2.default.get('intro.feature.feature_1.title')
                ),
                _react2.default.createElement(
                  FeatureDesc,
                  null,
                  _I18N2.default.get('intro.feature.feature_1.desc')
                )
              ),
              _react2.default.createElement(
                FeatureItem,
                { xs: 24, sm: 8 },
                _react2.default.createElement(FeatureImg, { src: _images2.default.multi_icon_img, className: 'spacer', alt: 'download url' }),
                _react2.default.createElement(
                  FeatureTitle,
                  null,
                  _I18N2.default.get('intro.feature.feature_2.title')
                ),
                _react2.default.createElement(
                  FeatureDesc,
                  null,
                  _I18N2.default.get('intro.feature.feature_2.desc')
                )
              ),
              _react2.default.createElement(
                FeatureItem,
                { xs: 24, sm: 8 },
                _react2.default.createElement(FeatureImg, { src: _images2.default.opensource_icon_img, className: 'spacer', alt: 'download url' }),
                _react2.default.createElement(
                  FeatureTitle,
                  null,
                  _I18N2.default.get('intro.feature.feature_3.title')
                ),
                _react2.default.createElement(
                  FeatureDesc,
                  null,
                  _I18N2.default.get('intro.feature.feature_3.desc')
                )
              )
            )
          )
        ),
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

var Container = _styledComponents2.default.div(_templateObject, colors.text.theme, _variable.breakPoint.mobile);
var ContainerInner = _styledComponents2.default.div(_templateObject2, _variable.breakPoint.mobile);
var StyledRow = (0, _styledComponents2.default)(_row2.default)(_templateObject3);
var Title = _styledComponents2.default.h2(_templateObject4, colors.text.theme, _variable.breakPoint.mobile);
var Desc = _styledComponents2.default.div(_templateObject5);
var FeatureRow = (0, _styledComponents2.default)(_row2.default)(_templateObject6, colors.border.theme);
var FeatureItem = (0, _styledComponents2.default)(_col2.default)(_templateObject7);
var FeatureImg = _styledComponents2.default.img(_templateObject8);
var FeatureTitle = _styledComponents2.default.h3(_templateObject9, colors.text.theme);
var FeatureDesc = _styledComponents2.default.div(_templateObject10);
var BtnContainer = _styledComponents2.default.div(_templateObject11);
var SocialButton = (0, _styledComponents2.default)(_button2.default)(_templateObject12, colors.bg.theme, colors.bg.theme);
var BtnImg = _styledComponents2.default.img(_templateObject13);
var BtnText = _styledComponents2.default.span(_templateObject14);

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  text-align: center;\n  background-image: url(', ');\n  background-size: cover;\n  color: white;\n'], ['\n  position: relative;\n  text-align: center;\n  background-image: url(', ');\n  background-size: cover;\n  color: white;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  max-width: 1200px;\n  height: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-top: 60px;\n  padding-bottom: 40px;\n'], ['\n  max-width: 1200px;\n  height: 100%;\n  margin: 0 auto;\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-top: 60px;\n  padding-bottom: 40px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  text-align: center;\n  position: absolute;\n  left: calc(50% - 40px);\n  top: -40px;\n'], ['\n  text-align: center;\n  position: absolute;\n  left: calc(50% - 40px);\n  top: -40px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  height: 80px;\n'], ['\n  height: 80px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(8);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _wallet = __webpack_require__(100);

var _wallet2 = _interopRequireDefault(_wallet);

var _images = __webpack_require__(1);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import I18N from '../../I18N'


var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Container,
        { id: 'footer' },
        _react2.default.createElement(
          Inner,
          { id: 'footer-inner' },
          _react2.default.createElement(
            LogoContainer,
            null,
            _react2.default.createElement(Logo, { src: _images2.default.elephant_circle_logo_img, className: 'footer-logo', alt: 'logo' })
          ),
          _react2.default.createElement(_wallet2.default, null)
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

var Container = _styledComponents2.default.div(_templateObject, _images2.default.bottom_background_img);
var Inner = _styledComponents2.default.div(_templateObject2);
var LogoContainer = _styledComponents2.default.div(_templateObject3);
var Logo = _styledComponents2.default.img(_templateObject4);

/***/ })

};;
//# sourceMappingURL=home.34872c42.js.map