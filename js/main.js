console.log('hola');

const noCambia = 'Alan';

let todoBientext = 'Todo Legal';
let todoMaltext = 'Todo mal amigo';

let cambia = '@Alan'

function cambiarNombre(nuevoNombre){
    cambia = nuevoNombre
}

// const getUserAll = new Promise(function(todoBien, todoMal){
//     //llamar a un api
//     setTimeout(function(){
//         //esperar 3 segundos
//         todoBien(todoBientext);
//     }, 5000)
    
// })

// const getUser = new Promise(function(todoBien, todoMal){
//     //llamar a un api
//     setTimeout(function(){
//         //esperar 3 segundos
//         todoBien(todoBientext);
//     }, 3000)
    
// })


// Promise.all([
//     getUser,
//     getUserAll,
// ])

// .then(function(message){
//     console.log(message)
// })
// .catch(function(message){
//     console.log(message)
// })

// $.ajax('https://randomuser.me/api/',{
//     method: 'GET',
//     success: function(user){
//         console.log('Resultados', user)
//     },
//     error: function(error){
//         console.log(error)
//     }
// })

fetch('https://randomuser.me/api/')
.then(function(response){
   /*  console.log(response) */
    return response.json()
})

.then(function(user){
    console.log('Usuario', user.results[0].name.first)
})

.catch(function(){
    console.log('Fail')
});

(async function load(){
    //await
    //drama
    //action
    //animation
    async function getData(url){
        const response = await fetch(url)
        const data = await response.json()
        return data;
    }
    const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
    const sciList = await getData('https://yts.lt/api/v2/list_movies.json?genre=sci-fi')
    

    getData('https://yts.lt/api/v2/list_movies.json?genre=drama')
    .then(function (data){
        console.log('Drama', data)
    })
    console.log('Action',actionList,'Sci-fi', sciList);

    const $home = $('.home .list #item');

})()

