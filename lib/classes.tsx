interface Options {
	extra: string | undefined;
}
function scopeClassMaker(prefix: string) {
	return function x(name?: string, options?: Options) {
		const result = [prefix, name].filter(Boolean).join("__");
		if (options && options.extra) {
			return [result, options && options.extra].filter(Boolean).join(" ");
		} else {
			return result;
		}
	};
}

export { scopeClassMaker };
