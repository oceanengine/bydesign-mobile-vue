import { rgb, hsl, lab, hcl, interpolateRgb, interpolateHsl, interpolateLab } from 'd3';
import { hsv, interpolateHsv } from 'd3-hsv';
import { jab, jch, interpolateJab } from 'd3-cam02';
import { hsluv } from 'd3-hsluv';

function normalize(X, curveAmount, amount) {
    if (curveAmount === amount) {
        return X;
    }
    if (X <= 1) {
        return 1;
    }
    if (X >= amount) {
        return curveAmount;
    }
    return (curveAmount - 1) / ((amount - 1) / (X - 1)) + 1;
}
/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 2.80556391490106

b = -1.01491279589738

c = 0.911218467059328

d = -0.260999395859336

e = 0.0352810380607801

f = -0.00172187283785092

相关系数 R2：0.999925212773858
 */
function curveAdobeSpectrum(X, amount) {
    X = normalize(X, 7, amount);
    let a, b, c, d, e, f;
    a = 2.80556391490106;
    b = -1.01491279589738;
    c = 0.911218467059328;
    d = -0.260999395859336;
    e = 0.0352810380607801;
    f = -0.00172187283785092;
    const Y = a + b * X + c * Math.pow(X, 2) + d * Math.pow(X, 3) + e * Math.pow(X, 4) + f * Math.pow(X, 5);
    return Y;
}
/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 1.17160555554771

b = 0.136104149565393

c = -0.205232536343237

d = 0.162261403029564

e = -0.0232492322213921

f = 0.000989281211891432

相关系数 R2：0.996870860430168
 */
function curveGoogleMaterial(X, amount) {
    X = normalize(X, 10, amount);
    let a, b, c, d, e, f;
    a = 1.17160555554771;
    b = 0.136104149565393;
    c = -0.205232536343237;
    d = 0.162261403029564;
    e = -0.0232492322213921;
    f = 0.000989281211891432;
    const Y = a + b * X + c * Math.pow(X, 2) + d * Math.pow(X, 3) + e * Math.pow(X, 4) + f * Math.pow(X, 5);
    return Y;
}
/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 1.42077117276554

b = 1.97245501432833

c = -0.98082272198693

d = 0.281191542127172

e = 0.00366469599865697

f = -0.00322141824437273

相关系数 R2：1
 */
function curveFirefoxPhoton(X, amount) {
    X = normalize(X, 6, amount);
    let a, b, c, d, e, f;
    a = 1.42077117276554;
    b = 1.97245501432833;
    c = -0.98082272198693;
    d = 0.281191542127172;
    e = 0.00366469599865697;
    f = -0.00322141824437273;
    const Y = a + b * X + c * Math.pow(X, 2) + d * Math.pow(X, 3) + e * Math.pow(X, 4) + f * Math.pow(X, 5);
    return Y;
}
/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 1.46564604642846

b = -0.928203887106309

c = 0.741369599412513

d = -0.205177932922759

e = 0.0254591071464198

f = -0.00101578314785047

相关系数 R2：0.999832084747266
 */
function curveAntD(X, amount) {
    X = normalize(X, 10, amount);
    let a, b, c, d, e, f;
    a = 1.46564604642846;
    b = -0.928203887106309;
    c = 0.741369599412513;
    d = -0.205177932922759;
    e = 0.0254591071464198;
    f = -0.00101578314785047;
    const Y = a + b * X + c * Math.pow(X, 2) + d * Math.pow(X, 3) + e * Math.pow(X, 4) + f * Math.pow(X, 5);
    return Y;
}
/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 1.43066442413396

b = -0.183303227490002

c = -0.297894090795745

d = 0.20894616649874

e = -0.0339616146116733

f = 0.00177454663520377

相关系数 R2：0.997157115094652
 */
function curveMicrosoftFluent(X, amount) {
    X = normalize(X, 9, amount);
    let a, b, c, d, e, f;
    a = 1.43066442413396;
    b = -0.183303227490002;
    c = -0.297894090795745;
    d = 0.20894616649874;
    e = -0.0339616146116733;
    f = 0.00177454663520377;
    const Y = a + b * X + c * Math.pow(X, 2) + d * Math.pow(X, 3) + e * Math.pow(X, 4) + f * Math.pow(X, 5);
    return Y;
}
/**
拟合方程式：Y = a + b·X + c·X2 + d·X3 + e·X4 + f·X5

参数：

a = 1.4566227721917

b = -0.750523514967315

c = 0.525147359851746

d = -0.112197666983703

e = 0.0110033631737628

f = -0.000329609883693566

相关系数 R2：0.999958565808073
 */
