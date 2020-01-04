function scopeClassMaker(prefix: string) {
	return function x(name?: string) {
		return [prefix, name].filter(Boolean).join("__")
	}
}

export { scopeClassMaker }
