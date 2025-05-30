document.addEventListener("DOMContentLoaded", function () {
    const placeOrderButton = document.querySelector(".place-order");
  
    const modal = document.createElement("div");
    modal.classList.add("order-modal");
    modal.innerHTML = `
      <div class="order-modal-content">
        <span class="close-button">&times;</span>
        <p>Your order has been placed successfully!</p>
        <button class="back-to-menu">Back to Menu</button>
      </div>
    `;
    document.body.appendChild(modal);
  
    const closeButton = modal.querySelector(".close-button");
    const backToMenuButton = modal.querySelector(".back-to-menu");
  
    placeOrderButton.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    backToMenuButton.addEventListener("click", () => {
      window.location.href = "menu.html"; 
    });
  
    const cakes = [
      {
        id: 1,
        name: "Heart Shaped Merry Berry",
        price: 1200,
        description: "Moist strawberry sponge cake with strawberry and cream frosting topped with fresh strawberries",
        image: "images/Cake 1.webp"
      },
      {
        id: 2,
        name: "Devil's Cake",
        price: 1500,
        description: "Three layers of rich dark chocolate cake with Belgian caramel covered with Belgian dark chocolate ganache.",
        image: "images/Cake 2.webp"
      },
      {
        id: 3,
        name: "Strawberry White Cathedral",
        price: 1300,
        description: "Creamy rich vanilla frosting with two layers of strawberry goodness topped with fresh strawberries.",
        image: "images/Cake 3.webp"
      },
      {
        id: 4,
        name: "Triple Chocolate Deluxe",
        price: 1400,
        description: "Triple moist fudge brownie cake with custard filling and coated with milk chocolate ganache.",
        image: "images/Cake 4.webp"
      },
      {
        id: 5,
        name: "Fruity Cheesecake",
        price: 1600,
        description: "Mango flavored cheesecake with Biscoff crust topped with fresh mangoes, strawberries, dates, and dark chocolate.",
        image: "images/Cake 5.webp"
      },
      {
        id: 6,
        name: "Salted Caramel",
        price: 1350,
        description: "Chocolate sponge layers with salted caramel filling and coated with caramel frosting topped with pretzels and chocolate.",
        image: "images/Cake 6.webp"
      },
      {
        id: 7,
        name: "Ube Goodness",
        price: 1250,
        description: "Delicious Ube cake with pure purple yam filling frosted with home-made ube frosting.",
        image: "images/Cake 7.webp"
      },
      {
        id: 8,
        name: "Carrot Cream Cake",
        price: 1100,
        description: "Made with pure carrot with almonds and frosted with rich cream cheese.",
        image: "images/Cake 8.webp"
      },
      {
        id: 9,
        name: "Choco Berry Overload",
        price: 1450,
        description: "A layer of strawberry and chocolate sponge cake overloaded with chocolate and berries on top.",
        image: "images/Cake 9.webp"
      }
    ];
  
    const params = new URLSearchParams(window.location.search);
    const cakeId = parseInt(params.get("id"));
  
    const selectedCake = cakes.find(cake => cake.id === cakeId);
  
    if (selectedCake) {
      document.getElementById("cake").textContent = selectedCake.name;
      document.getElementById("price").textContent = `$${selectedCake.price}`;
      document.getElementById("description").textContent = selectedCake.description;
      document.getElementById("cake-image").src = selectedCake.image;
      document.getElementById("subtotal").textContent = `Subtotal: $${selectedCake.price.toFixed(2)}`;
      document.getElementById("total").textContent = `TOTAL: $${selectedCake.price.toFixed(2)}`;
    } else {
      document.getElementById("cake").textContent = "Cake not found.";
      document.getElementById("description").textContent = "";
    }
  });
  