function curveByDesign(X, amount) {
    X = normalize(X, 11, amount);
    let a, b, c, d, e, f;
    a = 1.4566227721917;
    b = -0.750523514967315;
    c = 0.525147359851746;
    d = -0.112197666983703;
    e = 0.0110033631737628;
    f = -0.000329609883693566;
    const Y = a + b * X + c * Math.pow(X, 2) + d * Math.pow(X, 3) + e * Math.pow(X, 4) + f * Math.pow(X, 5);
    return Y;
}
const curveFunctionMap = {
    curveAdobeSpectrum,
    curveGoogleMaterial,
    curveFirefoxPhoton,
    curveAntD,
    curveMicrosoftFluent,
    curveByDesign,
};
const curveNormalizeMap = {
    curveAdobeSpectrum: 7,
    curveGoogleMaterial: 10,
    curveFirefoxPhoton: 6,
    curveAntD: 10,
    curveMicrosoftFluent: 9,
    curveByDesign: 11,
};
function getClosestIndex(list, value) {
    let minDelta = Math.abs(list[list.length - 1] - list[0]);
    let closestIndex = 0;
    for (let i = 0; i < list.length; i++) {
        const currentValue = list[i];
        const currentDelta = Math.abs(value - currentValue);
        if (currentDelta < minDelta) {
            minDelta = currentDelta;
            closestIndex = i;
        }
    }
    return closestIndex;
}
function getYSeries(curve, amount, primaryY) {
    const curveFunction = curveFunctionMap[curve];
    const xSeries = Array(amount)
        .fill(0)
        .map((_, i) => i + 1);
    const ySeries = xSeries.map((x) => curveFunction(x, amount));
    if (!primaryY) {
        return ySeries;
    }
    const primaryIndex = getClosestIndex(ySeries, primaryY);
    const rawPrimaryX = primaryIndex + 1;
    const rawPrimaryY = ySeries[primaryIndex];
    // console.log(rawPrimaryX, rawPrimaryY);
    {
        let minDelta = 21;
        let primaryX = rawPrimaryX;
        const step = 0.01;
        for (let offset = step; offset < 1; offset += step) {
            {
                const leftX = rawPrimaryX - offset;
                const leftY = curveFunction(leftX, amount);
                const leftDelta = Math.abs(primaryY - leftY);
                if (leftDelta < minDelta) {
                    minDelta = leftDelta;
                    primaryX = leftX;
                }
            }
            {
                const rightX = rawPrimaryX + offset;
                const rightY = curveFunction(rightX, amount);
                const rightDelta = Math.abs(primaryY - rightY);
                if (rightDelta < minDelta) {
                    minDelta = rightDelta;
                    primaryX = rightX;
                }
            }
        }
        ySeries[rawPrimaryX - 1] = primaryY;
        xSeries.forEach((x, i) => {
            if (x === 1 || x === amount || x === rawPrimaryX) {
                return;
            }
            const revisedX = x < rawPrimaryX
                ? (primaryX - 1) / ((rawPrimaryX - 1) / (x - 1)) + 1
                : x > rawPrimaryX
                    ? (amount - primaryX) / ((amount - rawPrimaryX) / (x - rawPrimaryX)) +
                        primaryX
                    : primaryX;
            const revisedY = curveFunction(revisedX, amount);
            ySeries[i] = revisedY;
        });
    }
    return ySeries;
}

