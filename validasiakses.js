function validasiakses(akses) {
  if (akses == "admin") {
    console.log("akses diizinkan");
    return true;
  } else if (akses == "guest") {
    console.log("akses diizinkan");
    return true;
  } else {
    console.log("akses ditolak");
    return false;
  }
}
