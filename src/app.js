const lista = document.querySelector('#lista')
const fruitInput = document.querySelector('#fruit')
const addButton = document.querySelector('#addButton')

const tomb = ['alma', 'körte', 'barack']

tomb.forEach( item => {
    var li = document.createElement('li')
    li.textContent = item
    lista.append(li)
})

function makeLiItem(text) {
    var li = document.createElement('li')
    li.textContent = text
    return li
}

addButton.addEventListener('click', () => {
    console.log('Hozzáadás...')
    const newFruit = fruitInput.value
    tomb.push(newFruit)
    lista.append(makeLiItem(newFruit))
    fruitInput.value = ''
})
