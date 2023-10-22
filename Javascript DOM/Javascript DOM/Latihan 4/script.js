//inner html -> memanipulasi isi dari tah html
const sectioA=document.getElementById('a');
const p1 = sectioA.querySelector('.p1');
p1.innerHTML = 'Syahrul Riza Andi';

//style
p1.style.backgroundColor = 'lightseagreen';

//atribute
// p1.setAttribute('class','p2'); ->menambahkan class baru/atribute baru dengan cara menindih atau mengganti kelas lama menjadi kelas baru
// p1.removeAttribute('class','p1'); ->menghapus class

//classList
// p1.classList.add('p2'); -> menambahkan class baru tanpa harus menindih class lama dengan class baru
// p1.classList.remove('p1'); -> menghapus class
// p1.classList.toggle('p3'); -> ketika class p3 belum ada maka otomatis ditambahkan tetapi kalau class p3 sudah ada maka akan otomatis dihapus class p3
p1.classList.add('p2');
p1.classList.add('p3');
p1.classList.add('p4');
p1.classList.add('p5');
// p1.classList.item(3); -> untuk mengetahui nama class berdasarkan angka atau index karena dimulai dari 0
// p1.classList.contains('p3'); -> untuk mencari class dan ouput yg dihasilkan true jika ada, false jika tidak ada
// p1.classList.replace('p5','p6'); -> untuk mengganti class yg sudah ada