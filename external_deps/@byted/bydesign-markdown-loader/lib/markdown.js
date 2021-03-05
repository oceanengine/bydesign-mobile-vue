"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * markdown-it 实例
 */
var markdown_it_1 = __importDefault(require("markdown-it"));
var highlight_1 = __importDefault(require("./highlight"));
var markdown_it_anchor_1 = __importDefault(require("markdown-it-anchor"));
var transliteration_1 = require("transliteration");
var markdown_it_container_1 = __importDefault(require("markdown-it-container"));
var const_1 = require("./const");
var md = new markdown_it_1.default({
    html: true,
    xhtmlOut: true,
    linkify: true,
    highlight: highlight_1.default
}).use(markdown_it_anchor_1.default, {
    slugify: transliteration_1.slugify
}).use(markdown_it_container_1.default, 'card', {
    validate: function (params) {
        return params.trim().match(/^card\s*(.*)$/);
    },
    render: function wrapper(tokens, idx) {
        if (tokens[idx].nesting === 1) {
            return "<div class=\"" + const_1.PREFIX + "-card\">";
        }
        else {
            return '</div>';
        }
    }
});
exports.default = md;
