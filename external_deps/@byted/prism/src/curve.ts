function normalize(X: number, curveAmount: number, amount: number): number {
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
export function curveAdobeSpectrum(X: number, amount: number): number {
  X = normalize(X, 7, amount);

  let a, b, c, d, e, f;

  a = 2.80556391490106;

  b = -1.01491279589738;

  c = 0.911218467059328;

  d = -0.260999395859336;

  e = 0.0352810380607801;

  f = -0.00172187283785092;

  const Y = a + b * X + c * X ** 2 + d * X ** 3 + e * X ** 4 + f * X ** 5;

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
export function curveGoogleMaterial(X: number, amount: number): number {
  X = normalize(X, 10, amount);

  let a, b, c, d, e, f;

  a = 1.17160555554771;

  b = 0.136104149565393;

  c = -0.205232536343237;

  d = 0.162261403029564;

  e = -0.0232492322213921;

  f = 0.000989281211891432;

  const Y = a + b * X + c * X ** 2 + d * X ** 3 + e * X ** 4 + f * X ** 5;

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
export function curveFirefoxPhoton(X: number, amount: number): number {
  X = normalize(X, 6, amount);

  let a, b, c, d, e, f;

  a = 1.42077117276554;

  b = 1.97245501432833;

  c = -0.98082272198693;

  d = 0.281191542127172;

  e = 0.00366469599865697;

  f = -0.00322141824437273;

  const Y = a + b * X + c * X ** 2 + d * X ** 3 + e * X ** 4 + f * X ** 5;

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
export function curveAntD(X: number, amount: number): number {
  X = normalize(X, 10, amount);

  let a, b, c, d, e, f;

  a = 1.46564604642846;

  b = -0.928203887106309;

  c = 0.741369599412513;

  d = -0.205177932922759;

  e = 0.0254591071464198;

  f = -0.00101578314785047;

  const Y = a + b * X + c * X ** 2 + d * X ** 3 + e * X ** 4 + f * X ** 5;

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
export function curveMicrosoftFluent(X: number, amount: number): number {
  X = normalize(X, 9, amount);

  let a, b, c, d, e, f;

  a = 1.43066442413396;

  b = -0.183303227490002;

  c = -0.297894090795745;

  d = 0.20894616649874;

  e = -0.0339616146116733;

  f = 0.00177454663520377;

  const Y = a + b * X + c * X ** 2 + d * X ** 3 + e * X ** 4 + f * X ** 5;

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
export function curveByDesign(X: number, amount: number): number {
  X = normalize(X, 11, amount);

  let a, b, c, d, e, f;

  a = 1.4566227721917;

  b = -0.750523514967315;

  c = 0.525147359851746;

  d = -0.112197666983703;

  e = 0.0110033631737628;

  f = -0.000329609883693566;

  const Y = a + b * X + c * X ** 2 + d * X ** 3 + e * X ** 4 + f * X ** 5;

  return Y;
}

export const curveFunctionMap: Record<
  string,
  (x: number, amount: number) => number
> = {
  curveAdobeSpectrum,
  curveGoogleMaterial,
  curveFirefoxPhoton,
  curveAntD,
  curveMicrosoftFluent,
  curveByDesign,
};
export const curveNormalizeMap: Record<string, number> = {
  curveAdobeSpectrum: 7,
  curveGoogleMaterial: 10,
  curveFirefoxPhoton: 6,
  curveAntD: 10,
  curveMicrosoftFluent: 9,
  curveByDesign: 11,
};

export function getClosestIndex(list: number[], value: number): number {
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

export function getYSeries(
  curve: string,
  amount: number,
  primaryY?: number
): number[] {
  const curveFunction = curveFunctionMap[curve];
  const xSeries = Array(amount)
    .fill(0)
    .map((_, i) => i + 1) as readonly number[];
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
      const revisedX =
        x < rawPrimaryX
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
