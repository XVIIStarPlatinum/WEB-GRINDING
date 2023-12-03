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
        console.log(todos)
        let listHTML = ""
        for(let i = 0; i < todos.length; i++){
            const item = todos[i]
            listHTML = listHTML + (`
            <li id="${item.id}" style="text-decoration: ${item.done ? 'line-through' : 'none'};">
                ${item.desc} <br>${item.date.toLocaleString('en-US', {
                    hour12: false
                })}
            </li>
            `)
        }
        $list.innerHTML = listHTML
        statusUpdateHandler()
    }

    const statusUpdateHandler = () => {
        $list.querySelectorAll("li").forEach(($li) => {
            $li.addEventListener("click", (e) => {
                const id = $li.id
                todos.forEach((item) => {
                    if(id === item.id){
                        item.done = !item.done
                        renderTodos()
                    }
                })
            })
        })
    }


    $form.addEventListener("submit", (e) => {
        e.preventDefault()
        const $input = $form.querySelector("input")
        const value = $input.value
        if(!validate(value)) return false
        const date = new Date()
        const id = `${date.getTime()}-${Math.random()}`
        todos.push({desc: value, date: date, done: false, id: id})
        renderTodos()
        $input.value = ""
        return false
    })
});
