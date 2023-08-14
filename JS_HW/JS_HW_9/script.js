const usersURL = 'https://jsonplaceholder.typicode.com/users'
const div = document.querySelector('.users');


const getData = async (url) => { 
    const res = await fetch(url); 
    const data = await res.json()
    return data
}

try { 
    const users = await getData(usersURL)
    

    users.forEach((el, idx) => {
        div.insertAdjacentHTML(
            'beforeend', 
            `<p id = ${idx}>${el.id}.  ${el.name} : ${el.username}</p>
            <button class="btn">Delete<button>`
            )
            localStorage.setItem(`${idx}`, JSON.stringify(el.name), JSON.stringify(el.username))
    });

    const btn = document.querySelectorAll('button.btn')
    // console.log(btn);
    btn.forEach((el, idx) => {
        el.addEventListener('click', () => {
            const deleteP = document.getElementById(idx)
            deleteP.innerHTML = ' '
            localStorage.removeItem(idx)
        })
    })
} catch (error) {
    console.error('Увы, снова что-то сломалось');
}
