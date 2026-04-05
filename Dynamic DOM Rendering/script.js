const data = [
    { name: "Biryani", price: 200 },
    { name: "Chicken Qorma", price: 220 },
    { name: "Chicken Karahi", price: 250 },
    { name: "Lab e Shireen", price: 400 },
    { name: "Daal Chana", price: 150 },
    { name: "Lassi", price: 150 }
]

const app = document.getElementById("app");
let html = "";
data.forEach(element => {
    html += `
        <div class="card">
            <div class="card-portion">
                <p class="productName">
                    ${element.name}
                </p>
            </div>
            <div class="card-portion">
                <p class="price">
                    PKR ${element.price}
                </p>
            </div>
        </div>`
});

app.innerHTML = html;