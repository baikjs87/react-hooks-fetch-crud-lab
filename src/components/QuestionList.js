import React, { useState } from "react"
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, onDeleteQuestion, handleUpdateQuestion }) {
	return (
		<section>
			<h1>Quiz Questions</h1>
			<ul>
				<QuestionItem
					question={questions}
					key={questions.id}
					onDeleteQuestion={onDeleteQuestion}
					updateQuestion={handleUpdateQuestion}
				/>
			</ul>
		</section>
	)
}

export default QuestionList
