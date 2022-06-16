import React from "react"

function QuestionItem({ question, onDeleteQuestion, updateQuestion }) {
	const { id, prompt, answers, correctIndex } = question

	function handleDelete() {
		fetch(`http://localhost:4000/questions/${question.id}`, {
			method: "DELETE",
		})
			.then((r) => r.json())
			.then(() => onDeleteQuestion(question))
	}

	function handleChange(e) {
		console.log(e.target.value)
		fetch(`http://localhost:4000/questions/${question.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				correctIndex: e.target.value,
			}),
		})
			.then((r) => r.json())
			.then((q) => {
				console.log(q)
				updateQuestion(q)
			})
	}

	const options = answers.map((answer, index) => (
		<option key={index} value={index}>
			{answer}
		</option>
	))

	return (
		<li>
			<h4>Question {id}</h4>
			<h5>Prompt: {prompt}</h5>
			<label>
				Correct Answer:
				<select defaultValue={correctIndex} onChange={handleChange}>
					{options}
				</select>
			</label>
			<button onClick={handleDelete}>Delete Question</button>
		</li>
	)
}

export default QuestionItem
