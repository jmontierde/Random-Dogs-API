const foxResult = document.getElementById('fox_result');
const dogResult = document.getElementById('dog_result');
const foxBtn = document.getElementById('fox_btn');
const dogBtn = document.getElementById('dog_btn');

foxBtn.addEventListener('click', () => {
    fetch('https://randomfox.ca/floof/')
    .then((res) => res.json())
    .then((data) =>{
        foxResult.innerHTML = `<img src="${data.image}"/>`
    })
})
dogBtn.addEventListener('click', getRandomDog);
  


function getRandomDog(){
    fetch('https://random.dog/woof.json')
    .then((res) => res.json())
    .then((data) =>{
        if(data.url.includes('.mp4')){
           return getRandomDog();                        
        }else{
            dogResult.innerHTML = `<img src="${data.url}"/>`
        }
    })
}
 

fetch('url', {
    method: 'POST',
    body: JSON.stringify(myData)/*Your Data*/ ,
    header: {
        'title: title' : 'body:body',
        header: {
            'Content-type' : 'application/json'
        }
    }
})
.then((res) => res.json())
.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log("Error")
})