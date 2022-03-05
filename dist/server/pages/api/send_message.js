"use strict";
(() => {
var exports = {};
exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 378:
/***/ ((module) => {

module.exports = require("next/dist/server/web/form-data.js");

/***/ }),

/***/ 301:
/***/ ((module) => {

module.exports = require("next/dist/server/web/is.js");

/***/ }),

/***/ 727:
/***/ ((module) => {

module.exports = require("next/dist/server/web/utils.js");

/***/ }),

/***/ 282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/spec-compliant/body.js
var body = __webpack_require__(39);
;// CONCATENATED MODULE: ./pages/api/send_message.js


(__webpack_require__(142).config)();
const Querytemplate = (body)=>`<h2>Message from Koustav's Porfolio Contact Form</h2>
  \n <h4>From ${body.name} regarding ${body.subject}</h4>
  \n
  \n His/Her Message : - <b>${body.message}</b>`
;
let transporter = external_nodemailer_default().createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});
function handler(req, res) {
    let mailOptions = {
        from: `Portfolio Contact Form < ${process.env.FROMEMAIL}>`,
        to: `${process.env.RECEIVEEMAIL}`,
        subject: `Message from ${req.body.name}`,
        replyTo: `${req.body.email}`,
        html: Querytemplate(req.body)
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err);
            res.send('I am unable to send your email');
        } else {
            return res.status(200).send('your mail was send');
        }
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [39], () => (__webpack_exec__(282)));
module.exports = __webpack_exports__;

})();