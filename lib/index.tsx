import ReactDOM from "react-dom"
import React from "react"
import Icon from "./icon/icon"

// const fn: React.MouseEventHandler<Element> = (e) => {
// 	console.log(e.target)
// }

ReactDOM.render(
	<div>
		<Icon name="qq" onMouseEnter={() => console.log("enter")} onMouseLeave={() => console.log("leave")} />
	</div>,
	document.querySelector("#root"),
)
