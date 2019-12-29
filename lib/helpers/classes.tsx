const identify = (value: string) => value
function classes(...names: (string | undefined)[]) {
	return names.filter(identify).join(" ")
}
export default classes
