const menu = document.querySelector(".menu");
const box = document.querySelector(".box");
import { phones, notebook } from "./main.js";

const render = async () => {
  const data = await phones();

  menu.innerHTML = data?.map((item) => `
  <div class="border bg-slate-950 w-[300px] mb-5 p-7 rounded-[15px]">
  <img class="mb-6 ml-auto mr-auto rounded-[20px]" src="${item.img}" alt="">
  <h1 class="text-[#fff] mb-2 font-semibold ">${item.title}</h1>
  <p class="text-[#fff] mb-2 font-semibold ">${item.rame}</p>
  <p class="text-[#fff] mb-2 font-semibold ">${item.color}</p>
  <h3 class="text-[#fff] mb-2 font-semibold ">${item.brand}</h3>
  <p class="text-[#fff] mb-2 font-semibold ">${item.price}</p>
  <button class="border border-spacing-1 font-semibold text-green-50  py-1 px-3 rounded-[10px]" data-id="${item.id}">Show</button>
</div>
  `).join("");
}
render();

const renderData = async () =>{
  const data = await notebook();

  box.innerHTML = data?.map((item) => `
        <div class="border bg-slate-950 w-[300px] mb-5 p-7 rounded-[15px]">
        <img class="mb-7 rounded-[20px]" src="${item.img}" alt="">
        <h1 class="text-[#fff] mb-5 font-semibold">${item.title}</h1>
        <h2 class="text-[#fff] mb-5 font-semibold">${item.brand}</h2>
        <strong class="text-[#fff] mb-5 font-semibold">${item.price}</strong>
        <p class="text-[#fff] mb-5 font-semibold">${item.color}</p>
        <h3 class="text-[#fff] mb-5 font-semibold">${item.ram}</h3>
        <h4 class="text-[#fff] mb-5 font-semibold">${item.geForce}</h4>
        <p class="text-[#fff] mb-5 font-semibold">${item.core}</p>
        <p class="text-[#fff] mb-5 font-semibold">${item.display}</p>
        <p class="text-[#fff] mb-5 font-semibold">${item.memory}</p>
        <p class="text-[#fff] mb-5 font-semibold">${item.weight}</p>
        <button class="border border-spacing-1 font-semibold text-green-50  py-1 px-3 rounded-[10px]" data-id="${item.id}">Show</button>
        
      </div>
  `).join("");

}
renderData();