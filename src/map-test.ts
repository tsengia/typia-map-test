import typia from 'typia';

interface MyInterface {
    m: Map<string,string>
}

let a: MyInterface = { m: new Map<string, string>() };
a.m.set("test","abcdef");

let json_string = typia.json.stringify<MyInterface>(a);
console.log("JSON string: " + json_string);
let parsed: MyInterface = typia.json.assertParse<MyInterface>(json_string);
console.log("Parse worked!");
console.log(parsed.m.size);