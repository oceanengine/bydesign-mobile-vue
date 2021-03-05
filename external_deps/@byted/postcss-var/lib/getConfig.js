"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var regExpCheck = new RegExp('ByDesignVarMarkJson');
var regExpGet = new RegExp('{.*}');
function getConfig(text) {
    if (regExpCheck.exec(text)) {
        try {
            var match = text.match(regExpGet);
            if (match !== null) {
                return JSON.parse(match[0]);
            }
        }
        catch (_a) {
            console.warn('parse error' + text);
        }
    }
    return null;
}
exports.default = getConfig;
