// Do your work here...
console.log('Hello, world!');


// update
let buttonUpdate = document.createElement('button');
buttonUpdate.textContent = data.isComplete ? `Belum Selesai` : `Selesai dibaca`;
buttonUpdate.classList.add('buttons');
buttonUpdate.setAttribute('data-testid','bookItemIsCompleteButton');
buttonUpdate.setAttribute('data-bookId','completeBooklist');
buttonUpdate.addEventListener('click',function(){
    bookStatus(data.id);
});

// function update
function bookStatus(id){
    let data = getNewBook();
    let book = data.findIndex(book => book.id === id);

    if(book !== -1){
        data[book].isComplete = !data[book].isComplete;
        renderListBook();
    }
}