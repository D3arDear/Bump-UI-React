import classes from "../classes";
import { scopeClassMaker } from "../classes";
describe("classes", () => {
	it("接受一个 className", () => {
		const result = classes("a");
		expect(result).toEqual("a");
	});
	it("接受两个 className", () => {
		const result = classes("a", "b");
		expect(result).toEqual("a b");
	});
	it("接受一个 undefined 一个 className", () => {
		const result = classes("a", undefined);
		expect(result).toEqual("a");
	});
	it("接受很多个奇奇怪怪的值", () => {
		const result = classes("a", undefined, "中文", false, null);
		expect(result).toEqual("a 中文");
	});
	it("什么都不给 (0个参数)", () => {
		const result = classes();
		expect(result).toEqual("");
	});
});

describe("scopeClassMaker", () => {
	it("接受字符串和对象", () => {
		const sc = scopeClassMaker("bui-layout");
		expect(sc("")).toEqual("bui-layout");
		expect(sc("active")).toEqual("bui-layout-active");
		expect(sc({ hasAside: true, active: false })).toEqual("bui-layout-hasAside");
		expect(sc({ hasAside: true, active: true })).toEqual("bui-layout-hasAside bui-layout-active");
		expect(sc({ hasAside: true, active: true }, { extra: "red" })).toEqual("bui-layout-hasAside bui-layout-active red");
	});
});
