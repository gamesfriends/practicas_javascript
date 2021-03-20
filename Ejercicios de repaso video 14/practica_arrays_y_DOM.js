const weekDays = ['lunes', 'martes', 'miercoles'];

const days = document.getElementById('daysSelect');
const list = document.getElementById('list');
const fragment = document.createDocumentFragment();
const fragment2 = document.createDocumentFragment();

for(day of weekDays){
    const newoption = document.createElement('OPTION');
    newoption.setAttribute('value', day);
    newoption.textContent = day;
    fragment.appendChild(newoption);
    
    const newli = document.createElement('LI');
    newli.textContent = day;
    fragment2.appendChild(newli);
    }

days.appendChild(fragment);
list.appendChild(fragment2);




