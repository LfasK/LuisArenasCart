
 /* async function getProducts() {
    try {
        const data = await fetch("https://ecommercebackend.fundamentos-29.repl.co/"
        );

        const res = await data.json();
        
        window.localStorage.setItem("products", JSON.stringify(res));

        return res;
    } catch (error) {
        console.log(error);
    }
}

function printProducts(db) {
        const productsHTML = document.querySelector(".products");

        let html = "";

        for (const product of db.products) {
            html += ` 
            <div class="products">
               <div class="product__img">
                    <img src="${product.image}" alt="imagen" />
               </div> 

               <div class="product__info">
                 <p>${product.name} <span><b>Stock</b>: ${product.quantity} $</span></h3>
                 <h4>
                   ${product.price}
                   <i class='bx bx-plus' id='${product.quantity}'></i>
                 </h4>
               </div>

                
            </div>
            `;
        }
    
        productsHTML.innerHTML = html;
}

function handleShowCart() {
    const iconCartHTML = document.querySelector(".bx-cart");
    const cartHTML = document.querySelector(".cart");
  
    iconCartHTML.addEventListener("click", function () {
        cartHTML.classList.toggle("cart__show");
    });
}

function addToCartFromProducts(db) {
    const productsHTML = document.querySelector(".products");

    productsHTML.addEventListener('click', function (e) {
        if (e.target.classList.contains("bx-plus")) {
            const id = Number(e.target.id);

            const productFind = db.products.find(
                (product) => product.id === id
            );

            if (db.cart[productFind.id]){
               if (productFind.quantity === db.cart[productFind.id].amount) 
                       return alert('Lo siento, agotados');
                    db.cart[productFind.id].amount++;    
            } else {
                db.cart[productFind.id] = { ...productFind, amount: 1};
            }
            
            window.localStorage.setItem("cart", JSON.stringify(db.cart));
               printProductsInCart(db):;       
        }
    });
}

function printProductsInCart(db) {
    const cardProducts = document.querySelector(".card__products");

    let html = "";

    for (const product in db.cart) {
        const { quantity, price, name, image, id, amount} = db.cart[product];
       
        html += `
              <div class="card__product">
                 <div className="card__product--img">
                      <img src="${image}" alt="imagen" />
                 </div>
              </div> className="card__product--body">
                      <h4>${name} | $${price}</h4>
                      <p>Stock: ${quantity}</p>


                        <div class="card__product--body-op">
                        <i class='bx bx-minus'></i>
                        <span>${amount} unit</span>
                        <i class='bx bx-plus'></i>
                        <i class='bx bx-trash'></i>
                        </div>
                    </div>
               </div>       
        `;
    }

    cardProducts.innerHTML = html;
}
        
async function main() {
    const db = {
        products:
             JSON.parse(window.localStorage.getItem("products")) ||
             (await getProducts()),
             cart: JSON.parse(window.localStorage.getItem('cart')) || {},
    };
    
    printProducts(db);
    handleShowCart();
    addToCartFromProducts(db);
    printProductsInCart(db);

   
   
}    

main(); */

