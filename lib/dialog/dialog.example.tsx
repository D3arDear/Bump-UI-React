import React, { useState } from "react"
import Dialog, { alert, confirm } from "./dialog"

const DialogExample = () => {
	const [x, setX] = useState(false)
	const [y, setY] = useState(false)
	return (
		<div>
			<div>
				<h2>Dialog close while click mask</h2>
				<p>closeOnClickMask = true</p>
				<button onClick={() => setX(!x)}>click</button>
				<Dialog
					visible={x}
					buttons={[<button>1</button>, <button>2</button>]}
					onClose={() => {
						setX(false)
					}}
					closeOnClickMask={true}
				>
					<strong>hi</strong>
				</Dialog>
			</div>
			<div>
				<h2>Dialog wont close while click mask</h2>
				<p>closeOnClickMask = false</p>
				<button onClick={() => setY(!y)}>click</button>
				<Dialog
					visible={y}
					buttons={[<button>1</button>, <button>2</button>]}
					onClose={() => {
						setY(false)
					}}
				>
					<strong>hi</strong>
				</Dialog>
			</div>
			<div>
				<h2>Useing Dialog pass an alert directive</h2>
				<p> And confirm mode </p>
				<button onClick={() => alert("1")}>alert</button>
				<button
					onClick={() =>
						confirm(
							"1",
							() => {
								console.log("你点击了yes")
							},
							() => {
								console.log("你点击了no")
							},
						)
					}
				>
					confirm
				</button>
			</div>
		</div>
	)
}

export default DialogExample
