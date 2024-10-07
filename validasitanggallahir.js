function validasitanggallahir(tanggallahir) {
  let [tahun, bulan, hari] = tanggallahir.split("-").map(Number);

  let inputDate = new Date(tahun, bulan - 1, hari);
  let sekarang = new Date();
  if (
    inputDate.getFullYear() === tahun &&
    inputDate.getMonth() + 1 === bulan &&
    inputDate.getDate() === hari &&
    inputDate < sekarang
  ) {
    return "tanggal lahir valid";
  } else {
    return "tanggal lahir tdk valid";
  }
}
console.log(validasitanggallahir("1990-05-21"));
console.log(validasitanggallahir("2025-05-21"));
console.log(validasitanggallahir(""));