(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const _=()=>{const t=document.querySelector("#headerPrincipal");window.addEventListener("scroll",()=>{window.scrollY>100?t.classList.add("header_show"):t.classList.remove("header_show")})},w=()=>{const t=document.querySelector("#navbarMenu"),o=document.querySelector(".handleIconNavbar");function r(){t.classList.contains("navbar_menu-show")?(t.classList.remove("navbar_menu-show"),o.classList.remove("bx-x"),o.classList.add("bxs-dashboard")):(t.classList.add("navbar_menu-show"),o.classList.add("bx-x"),o.classList.remove("bxs-dashboard"))}o.addEventListener("click",()=>{r()}),t.addEventListener("click",s=>{r()})},y=()=>{const t=document.querySelector("#iconTheme");function o(){window.document.body.classList.contains("dark-theme")?(window.document.body.classList.remove("dark-theme"),t.classList.remove("bx-sun"),window.localStorage.removeItem("saveTheme")):(window.document.body.classList.add("dark-theme"),t.classList.add("bx-sun"),window.localStorage.setItem("saveTheme",!0))}t.addEventListener("click",()=>o()),window.localStorage.getItem("saveTheme")&&(window.document.body.classList.add("dark-theme"),t.classList.add("bx-sun"))},S=()=>{const t=document.querySelector("#iconCloseCart"),o=document.querySelector("#iconShowCart"),r=document.querySelector(".contentCart");t.addEventListener("click",()=>{r.classList.remove("contentCart_show")}),o.addEventListener("click",()=>{r.classList.add("contentCart_show")})};function f(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}const h=t=>{const o=document.querySelector(".products");let r="";for(const{category:s,id:e,image:a,name:c,price:u,quantity:i}of t.products){const m="imagen camisa "+c.split(" ").slice(-1)+e,p=i===0?'<span class="product__soldout">Sold out</span>':`<span class="product_info--stock">Stock: ${i}</span>`,g=i===0?"":`<i class="bx bx-plus" id='${e}'></i>`;r+=`<div class="product ${s}">
                    <div class="product__img">
                        <img src="${a}" alt="${m}">
                    </div>
                    <div class="product_info">
                        ${g}
                        <h3>${f(u)} ${p}</h3>
                        <p class='showModalProduct' id="${e}">${c}</p>
                    </div>
                </div>`}o.innerHTML=r};async function L(){const o=await(await fetch("https://ecommercebackend.fundamentos-29.repl.co/")).json();return localStorage.setItem("productsApi",JSON.stringify(o)),o}const v=t=>{const{amountTotal:o,priceTotal:r}=Object.values(t).reduce((s,e)=>(s.amountTotal+=e.amount,s.priceTotal+=e.amount*e.price,s),{amountTotal:0,priceTotal:0});return{amountTotal:o,priceTotal:r}},n=t=>{const o=document.querySelector(".totalAmountProducts span"),{amountTotal:r}=v(t.cart);o.textContent=r},l=t=>{const o=document.querySelector(".contentCart__products");let r="";for(const s in t.cart){const{amount:e,name:a,image:c,price:u,quantity:i,id:m}=t.cart[s],p=e*u;r+=`
            <div class="product__card">
                <div class="product__card--img">
                    <img src="${c}" alt="imagen">
                </div>
                <div class="product__card--body">
                    <h4>${a}</h4>
                    <p>Stock: ${i} | <span>${f(u)}</span></p>
                    <p>Subtotal: ${f(p)}</p>

                    <div class="product__card--action" id="${m}">
                        <i class="bx bx-minus"></i>
                        <span>${e===1?"1 unit":e+" units"}</span>
                        <i class="bx bx-plus"></i>
                        <i class="bx bx-trash-alt"></i>
                    </div>
                </div>
            </div>`}o.innerHTML=r},d=t=>{const o=document.querySelector(".numberItems"),r=document.querySelector(".totalPrice"),{amountTotal:s,priceTotal:e}=v(t.cart);o.textContent=s===1?"1 item":s+" items",r.textContent=f(e)},b=t=>{const o=document.querySelector(".products"),r=document.querySelector(".contentCart__products");o.addEventListener("click",s=>{if(s.target.classList.contains("bx-plus")){const e=Number(s.target.id),a=t.products.find(c=>c.id===e);if(t.cart[a.id]){if(t.cart[a.id].amount===a.quantity)return alert("No tenemos mas en stock");t.cart[a.id].amount++}else t.cart[a.id]={...a,amount:1};window.localStorage.setItem("cartProducts",JSON.stringify(t.cart)),l(t),d(t),n(t)}}),r.addEventListener("click",s=>{if(s.target.classList.contains("bx-plus")){const e=Number(s.target.parentElement.id),a=t.products.find(c=>c.id===e);if(t.cart[a.id].amount===a.quantity)return alert("No tenemos mas en stock");t.cart[e].amount++,window.localStorage.setItem("cartProducts",JSON.stringify(t.cart)),l(t),d(t),n(t)}if(s.target.classList.contains("bx-minus")){const e=Number(s.target.parentElement.id);if(t.cart[e].amount===1){if(!confirm("Seguro lo quieres eliminar 😫"))return;delete t.cart[e]}else t.cart[e].amount--;window.localStorage.setItem("cartProducts",JSON.stringify(t.cart)),l(t),d(t),n(t)}if(s.target.classList.contains("bx-trash-alt")){if(!confirm("Seguro lo quieres eliminar 😫"))return;const a=Number(s.target.parentElement.id);delete t.cart[a],window.localStorage.setItem("cartProducts",JSON.stringify(t.cart)),l(t),d(t),n(t)}})},x=t=>{let o=document.querySelector(".btn__buy");o&&o.addEventListener("click",()=>{if(!Object.values(t.cart).length)return alert("Que te parece si compras algo primero? jeje");confirm("seguro que quieres hacer la compra? 😍")&&(t.products=t.products.map(s=>{var e;return((e=t.cart[s.id])==null?void 0:e.id)===s.id?{...s,quantity:s.quantity-t.cart[s.id].amount}:s}),t.cart={},window.localStorage.setItem("productsApi",JSON.stringify(t.products)),window.localStorage.setItem("cartProducts",JSON.stringify(t.cart)),h(t),l(t),d(t),n(t),window.location.reload())})},P=t=>{const o=document.querySelector(".modalProduct");document.querySelector(".products").addEventListener("click",s=>{if(s.target.classList.contains("showModalProduct")){const e=Number(s.target.id),c=JSON.parse(window.localStorage.getItem("productsApi")).find(p=>p.id===e),u=c.quantity!==0?`<i class="bx bx-plus" id="${c.id}"></i>`:"<span class='product__soldout'>Sold out</span>";o.innerHTML=`
            <div class="contentProduct">
                <i class="bx bxs-x-circle closeModal"></i>
                <div class="contentProduct__img">
                    <img src="${c.image}" alt="">
                </div>
                <h3 class="contentProduct__name">${c.name} - <span>${c.category}</span></h3>
                <p class="contentProduct__p">${c.description}</p>

                <div class="contentProduct__info">
                    <h3>${f(c.price)} ${u}</h3>

                    <p>stock: ${c.quantity}</p>
                </div>
            </div>
        `,o.classList.add("modalProduct__show");const i=document.querySelector(".closeModal"),m=document.querySelector(".contentProduct__info .bx-plus");i.addEventListener("click",()=>{o.classList.remove("modalProduct__show")}),m&&m.addEventListener("click",()=>{if(t.cart[c.id]){if(t.cart[c.id].amount===c.quantity)return alert("No tenemos mas en stock");t.cart[c.id].amount++}else t.cart[c.id]={...c,amount:1};window.localStorage.setItem("cartProducts",JSON.stringify(t.cart)),l(t),n(t),d(t)})}})},q=()=>{const t=document.querySelectorAll("body .scrollPy");function o(){const r=window.pageYOffset;t.forEach(s=>{const e=s.offsetHeight,a=s.offsetTop-58,c=s.getAttribute("id");r>a&&r<=a+e?document.querySelector(".navbar_menu li a[href*="+c+"]").classList.add("link__active"):document.querySelector(".navbar_menu li a[href*="+c+"]").classList.remove("link__active")})}window.addEventListener("scroll",o)};function C(){const t=document.getElementById("load");t&&setTimeout(()=>{t.style.display="none"},500)}const T=()=>{const t=document.querySelector("#app");let o=`
    <header id="headerPrincipal">
            <nav class="navbar container">
                <a href="#home" class="navbar_logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.92 56.48" class="nav_logo-icon">
                        <title>Academlo Logo</title>
                        <g>
                            <g>
                                <path
                                    d="M28.58,15.39H25.16L35.78,36H31.49L20.67,15.71,8.23,38.82H18.94l3-5.43h-3.4l-1.47,2.54h-4l2.69-5.09H25.85l4.28,8H40.67ZM17.23,28.21l3.57-6.6,3.57,6.6Z">
                                </path>
                            </g>
                        </g>
                    </svg>
                    <span>STORE</span>
                </a>

                <ul class="navbar_menu" id="navbarMenu">
                    <li>
                        <a class="link__active" href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#products">Products</a>
                    </li>
                </ul>

                <div class="navbar__icons">
                    <i class='bx bx-moon' id="iconTheme"></i>
                    <i class='bx bx-shopping-bag' id="iconShowCart">
                        <div class="totalAmountProducts"><span>0</span></div>
                    </i>
                    <i class='bx bxs-dashboard handleIconNavbar'></i>
                </div>
            </nav>
        </header>

        <div class="container">
            <section class="home scrollPy" id="home">

                <div class="home_header">
                    <div></div>
                    <div class="home_header-img">
                        <img src="/images/sweater2.png" alt="">
                    </div>
                </div>

                <div class="home_body">
                    <h2 class="home_body-title">
                        COLLECTIONS 2023 ACADEMLO</h2>
                    <p class="home_body-paragragh">Latest arrival of the new Hanes Midweight Crewneck sweatshirt imported
                        from
                        the 2022 series, with
                        a modern design.</p>
                    <p class="home_body-price">$14.00</p>
                    <a href="#products" class="home_body-btn">Show more</a>
                </div>

            </section>

            <section class="content_products scrollPy" id="products">
                <div class="content_filter">
                    <div class="filter filter__active" data-filter="all">
                        <p>Show all</p>
                        <p>Show all products</p>
                    </div>

                    <div class="filter" data-filter=".shirt">
                        <p>Shirt</p>
                        <p>7 products</p>
                    </div>

                    <div class="filter" data-filter=".hoddie">
                        <p>Hoddie</p>
                        <p>6 products</p>
                    </div>

                    <div class="filter" data-filter=".sweater">
                        <p>Sweater</p>
                        <p>5 products</p>
                    </div>
                </div>

                <div class="products"></div>
            </section>
        </div>

        <div class="contentCart">
            <i class="bx bx-x" id="iconCloseCart"></i>
            <div class="contentCart__products"></div>
            <div class="contentCart__total">
                <div class="contentCart__total--buy">
                    <p class="numberItems">1 items</p>
                    <p class="totalPrice">$20.00</p>
                </div>

                <button class="btn__buy">Comprar</button>
            </div>
        </div>

        <div class="modalProduct"></div>

        <div class="load" id="load">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.92 56.48" class="load__gif">
                <title>Academlo Logo</title>
                <g>
                    <g>
                        <path
                            d="M24.45,56.48,0,42.36V14.12L24.46,0,48.92,14.12V42.36ZM1.89,41.26l22.56,13L47,41.26v-26l-22.56-13-22.56,13Z">
                        </path>
                        <path
                            d="M28.58,15.39H25.16L35.78,36H31.49L20.67,15.71,8.23,38.82H18.94l3-5.43h-3.4l-1.47,2.54h-4l2.69-5.09H25.85l4.28,8H40.67ZM17.23,28.21l3.57-6.6,3.57,6.6Z">
                        </path>
                    </g>
                </g>
            </svg>
        </div>

        <footer>
            <section class="content_footer container">
                <div class="footer_info">
                    <h3 class="footer_info-title">Our information</h3>
                    <ul>
                        <li><a href="#">Toluca - México</a></li>
                    </ul>
                </div>

                <div class="footer_info">
                    <h3 class="footer_info-title">About Us</h3>
                    <ul>
                        <li><a href="#">Support Center</a></li>
                        <li><a href="#">Customer Support</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Copy Right</a></li>
                    </ul>
                </div>

                <div class="footer_info">
                    <h3 class="footer_info-title">Product</h3>
                    <ul>
                        <li><a href="#">Hoodies</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Sweatshirts</a></li>
                    </ul>
                </div>

                <div class="footer_info">
                    <h3 class="footer_info-title">Social</h3>
                    <ul class="footer_link-social">
                        <li>
                            <a href="#">
                                <i class='bx bxl-facebook'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxl-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxl-instagram'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <p><b>Luis Arenas / correo: cambiosbsw@gmail.com <a href="#"> Prof: Brayan Muñoz</a> </p>
        </footer>
    `;t.innerHTML=o},N=()=>{const t=document.querySelectorAll(".content_filter .filter");t.forEach(o=>{o.addEventListener("click",r=>{t.forEach(s=>s.classList.remove("filter__active")),r.currentTarget.classList.add("filter__active")})})};window.addEventListener("load",async function(){const t={cart:JSON.parse(localStorage.getItem("cartProducts"))||{},products:JSON.parse(localStorage.getItem("productsApi"))||await L()};T(),C(),N(),h(t),_(),w(),y(),S(),b(t),l(t),d(t),x(t),P(t),n(t),q(),mixitup(".products",{selectors:{target:".product"},animation:{duration:300}}).filter("all")});
