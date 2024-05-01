import React, { useState } from "react"

//use state is a hook from react

let darkbg = "#32393f"
export default function TextForm(props) {
	const handleUpClick = () => {
		let newText = text.toUpperCase()
		setText(newText)
		props.showAlert("Converted to upper case", "success")
	}
	const handleLowClick = () => {
		let newText = text.toLowerCase()
		setText(newText)
		console.log("text area value changed to lower case")
		props.showAlert("Converted to lower case", "success")
	}
	const handleClearClick = () => {
		setText("")
		console.log("text area has been cleared off!!")
		props.showAlert("Text Cleared!!!", "success")
	}
	const handleOnChange = (event) => {
		console.log("on change was called!!")
		setText(event.target.value) //to change the textarea value after updating using settext.
	}

	const handleCopy = () => {
		console.log("on copy was called!!")
		var text = document.getElementById("myBox")
		text.select()
		navigator.clipboard.writeText(text.value)
		props.showAlert("Text copied succesfully!!!", "success")
	}

	const handleExtraSpaces = () => {
		console.log("handleExtraSpaces was called!!")
		let newText = text.split(/[ ]+/)
		setText(newText.join(" "))
		props.showAlert("Removed extra spaces succesfully", "success")
	}

	const [text, setText] = useState("")
	// text = "kishan" //wrong way
	// setText("New text") //right way
	return (
		<>
			<div
				className="container "
				style={{
					color: props.mode === "dark" ? "white" : "black",
				}}
			>
				<h1 className="mb-4">{props.heading}</h1>
				<div className="mb-3">
					<textarea
						style={{
							backgroundColor: props.mode === "dark" ? "#49535b" : "white",
							color: props.mode === "dark" ? "white" : darkbg,
						}}
						onChange={handleOnChange}
						value={text}
						className="form-control"
						id="myBox"
						rows="8"
					></textarea>
				</div>
				<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
					Convert to upper Case
				</button>
				<button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
					Convert to lower Case
				</button>
				<button
					type="button"
					className="btn btn-outline-danger mx-2 my-2"
					onClick={handleClearClick}
				>
					Clear text
				</button>
				<button
					type="button"
					className="btn btn-outline-primary mx-2 my-2"
					onClick={handleCopy}
				>
					Copy text
				</button>
				<button
					type="button"
					className="btn btn-outline-primary mx-2 my-2"
					onClick={handleExtraSpaces}
				>
					Remove Extra Spaces
				</button>
			</div>
			<div
				className="container my-3"
				style={{
					color: props.mode === "dark" ? "white" : "black",
				}}
			>
				<h3>Your text summary</h3>
				<p>
					<b>
						{text.length > 0
							? text
									.replace(/[^\w\s]|_/g, "")
									.trim()
									.split(/\s+/).length
							: 0}
					</b>{" "}
					words & <b>{text.replace(/\s/g, "").length}</b> Characters.
				</p>
				<p>
					Total <b>{text.split(".").length - 1}</b> sentences in your text.
				</p>
				<p>
					you will need{" "}
					<b>
						{text.length > 0 ? (0.192 * text.split(" ").length).toFixed(3) : 0}
					</b>{" "}
					seconds to read the phrase.
				</p>
				<h3>Preview</h3>
				<p>{text.length > 0 ? text : "Enter Something to preview here."}</p>
			</div>
		</>
	)
}
