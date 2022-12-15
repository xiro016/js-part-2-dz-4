async function guardianGreaves () {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let content = await response.json()
    let list = document.querySelector('.posts')
let wrap = document.getElementsByClassName("wrap")

    let bladeMale;
 

    for (bladeMale in content) {
         list.innerHTML += `
         <li class="post">
         <h4>${content[bladeMale].userId}</h4>  
         <h4>${content[bladeMale].id}</h4>  
         <h4>${content[bladeMale].title}</h4>  
         <h4>${content[bladeMale].body}</h4> 
     </li>
         `
   

        console.log(content[bladeMale]); 
    }
}



guardianGreaves()