import typia from 'typia';
interface MyInterface {
    m: Map<string, string>;
}
let a: MyInterface = { m: new Map<string, string>() };
a.m.set("test", "abcdef");
let json_string = ((input: MyInterface): string => {
    const $so0 = (input: any): any => "{\"m\":{}}";
    return $so0(input);
})(a);
console.log("JSON string: " + json_string);
let parsed: MyInterface = ((input: string): typia.Primitive<MyInterface> => { const assert = (input: any): MyInterface => {
    const __is = (input: any): input is MyInterface => {
        const $io0 = (input: any): boolean => input.m instanceof Map && (() => [...input.m].every((elem: any) => Array.isArray(elem) && (elem.length === 2 && "string" === typeof elem[0] && "string" === typeof elem[1])))();
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is MyInterface => {
            const $guard = (typia.json.assertParse as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => (input.m instanceof Map || $guard(_exceptionable, {
                path: _path + ".m",
                expected: "Map<string, string>",
                value: input.m
            })) && (() => [...input.m].every((elem: any, _index1: number) => (Array.isArray(elem) || $guard(_exceptionable, {
                path: _path + ".m[" + _index1 + "]",
                expected: "[string, string]",
                value: elem
            })) && ((elem.length === 2 || $guard(_exceptionable, {
                path: _path + ".m[" + _index1 + "]",
                expected: "[string, string]",
                value: elem
            })) && ("string" === typeof elem[0] || $guard(_exceptionable, {
                path: _path + ".m[" + _index1 + "][0]",
                expected: "string",
                value: elem[0]
            })) && ("string" === typeof elem[1] || $guard(_exceptionable, {
                path: _path + ".m[" + _index1 + "][1]",
                expected: "string",
                value: elem[1]
            }))) || $guard(_exceptionable, {
                path: _path + ".m[" + _index1 + "]",
                expected: "[string, string]",
                value: elem
            })))() || $guard(_exceptionable, {
                path: _path + ".m",
                expected: "Map<string, string>",
                value: input.m
            });
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "MyInterface",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "MyInterface",
                value: input
            });
        })(input, "$input", true);
    return input;
}; input = JSON.parse(input); return assert(input) as any; })(json_string);
console.log("Parse worked!");
console.log(parsed.m.size);
