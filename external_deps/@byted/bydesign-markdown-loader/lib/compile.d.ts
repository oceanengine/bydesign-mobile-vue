interface CompileOptions {
    path?: string;
}
/**
 * 编译 function
 */
declare function compile(mdx: string, options?: CompileOptions): string;
export default compile;
