"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req })=>{\n    if (true) {\n        // We are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n            headers: req.headers\n        });\n    } else {}\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLGlFQUFlLENBQUMsRUFBRUMsR0FBRyxFQUFFO0lBQ25CLElBQUksSUFBa0IsRUFBYTtRQUMvQix1QkFBdUI7UUFFdkIsT0FBT0Qsb0RBQVksQ0FBQztZQUNoQkcsU0FDSTtZQUNKQyxTQUFTSCxJQUFJRyxPQUFPO1FBQ3hCO0lBQ0osT0FBTyxFQUtOO0FBQ0wsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2FwaS9idWlsZC1jbGllbnQuanM/YzZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgcmVxIH0pID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyXHJcblxyXG4gICAgICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBiYXNlVVJMOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBXZSBtdXN0IGJlIG9uIHRoZSBicm93c2VyXHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJiYXNlVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ currentUser })=>{\n    const links = [\n        !currentUser && {\n            label: \"Sign Up\",\n            href: \"/auth/signup\"\n        },\n        !currentUser && {\n            label: \"Sign In\",\n            href: \"/auth/signin\"\n        },\n        currentUser && {\n            label: \"Sell Tickets\",\n            href: \"/tickets/new\"\n        },\n        currentUser && {\n            label: \"My Orders\",\n            href: \"/orders\"\n        },\n        currentUser && {\n            label: \"Sign Out\",\n            href: \"/auth/signout\"\n        }\n    ].filter((linkConfig)=>linkConfig).map(({ label, href })=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"nav-link\",\n                href: href,\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paapa\\\\Desktop\\\\ShopSprintTkts\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 15,\n                columnNumber: 21\n            }, undefined)\n        }, href, false, {\n            fileName: \"C:\\\\Users\\\\Paapa\\\\Desktop\\\\ShopSprintTkts\\\\ticketing\\\\client\\\\components\\\\header.js\",\n            lineNumber: 14,\n            columnNumber: 17\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"navbar-brand\",\n                href: \"/\",\n                children: \"ShopSprintsTkts\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paapa\\\\Desktop\\\\ShopSprintTkts\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Paapa\\\\Desktop\\\\ShopSprintTkts\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paapa\\\\Desktop\\\\ShopSprintTkts\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Paapa\\\\Desktop\\\\ShopSprintTkts\\\\ticketing\\\\client\\\\components\\\\header.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFFN0IsaUVBQWUsQ0FBQyxFQUFFQyxXQUFXLEVBQUU7SUFDM0IsTUFBTUMsUUFBUTtRQUNWLENBQUNELGVBQWU7WUFBRUUsT0FBTztZQUFXQyxNQUFNO1FBQWU7UUFDekQsQ0FBQ0gsZUFBZTtZQUFFRSxPQUFPO1lBQVdDLE1BQU07UUFBZTtRQUN6REgsZUFBZTtZQUFFRSxPQUFPO1lBQWdCQyxNQUFNO1FBQWU7UUFDN0RILGVBQWU7WUFBRUUsT0FBTztZQUFhQyxNQUFNO1FBQVU7UUFDckRILGVBQWU7WUFBRUUsT0FBTztZQUFZQyxNQUFNO1FBQWdCO0tBQzdELENBQ0lDLE1BQU0sQ0FBQyxDQUFDQyxhQUFlQSxZQUN2QkMsR0FBRyxDQUFDLENBQUMsRUFBRUosS0FBSyxFQUFFQyxJQUFJLEVBQUU7UUFDakIscUJBQ0ksOERBQUNJO1lBQWNDLFdBQVU7c0JBQ3JCLDRFQUFDVCxrREFBSUE7Z0JBQUNTLFdBQVU7Z0JBQVdMLE1BQU1BOzBCQUM1QkQ7Ozs7OztXQUZBQzs7Ozs7SUFNakI7SUFFSixxQkFDSSw4REFBQ007UUFBSUQsV0FBVTs7MEJBQ1gsOERBQUNULGtEQUFJQTtnQkFBQ1MsV0FBVTtnQkFBZUwsTUFBSzswQkFBSTs7Ozs7OzBCQUl4Qyw4REFBQ087Z0JBQUlGLFdBQVU7MEJBQ1gsNEVBQUNHO29CQUFHSCxXQUFVOzhCQUFpQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9ELEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL2hlYWRlci5qcz9jMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgICBjb25zdCBsaW5rcyA9IFtcclxuICAgICAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gVXAnLCBocmVmOiAnL2F1dGgvc2lnbnVwJyB9LFxyXG4gICAgICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBJbicsIGhyZWY6ICcvYXV0aC9zaWduaW4nIH0sXHJcbiAgICAgICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NlbGwgVGlja2V0cycsIGhyZWY6ICcvdGlja2V0cy9uZXcnIH0sXHJcbiAgICAgICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ015IE9yZGVycycsIGhyZWY6ICcvb3JkZXJzJyB9LFxyXG4gICAgICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIE91dCcsIGhyZWY6ICcvYXV0aC9zaWdub3V0JyB9LFxyXG4gICAgXVxyXG4gICAgICAgIC5maWx0ZXIoKGxpbmtDb25maWcpID0+IGxpbmtDb25maWcpXHJcbiAgICAgICAgLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtocmVmfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICBTaG9wU3ByaW50c1RrdHNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+e2xpbmtzfTwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJjdXJyZW50VXNlciIsImxpbmtzIiwibGFiZWwiLCJocmVmIiwiZmlsdGVyIiwibGlua0NvbmZpZyIsIm1hcCIsImxpIiwiY2xhc3NOYW1lIiwibmF2IiwiZGl2IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_2__]);\n_api_build_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AppComponent = ({ Component, pageProps, currentUser })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paapa\\\\Desktop\\\\ShopSprintTkts\\\\ticketing\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    currentUser: currentUser,\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Paapa\\\\Desktop\\\\ShopSprintTkts\\\\ticketing\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paapa\\\\Desktop\\\\ShopSprintTkts\\\\ticketing\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Paapa\\\\Desktop\\\\ShopSprintTkts\\\\ticketing\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\nAppComponent.getInitialProps = async (appContext)=>{\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx);\n    const { data } = await client.get(\"/api/users/currentuser\");\n    let pageProps = {};\n    if (appContext.Component.getInitialProps) {\n        pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);\n    }\n    return {\n        pageProps,\n        ...data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0k7QUFDSjtBQUUxQyxNQUFNRSxlQUFlLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRTtJQUN2RCxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDTCwwREFBTUE7Z0JBQUNJLGFBQWFBOzs7Ozs7MEJBQ3JCLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0o7b0JBQVVFLGFBQWFBO29CQUFjLEdBQUdELFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxFO0FBRUFGLGFBQWFNLGVBQWUsR0FBRyxPQUFPQztJQUNsQyxNQUFNQyxTQUFTViw2REFBV0EsQ0FBQ1MsV0FBV0UsR0FBRztJQUN6QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1GLE9BQU9HLEdBQUcsQ0FBQztJQUVsQyxJQUFJVCxZQUFZLENBQUM7SUFDakIsSUFBSUssV0FBV04sU0FBUyxDQUFDSyxlQUFlLEVBQUU7UUFDdENKLFlBQVksTUFBTUssV0FBV04sU0FBUyxDQUFDSyxlQUFlLENBQ2xEQyxXQUFXRSxHQUFHLEVBQ2RELFFBQ0FFLEtBQUtQLFdBQVc7SUFFeEI7SUFFQSxPQUFPO1FBQ0hEO1FBQ0EsR0FBR1EsSUFBSTtJQUNYO0FBQ0o7QUFFQSxpRUFBZVYsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcclxuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuXHJcbmNvbnN0IEFwcENvbXBvbmVudCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbkFwcENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoYXBwQ29udGV4dC5jdHgpO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XHJcblxyXG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gICAgaWYgKGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhcclxuICAgICAgICAgICAgYXBwQ29udGV4dC5jdHgsXHJcbiAgICAgICAgICAgIGNsaWVudCxcclxuICAgICAgICAgICAgZGF0YS5jdXJyZW50VXNlclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYWdlUHJvcHMsXHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsIkhlYWRlciIsIkFwcENvbXBvbmVudCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnJlbnRVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsImNsaWVudCIsImN0eCIsImRhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();