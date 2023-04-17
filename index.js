const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//mostrar sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//fechar sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//trocar tema
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

//preenche pedidos na tabela
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${
                          order.shipping === "Cancelado"
                            ? "danger"
                            : order.shipping === "Pendente"
                            ? "warning"
                            : "primary"
                        }">${order.shipping}</td>
                        <td class="primary">Detalhes</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
