function validasialamat(alamat) {
    alamat = alamat.trim();
    if (alamat.length >= 10) {
        return "alamat valid";
    } else {
        return "alamat tdk valid";
    }
}
console.log(validasialamat(""));
console.log(validasialamat("Jl 5"));
console.log(validasialamat("Jl. Merdeka No.10"));

