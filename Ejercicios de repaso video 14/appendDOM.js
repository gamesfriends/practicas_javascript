const list = document.getElementById('list');
const selec = document.getElementById('daysSelect');



weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];


const fragment = document.createDocumentFragment();

/*
for(const item of weekDays)  {
    let newli = document.createElement('LI');
    newli.textContent = (item);
    fragment.appendChild(newli);
}
list.appendChild(fragment);
console.log(fragment);

*/

for(const item of weekDays)  {
    let newsele = document.createElement('OPTION');
    newsele.textContent = (item);
    newsele.setAttribute('value', item);
    fragment.appendChild(newsele);
}
selec.appendChild(fragment);
console.log(fragment);



