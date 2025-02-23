// Do your work here...
console.log('Hello, world!');


<<<<<<< HEAD

// ini kode buat tombol hapus
let buttonHapus = document.createElement('button');
buttonHapus.textContent = `Hapus Buku`;
buttonHapus.classList.add('buttons');
buttonHapus.setAttribute('data-testid','bookItemDeleteButton');
buttonHapus.setAttribute('data-bookId','incompleteBookList');
buttonHapus.addEventListener('click',function(){
    hapusBuku(data.id);
});


// ini fungsinya 
function hapusBuku(id){
    let hapus = getNewBook();
    let idData = hapus = hapus.filter((book) => book.id !== id);

    localStorage.setItem(keyStorage,JSON.stringify(hapus));
    localStorage.removeItem(hapus);
    renderListBook();
};


=======
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
>>>>>>> button-update

