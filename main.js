let questions = document.querySelectorAll('.q-a');

questions.forEach(function (question) {
    question.addEventListener('click', function () {
        this.classList.toggle('active');

        if (question.classList.contains('active')) {
            questions.forEach(function (question) {
                question.classList.remove('active')
            });
            question.classList.toggle('active')
        }
    });
});