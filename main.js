    const form = document.getElementById('form-contato');
    const contatos = [];
    const numeros = [];
    const calendar = document.getElementById('calendar');
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const totalDays = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();
alert("Insira o nome e o número do contato");

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

    function adicionaLinha() {
        const inputNomeContato = document.getElementById('nome-contato');
        const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} já foi inserido`)
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));

            contatos.push(inputNomeContato.value);
            numeros.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }
    
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    }

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function createCalendar() {
    let html = '<table>';
   html += '<tr>';
   html += '<th colspan="7">' + monthNames[month] + ' ' + year + '</th>';
   html += '</tr>';
   html += '<tr>';
   html += '<th>D</th>';
   html += '<th>S</th>';
   html += '<th>T</th>';
   html += '<th>Q</th>';
   html += '<th>Q</th>';
   html += '<th>S</th>';
   html += '<th>S</th>';
   html += '</tr>';

   let day = 1;

   for (let i = 0; i < 6; i++) {
       html += '<tr>';

       for (let j = 0; j < 7; j++) {
           if (i === 0 && j < firstDayIndex) {
               html += '<td></td>';
           } else if (day > totalDays) {
               break;
           } else {
               html += '<td' + (day === date.getDate() ? ' class="current-day"' : '') + '>' + day + '</td>';
               day++;
           }
       }

       html += '</tr>';
   }

   html += '</table>';
   calendar.innerHTML = html;
}

createCalendar();




   
    








