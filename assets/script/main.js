import { getAllCategories,  } from "./httprequest.js";

getAllCategories()
// deletepost()

// let categories=getAllCategories();
// console.log(categories);
let card = document.querySelector(".card")

getAllCategories().then((data) => {

    data.forEach((data) => {
        card.innerHTML += `   <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="card "style="width: 18rem;">
                        <img class="card-img-top"
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22287%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20287%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_187ce6b8714%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_187ce6b8714%22%3E%3Crect%20width%3D%22287%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.6875%22%20y%3D%2296.20000038146972%22%3E287x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="Card image cap"> 
                         <div class="card-body">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-text">${data.body}.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>`
    })

})