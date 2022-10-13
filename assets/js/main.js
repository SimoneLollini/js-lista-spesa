const list = [
    'pane',
    'pasta',
    'riso',
    'broccoli',
    'spinaci',
]

let i = 0;
while (i < list.length) {
    // const liElement = document.createElement('li')
    const itemElement = list[i]
    console.log(itemElement);
    // document.querySelector('ul').insertAdjacentHTML('beforeend', itemElement)

    const ul = document.querySelector('ul')
    const liElement = document.createElement("li")
    ul.append(liElement)
    liElement.append(itemElement)
    i++
}

