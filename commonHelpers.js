import{a as B,i,S as x}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const M=B.create({baseURL:"https://pixabay.com/",apiKey:"44654317-b43c54b885daf7a418bb31fe3"});async function f(r,t,s){try{const n={key:"44654317-b43c54b885daf7a418bb31fe3",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s};return(await M.get("api/",{params:n})).data}catch{i.error({title:"Error",message:`${err}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const o={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};async function y(r){const t=r.map(s=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${s.largeImageURL}">
        <image 
        width="360";
        height="200";
         class="gallery-image"
        src="${s.webformatURL}"
        alt="${s.tags}"/>
        </a>
        <div class="gallery-card-container">
       <ul class="text-list">
     <li class="text-item">
       <p class="text-item-name"><strong>Likes:</strong></p>
       <p class="text-item-quantity">${s.likes}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Views</strong></p>
       <p class="text-item-quantity">${s.views}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Comments</strong></p>
       <p class="text-item-quantity">${s.comments}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Downloads</strong></p>
       <p class="text-item-quantity">${s.downloads}</p>
     </li>
   </ul>
</div>
</li>`).join("");o.gallery.insertAdjacentHTML("beforeend",t)}function h(){o.loader.classList.remove("hidden")}function u(){o.loader.classList.add("hidden")}function b(){o.loadMoreBtn.classList.remove("hidden")}function g(){o.loadMoreBtn.classList.add("hidden")}function w(r,t){r>=t?(g(),t&&i.info({title:"The end!",message:"We're sorry, but you've reached the end of search results."})):b()}let c="",l=1,p=15,m=1;const L=new x(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});o.form.addEventListener("submit",async r=>{if(r.preventDefault(),c=r.target.elements.text.value.trim(),l=1,g(),c===""){o.gallery.innerHTML=" ",i.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"}),o.form.reset();return}h(),o.gallery.innerHTML=" ";try{const t=await f(c,l,p);if(m=Math.ceil(t.totalHits/p),m===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),o.form.reset(),u();return}u(),o.form.reset(),y(t.hits),L.refresh(),b()}catch(t){i.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});o.loadMoreBtn.addEventListener("click",async()=>{g(),h();try{l++;const r=await f(c,l,p);r.hits.length!==0&&(y(r.hits),L.refresh(),u()),w(l,m),skipOldElement()}catch(r){o.gallery.innerHTML=" ",i.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
