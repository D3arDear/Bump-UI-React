import renderer from "react-test-renderer"
import { mount } from "enzyme"
import React from "react"
import Icon from "../icon"

describe("icon tests", () => {
	it("render successfully", () => {
		const json = renderer.create(<Icon name="alipay" />).toJSON()
		expect(json).toMatchSnapshot()
	})
	it("onClick", () => {
		const fn = jest.fn()
		const component = mount(<Icon name="alipay" onClick={fn} />)
		component.find("svg").simulate("click")
		expect(fn).toBeCalled()
	})
})
