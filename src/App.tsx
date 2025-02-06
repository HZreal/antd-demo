import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Test} from "./pages/test";
import {MyTable} from "./pages/tables/myTable.tsx";
import {Button, Tabs} from "antd";

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Tabs defaultActiveKey="3">
				<Tabs.TabPane tab="Dashboard" key="1">
					<div>
						<a href="https://vite.dev" target="_blank">
							<img src={viteLogo} className="logo" alt="Vite logo"/>
						</a>
						<a href="https://react.dev" target="_blank">
							<img src={reactLogo} className="logo react" alt="React logo"/>
						</a>
					</div>
					<h1>Vite + React</h1>
					<div className="card">
						<p>
							Edit <code>src/App.tsx</code> and save to test HMR
						</p>
					</div>
					<p className="read-the-docs">
						Click on the Vite and React logos to learn more
					</p>
				</Tabs.TabPane>

				<Tabs.TabPane tab="Button" key="2">
					<Button type="primary" onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
				</Tabs.TabPane>

				<Tabs.TabPane tab="Mytable" key="3">
					<MyTable></MyTable>
				</Tabs.TabPane>

				<Tabs.TabPane tab="Test" key="4">
					<Test/>
				</Tabs.TabPane>

			</Tabs>
		</>
	)
}

export default App
