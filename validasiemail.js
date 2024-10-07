function validasiemail(email){
    if(typeof email !== "symbol" && email.length >= 5){
        return "email valid"
    } else {
        return "email tdk valid"
    }
}
console.log(validasiemail("nama@example.com"))
console.log(validasiemail("nama@com"))
console.log(validasiemail("nama"))
console.log(validasiemail(""))