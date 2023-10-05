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
let parsed: MyInterface = typia.assertParse<MyInterface>(a);
console.log("Parse worked!");
console.log(parsed.m.size);
