const baseURL = " https://jsonplaceholder.typicode.com/posts"

export const getAllCategories = async () => {
    let globalData;
    await fetch(baseURL)
        .then(response => response.json())
        .then(data => { globalData = data; }
        )
    return globalData
}

let deletebtn=document.querySelector(".button_delete")
let postbtn=document.querySelector(".button_post")

// deletebtn.addEventListener("click",(e)=>{
//   export  const getDELETECategories = async() => {
//     letz
//         fetch(baseURL ,{
//             method: 'DELETE'
//         })
//             .then(res => res.text())
//             .then(res => console.log(res))
//     }
// })