"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCard = void 0;
function parseCard(content) {
    var cardReg = /:::card((?:.|\n)*?):::/g;
    return content.replace(cardReg, function (match, childStr) {
        var titleReg = /```topic((?:.|\n)*?)```/g;
        var descReg = /```desc((?:.|\n)*?)```/g;
        var codeReg = /```(?:html|js|javascript|typescript|less|css)((?:.|\n)*?)```/g;
        var props = {};
        var titleResult = titleReg.exec(childStr);
        if (titleResult) {
            props.title = titleResult[1].trim();
        }
        var codes = [];
        var codeResult;
        // eslint-disable-next-line no-cond-assign
        while (codeResult = codeReg.exec(childStr)) {
            codes.push(codeResult[1].trim());
        }
        if (codes.length) {
            props.code = codes.join('\n\n');
        }
        var descResult = descReg.exec(childStr);
        if (descResult) {
            descResult = descResult[1].trim();
        }
        else {
            descResult = childStr.replace(titleReg, '').replace(codeReg, '').trim();
        }
        if (descResult) {
            props.desc = descResult;
        }
        var propsString = Object.keys(props).map(function (propKey) {
            return propKey + "=\"" + escape(props[propKey]) + "\"";
        }).join(' ');
        return "<card " + propsString + " />";
    });
}
exports.parseCard = parseCard;
