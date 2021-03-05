import d3 from "d3";
const d3hsv = require("d3-hsv");
const d3cam02 = require("d3-cam02");
const d3hsluv = require("d3-hsluv");

const d3plus: typeof d3 & typeof d3hsv = {
  ...d3,
  ...d3hsv,
  ...d3cam02,
  ...d3hsluv,
};

export default d3plus;
