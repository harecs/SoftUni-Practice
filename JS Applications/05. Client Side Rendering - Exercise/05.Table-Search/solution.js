import { html, render } from '../node_modules/lit-html/lit-html.js';

render(template(await getTableData()), document.querySelector('.container tbody'));

const searchFieldElement = document.querySelector('#searchField');
document.querySelector('#searchBtn').addEventListener('click', onSearch);

async function getTableData() {
   try {
      const url = 'http://localhost:3030/jsonstore/advanced/table';
      const options = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' }
      };

      const response = await fetch(url, options)
      
      if (!response.ok || response.status == 204) {
         const error = await response.json();
         throw error;
      }

      return response.json();
   } catch (err) {
      console.error(err);
   }
}

function template(data) {
   return Object.values(data)
      .map(x => html`<tr>
                        <td>${x.firstName + ' ' + x.lastName}</td>
                        <td>${x.email}</td>
                        <td>${x.course}</td>
                     </tr>`);
}

function onSearch() {
   unhighlightTable();
   const searchText = searchFieldElement.value;

   if (!searchText) {
      return;
   }

   searchFieldElement.value = '';

   Array.from(document.querySelectorAll('td'))
      .forEach(element => {
         if (element.textContent.toLowerCase().includes(searchText.toLowerCase())) {
            element.parentElement.classList.add('select');
         }
   });
}

function unhighlightTable() {
   Array.from(document.querySelectorAll('.select'))
      .forEach(element => element.classList.remove('select'));
}