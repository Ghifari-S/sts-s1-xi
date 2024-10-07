function validasinama(name) {
    name = name.trim();
    if (name.length > 0 && name.split(' ').length >= 3) {
        return "nama valid";
    } else {
        return "nama tdk valid";
    }
}
console.log(validasinama(""));
console.log(validasinama("ghifari ghifari"));
console.log(validasi("ghifari ghifari ghifari"));

