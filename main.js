// Do your work here...
console.log('Hello, world!');


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


