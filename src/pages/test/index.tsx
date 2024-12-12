import {Button} from "antd";


export const Test = () => {
	return (
		<>
			<div className="App">
				<Button type="primary" onClick={pop}>Button</Button>
			</div>
		</>
	)
}

function pop() {
	alert('Hello, Vite + React + ant-design!')
}
