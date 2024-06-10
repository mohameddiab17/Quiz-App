
export default class Quiz {
constructor(difficulty , numberOfQuestions , category){
    this.difficulty = difficulty,
    this.numberOfQuestions = numberOfQuestions,
    this.category = category,
    this.score = 0
}

async getQuestions(){
    const response = await fetch(`https://opentdb.com/api.php?amount=${this.numberOfQuestions}&category=${this.category}&difficulty=${this.difficulty}`);
    const data = await response.json();
    return data.results;
}

    endQuiz(){
        return `
            <div
            class="question shadow-lg col-lg-6 offset-lg-3 p-4 rounded-3 d-flex flex-column justify-content-center align-items-center"
            >
                <h2 class="mb-2">
                ${
                this.score == this.numberOfQuestions
                ? "Congratulatios 🎉"
                : `Your score is <span class="text-success fw-bold fs-2">${this.score}</span>`
                }
                </h2>
                <button class="again btn btn-success rounded-pill fw-bold fs-5">
                    <i class="bi bi-arrow-repeat"></i>
                    Try Again
                </button>
            </div>
    `
}

}

