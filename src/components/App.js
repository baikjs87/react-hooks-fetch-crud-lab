import React, { useEffect, useState } from "react"
import AdminNavBar from "./AdminNavBar"
import QuestionForm from "./QuestionForm"
import QuestionList from "./QuestionList"

function App() {
	const [page, setPage] = useState("List")
	const [questions, setQuestions] = useState([])
	console.log(questions)

	function handleUpdateQuestion(updatedQuestion) {
		const updatedQs = questions.map((q) => {
			if (q.id === updatedQuestion.id) {
				return updatedQuestion
			} else {
				return q
			}
		})
		setQuestions(updatedQs)
	}

	function onDeleteQuestion(deletedQuestion) {
		const updatedQuestions = questions.filter(
			(q) => q.id !== deletedQuestion.id
		)
		setQuestions(updatedQuestions)
	}

	useEffect(() => {
		fetch("http://localhost:4000/questions")
			.then((r) => r.json())
			.then((q) => setQuestions(q))
	}, [])

	function addNewQuestion(newQuestion) {
		setQuestions([...questions, newQuestion])
	}

	return (
		<main>
			<AdminNavBar onChangePage={setPage} />
			{page === "Form" ? (
				<QuestionForm addNewQuestion={addNewQuestion} />
			) : (
				questions.map((question) => (
					<QuestionList
						questions={question}
						onDeleteQuestion={onDeleteQuestion}
						handleUpdateQuestion={handleUpdateQuestion}
					/>
				))
			)}
		</main>
	)
}

export default App
