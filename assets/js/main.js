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
    //const item = document.querySelector("ul").appendChild(itemElement)
    const liElement = document.createElement("li");
    const item = document.createTextNode(itemElement);
    // liElement.appendChild(item);
    const ulElement = document.querySelector('ul');
    // list.insertBefore(liElement, ulElement.children[i]);
    document.querySelector('ul').innerHTML = `<li>${itemElement}</li>`
    console.log(itemElement);
    //.appendChild(itemElement)

    i++
}