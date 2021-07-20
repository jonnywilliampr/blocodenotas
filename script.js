let btn = document.querySelector(".btn-adicionar");

let listNote = document.querySelector(".list-note");

let templateNote = (note)=>{

    let close = document.createElement('div');
    close.insertAdjacentHTML('beforeend', `
        <svg width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2989 6.7634L3.53553 0L0 3.53553L6.7634 10.2989L0.399425 16.6629L3.93496 20.1984L10.2989 13.8345L16.2635 19.799L19.799 16.2635L13.8345 10.2989L20.1984 3.93498L16.6629 0.399447L10.2989 6.7634Z" fill="#202020"/>
        </svg>
        `);

    close.addEventListener('click', event=>{
        let listNote = event.currentTarget.parentElement.parentElement;
        listNote.removeChild(event.currentTarget.parentElement);
    });

    close.className = 'close';

    let textBox = document.createElement('div');
    textBox.className = 'text-box';
    textBox.insertAdjacentHTML('beforeend', `<p>${note}</p>`);
    textBox.appendChild(close);
    listNote.append(textBox);
};

btn.addEventListener('click',()=>{
    let textarea = document.getElementById('textarea');
    addNota(textarea.value);
    document.getElementById('textarea').value = '';
});

function addNota(nota){
    templateNote(nota);
};