const RGB_MIN = 0x000000;
const RGB_MAX = 0xffffff;
function getSrgbFromNumber(value) {
    const valueInt = Math.abs(Math.floor(value));
    const r = valueInt >> 16;
    const g = (valueInt ^ (r << 16)) >> 8;
    const b = valueInt ^ (r << 16) ^ (g << 8);
    return rgb(r, g, b);
}
function createColorTranslator(translator) {
    return (value) => translator(getSrgbFromNumber(value));
}
function standardToLinear(value) {
    const u = value / 255;
    if (u <= 0.03928) {
        return u / 12.92;
    }
    // return Math.pow(((u + 0.055) / 1.055), 2.4);
    return Math.pow(((u + 0.055) / 1.055), 2.4);
}
function relatedLuminance(sRGB) {
    const { r, g, b } = sRGB;
    const [rLinear, gLinear, bLinear] = [r, g, b].map((v) => standardToLinear(v));
    const luminance = 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
    return luminance;
}
function grayScale(sRGB) {
    const { r, g, b } = sRGB;
    return standardToLinear(0.2126 * r + 0.7152 * g + 0.0722 * b);
}
const CONTRAST_RATIO_MIN = 1;
const CONTRAST_RATIO_MAX = 21;
function contrastRatio(a, b) {
    const lA = grayScale(a);
    const lB = grayScale(b);
    const [l1, l2] = lA > lB ? [lA, lB] : [lB, lA];
    return (l1 + 0.05) / (l2 + 0.05);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function asyncQueue(tasks, parallel) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const finalParallel = Math.floor((parallel >= 1 && parallel) || 1);
            const finalTasks = [...tasks];
            const { length } = finalTasks;
            let index = 0;
            let finishedCount = 0;
            const aggregation = [];
            const run = () => __awaiter(this, void 0, void 0, function* () {
                const currentIndex = index;
                const currentTask = finalTasks[currentIndex];
                index++;
                return currentTask()
                    .then((result) => {
                    aggregation[currentIndex] = result;
                    finishedCount++;
                    if (finishedCount === length) {
                        resolve(aggregation);
                    }
                    if (index < length) {
                        return run();
                    }
                })
                    .catch(reject);
            });
            for (let i = 0; i < finalParallel && i < length; i++) {
                run();
            }
        });
    });
}

const translatorMap = {
    hsl: hsl,
    lab: lab,
    jab: jab,
    jch: jch,
    lch: hcl,
    hsv: hsv,
    hsluv: hsluv,
};
let baseInitialed = false;
const relatedLuminanceData = Array(RGB_MAX);
const dataMap = {};
function initBase() {
    if (baseInitialed) {
        return;
    }
    baseInitialed = true;
    for (let i = RGB_MIN; i < RGB_MAX; i++) {
        relatedLuminanceData[i] = relatedLuminance(getSrgbFromNumber(i));
    }
}
function initInternal(key) {
    Object.keys(dataMap).forEach((k) => delete dataMap[k]);
    const data = Array(RGB_MAX);
    const translator = translatorMap[key];
    for (let i = RGB_MIN; i <= RGB_MAX; i++) {
        data[i] = translator(getSrgbFromNumber(i));
    }
    dataMap[key] = data;
}
/**
 * Init the data map for incoming querying.
 * @param key The relatedLuminance or color spaces.
 */
