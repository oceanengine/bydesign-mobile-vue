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
export declare function curveAdobeSpectrum(X: number, amount: number): number;
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
export declare function curveGoogleMaterial(X: number, amount: number): number;
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
export declare function curveFirefoxPhoton(X: number, amount: number): number;
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
export declare function curveAntD(X: number, amount: number): number;
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
export declare function curveMicrosoftFluent(X: number, amount: number): number;
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
export declare function curveByDesign(X: number, amount: number): number;
export declare const curveFunctionMap: Record<string, (x: number, amount: number) => number>;
export declare const curveNormalizeMap: Record<string, number>;
export declare function getClosestIndex(list: number[], value: number): number;
export declare function getYSeries(curve: string, amount: number, primaryY?: number): number[];
//# sourceMappingURL=curve.d.ts.map