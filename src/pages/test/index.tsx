import {Button} from "antd";


export const Test = () => {
	function pop() {
		alert('Hello, Vite + React + ant-design!')
	}

	return (
		<>
			<div className="App">
				<Button type="primary" onClick={pop}>Button</Button>
			</div>
		</>
	)
}