function init(key) {
    return __awaiter(this, void 0, void 0, function* () {
        initBase();
        try {
            initInternal(key);
        }
        catch (error) {
            console.error(error);
            return "Failed";
        }
        return "Succeed";
    });
}
function queryClosest(key, params, luminance) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = dataMap[key];
        if (!data) {
            throw Error("Error: data no found, must invoke init() before query().");
        }
        const keyValuePairs = Object.entries(params);
        let minDeltaBasic = Math.sqrt(keyValuePairs.reduce((agg, [k, v]) => agg + Math.pow(v, 2), 0));
        let minDeltaWithLuminance = CONTRAST_RATIO_MAX;
        let minIndex = 0;
        for (let i = RGB_MIN; i < RGB_MAX; i++) {
            const color = data[i];
            let quadraticSum = 0;
            for (let j = 0; j < keyValuePairs.length; j++) {
                const [k, v] = keyValuePairs[j];
                quadraticSum += Math.pow((color[k] - v), 2);
            }
            const deltaBasic = Math.sqrt(quadraticSum);
            const deltaLuminance = Math.sqrt(Math.pow((relatedLuminanceData[i] - luminance), 2));
            const deltaWithLuminance = Math.sqrt(quadraticSum + Math.pow((relatedLuminanceData[i] - luminance), 2));
            if (deltaWithLuminance < minDeltaWithLuminance
            // && deltaBasic <= minDeltaBasic
            ) {
                minDeltaBasic = deltaBasic;
                minDeltaWithLuminance = deltaWithLuminance;
                minIndex = i;
            }
        }
        return `#${minIndex.toString(16).padStart(6, "0")}`;
    });
}
function querySeries(key, params, luminances) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.all(luminances.map((l) => queryClosest(key, params, l)));
    });
}
const toolkitMap = {
    RGB: {
        name: "rgb",
        translator: rgb,
        interpolator: interpolateRgb,
    },
    HSL: {
        name: "hsl",
        translator: hsl,
        interpolator: interpolateHsl,
    },
    HSV: {
        name: "hsv",
        translator: hsv,
        interpolator: interpolateHsv,
    },
    Lab: {
        name: "lab",
        translator: lab,
        interpolator: interpolateLab,
    },
    CAM02: {
        name: "jab",
        translator: jab,
        interpolator: interpolateJab,
    },
};
function query(options, postProcess) {
    const { space, backgroundColor, seedColors, contrastRatioList } = options;
    const result = {};
    Object.entries(seedColors).forEach(([name, hex]) => {
        const sequence = querySequence(space, backgroundColor, [hex], contrastRatioList);
        result[name] = sequence;
    });
    return (postProcess && postProcess(result)) || result;
}
function getRelatedLuminanceByContrastRatio(backgroundRelatedLuminance, contrastRatio) {
    const result = backgroundRelatedLuminance < 0.5
        ? contrastRatio * (backgroundRelatedLuminance + 0.05) - 0.05
        : (backgroundRelatedLuminance + 0.05) / contrastRatio - 0.05;
    return result < 0 ? 0 : result > 1 ? 1 : result;
}
const fragments = 30000;
function querySequence(space, backgroundColor, keyColors, contrastRatioList) {
    const toolkit = toolkitMap[space];
    const { translator, interpolator } = toolkit;
    const backgroundRgb = rgb(backgroundColor);
    const dark = relatedLuminance(backgroundRgb) < 0.5;
    const finalKeyColors = [
        ...[...keyColors].sort((a, b) => {
            const [A, B] = [a, b].map((v) => contrastRatio(rgb(v), backgroundRgb));
            return A - B;
        }),
    ];
    {
        // end color
        const endColor = dark ? "#ffffff" : "#000000";
        finalKeyColors.push(endColor);
        // start color
        const interpolate = interpolator(translator(rgb(dark ? "#000000" : "#ffffff")), finalKeyColors[0]);
        const sequenceHex = [];
        const sequenceRatio = [];
        Array(fragments)
            .fill(0)
            .forEach((_, progress) => {
            const color = interpolate((progress + 1) / fragments);
            const rgb$1 = rgb(color);
            const ratio = contrastRatio(rgb(color), backgroundRgb);
            sequenceHex.push(rgb$1.formatHex());
            sequenceRatio.push(ratio);
        });
        sequenceHex.reverse();
        sequenceRatio.reverse();
        const closestIndex = getClosestIndex(sequenceRatio, 1);
        const startColor = sequenceHex[closestIndex];
        finalKeyColors.unshift(startColor);
    }
    const { length } = finalKeyColors;
    const last = length - 1;
    const keyRgbs = finalKeyColors.map((hex) => rgb(hex));
    const keyRatios = keyRgbs.map((rgb) => contrastRatio(backgroundRgb, rgb));
    const keyValues = keyRgbs.map((rgb) => translator(rgb));
    const interpolates = keyValues.map((value, i) => {
        if (i === 0) {
            return (t) => finalKeyColors[0];
        }
        return interpolator(keyValues[i - 1], value);
    });
    const sequenceHex = [];
    const sequenceRatio = [];
    interpolates.forEach((interpolate, i) => {
        if (i === 0) {
            return;
        }
        Array(fragments)
            .fill(0)
            .forEach((_, progress) => {
            const color = interpolate((progress + 1) / fragments);
            const rgb$1 = rgb(color);
            const ratio = contrastRatio(rgb(color), backgroundRgb);
            sequenceHex.push(rgb$1.formatHex());
            sequenceRatio.push(ratio);
        });
    });
    return contrastRatioList.map((c) => {
        {
            const keyIndex = keyRatios.indexOf(c);
            if (keyIndex > 0) {
                return [finalKeyColors[keyIndex], c];
            }
        }
        {
            if (c > keyRatios[last]) {
                return [finalKeyColors[last], keyRatios[last]];
            }
        }
        {
            const closestIndex = getClosestIndex(sequenceRatio, c);
            const hex = sequenceHex[closestIndex];
            const ratio = sequenceRatio[closestIndex];
            return [hex, ratio];
        }
    });
}

const MESSAGE_TYPE_HANDLER_MAP = {
    init,
};

export { CONTRAST_RATIO_MAX, CONTRAST_RATIO_MIN, MESSAGE_TYPE_HANDLER_MAP, RGB_MAX, RGB_MIN, asyncQueue, contrastRatio, createColorTranslator, curveAdobeSpectrum, curveAntD, curveByDesign, curveFirefoxPhoton, curveFunctionMap, curveGoogleMaterial, curveMicrosoftFluent, curveNormalizeMap, getClosestIndex, getRelatedLuminanceByContrastRatio, getSrgbFromNumber, getYSeries, grayScale, init, query, queryClosest, querySequence, querySeries, relatedLuminance, standardToLinear, toolkitMap, translatorMap };
//# sourceMappingURL=index.dev.js.map
