import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/about"
import { useState } from "react"
import Alert from "./components/Alert"
import {
	createBrowserRouter,
	BrowserRouter,
	RouterProvider,
} from "react-router-dom"

let name = "Krutarth"
let darkbg = "#32393f"

function App() {
	const [mode, setMode] = useState("light") //whether dark mode is enabled or not.
	const [alert, setAlert] = useState(null) //to print alertbox.

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		})
		setTimeout(() => {
			setAlert(null)
		}, 1500)
	}

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark")
			document.body.style.backgroundColor = darkbg
			showAlert("Dark mode has been enabled!!", "success")
			// document.title = "Textutils - Dark Mode"
			// setInterval(() => {
			// 	document.title = "Textutils is amazing"
			// }, 2000)
		} else {
			setMode("light")
			document.body.style.backgroundColor = "white"
			showAlert("Light mode has been enabled!!", "success")
			// document.title = "Textutils - Light Mode"
		}
	}

	const colorMode = (color, val) => {
		console.log(val + "color theme called")
		setMode(color)
		showAlert(val + " mode has been enabled!!", "success")
		document.body.style.backgroundColor = color
	}

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Navbar
						title="Textutils"
						mode={mode}
						colorMode={colorMode}
						toggleMode={toggleMode}
					/>
					<Alert alert={alert} />
					<div className="container my-3">
						<TextForm
							showAlert={showAlert}
							heading="Try Textutils - Word counter , Character counter , Remove extra spaces."
							mode={mode}
						/>
					</div>
				</>
			),
		},
		{
			path: "/about",
			element: (
				<>
					<Navbar
						title="Textutils"
						mode={mode}
						colorMode={colorMode}
						toggleMode={toggleMode}
					/>
					<Alert alert={alert} />
					<About mode={mode} />
				</>
			),
		},
	])
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	)
	// <>
	// 	<Navbar
	// 		title="Textutils"
	// 		mode={mode}
	// 		colorMode={colorMode}
	// 		toggleMode={toggleMode}
	// 	/>
	// 	<RouterProvider router={router}>
	// 	{/* <Alert alert={alert} />
	// 	<div className="container my-3">
	// 		<About />
	// 		<TextForm
	// 			showAlert={showAlert}
	// 			heading="Enter the text below to analyze."
	// 			mode={mode}
	// 		/>
	// 	</div> */}
	// </>
	// </>
}
export default App
