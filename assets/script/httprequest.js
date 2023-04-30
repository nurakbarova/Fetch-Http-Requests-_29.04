const baseURL = " https://jsonplaceholder.typicode.com/posts"

export const getAllCategories = async() => {
    let globalData;
   await fetch(baseURL)
        .then(response => response.json())
        .then(data => { globalData = data; }
        )
        return globalData
}
