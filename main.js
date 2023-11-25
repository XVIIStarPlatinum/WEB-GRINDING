document.addEventListener("DOMContentLoaded", () => {
    const todos = []
    // [{desc: "learn js", "timestamp": new Date(), done: false}]

    const $form = document.querySelector("form")
    const $list = document.querySelector("ul")

    const validate = () => {

    }


    const renderTodos = () => {

    }


    $form.addEventListener("submit", (e) => {
        e.preventDefault()
        // validate
        // push new item into toos array
        // re render arrays
        // experiment with string interpolation to set the new content of the list
        // clear the form
        return false
    })



})