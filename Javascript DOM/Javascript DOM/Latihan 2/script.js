//contoh 1
// console.log(i);
// var i=10;

//var i;
//console.log(i)
//i=10;

//pembenaran
// console.log(i);
// let i=10;

//contoh 2
// for(var i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i);

//pembenaran 1
// function test(){
//     for(var i=0;i<10;i++){
//         console.log(i);
//     }
// }
// test();
// console.log(i);

//pembenaran 2
// (function(){
//     for(var i=0;i<10;i++){
//         console.log(i);
//     }
// }())
// console.log(i);

//pembenaran 3
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i);

//var (function scope)
//let (block scope)
//const (block scope)

//const adalah variable yang tdk bisa diubah datnya, tapi masih bisa diakali untuk diubh
//contoh 1
//berhasil
// const mhs={
//     nama:'bejo',
//     jurusan:'sipil'
// };
// console.log(mhs.nama);
// mhs.nama = 'arip';
// console.log(mhs.nama);

//gagal
// const mhs={
//     nama:'bejo',
//     jurusan:'sipil'
// }
// console.log(mhs);
// const mhs={
//     matakuliah:'bejo',
//     jurusan:'sipil'
// }

//contoh 2
//berhasil
// const angka = [1,2,3,4];
// angka.push(5);
// console.log(angka);

//gagal
// const angka = [1,2,3,4];
// console.log(angka);
// angka = [1,2,3];
// console.log(angka);