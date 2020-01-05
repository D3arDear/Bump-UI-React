const identify = (value: string) => value;
function classes(...names: (string | undefined)[]) {
	return names.filter(identify).join(" ");
}
export default classes;

interface Options {
	extra: string | undefined;
}
interface ClassTriggers {
	[Key: string]: boolean;
}
function scopeClassMaker(prefix: string) {
	return function(name?: string | ClassTriggers, options?: Options) {
		let name2;
		let result = [prefix, name].filter(Boolean).join("__");
		if (typeof name === "string" || name === undefined) {
			name2 = name;
		} else {
			name2 = Object.entries(name)
				.filter((kv) => kv[1])
				.map((kv) => kv[0]);
			console.log("name2 ", name2);
			result = name2
				.map((n) => {
					return [prefix, n].filter(Boolean).join("--");
				})
				.join(" ");
			console.log("result ", result);
		}
		if (options && options.extra) {
			return [result, options && options.extra].filter(Boolean).join(" ");
		} else {
			return result;
		}
	};
}

export { scopeClassMaker };
