

// 기본 api 주소 
const URL_API = "http://localhost:8080/api/v2";

const URL_HELLO = `${URL_API}/hello`;

const URL_USER = `${URL_API}/user`; 

function hello(){
    return fetch(URL_HELLO)
    .then(response => {
        return response.text();
    })
    .then(hello => {
        return hello;
    })
    .catch(error => console.log(error));
}

function getUser(){
    return fetch(URL_USER)
    .then(response => {
        return response.json();
    })
    .then(user => {
        return user;
    })
    .catch(error => console.log(error)); 
}

export{
    hello,
    getUser
}