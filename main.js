document.addEventListener("DOMContentLoaded", () => {
    const todos = []
    const $form = document.querySelector("form")
    const $list = document.querySelector("ul")

    const validate = (value) => {
        if (!value || 3 < value.length > 51) {
            alert("Invalid input.")
            return false
        }
        return true
    }


    const renderTodos = () => {
        $list.innerHTML = ""
        for(let i = 0; i < todos.length; i++){
            const item = todos[i]
            const $li= document.createElement('li')
            $li.innerText = item.desc
            $list.appendChild($li)
        }
    }


    $form.addEventListener("submit", (e) => {
        e.preventDefault()
        const $input = $form.querySelector("input")
        const value = $input.value
        if(!validate(value)) return false
        todos.push({desc: value})
        renderTodos()
        $input.value = ""
        return false
    })
});
