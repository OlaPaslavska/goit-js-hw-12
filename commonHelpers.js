import{a as q,i,S as x}from"./assets/vendor-f144e563.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const M=q.create({baseURL:"https://pixabay.com/"});async function b(t,r,o){try{const l={key:"44654317-b43c54b885daf7a418bb31fe3",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o};return(await M.get("api/",{params:l})).data}catch{i.error({title:"Error",message:`${err}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const c={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};async function y(t){let r=t.map(o=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${o.largeImageURL}">
        <image 
        width="360";
        height="200";
         class="gallery-image"
        src="${o.webformatURL}"
        alt="${o.tags}"/>
        </a>
        <div class="gallery-card-container">
       <ul class="text-list">
     <li class="text-item">
       <p class="text-item-name"><strong>Likes:</strong></p>
       <p class="text-item-quantity">${o.likes}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Views</strong></p>
       <p class="text-item-quantity">${o.views}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Comments</strong></p>
       <p class="text-item-quantity">${o.comments}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Downloads</strong></p>
       <p class="text-item-quantity">${o.downloads}</p>
     </li>
   </ul>
</div>
</li>`).join("");c.gallery.insertAdjacentHTML("beforeend",r)}function L(){c.loader.classList.remove("hidden")}function d(){c.loader.classList.add("hidden")}function B(){c.loadMoreBtn.classList.remove("hidden")}function g(){c.loadMoreBtn.classList.add("hidden")}const a={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let u="",n=1,f=15,m=1;const h=new x(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.form.addEventListener("submit",async t=>{if(t.preventDefault(),u=a.input.value.trim(),n=1,g(),u===""){a.gallery.innerHTML=" ",i.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"}),a.form.reset();return}L(),a.gallery.innerHTML=" ";try{const r=await b(u,n,f);if(m=Math.ceil(r.totalHits/f),m===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),a.form.reset(),d();return}d(),a.form.reset(),y(r.hits),h.refresh(),B()}catch(r){i.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});a.loadMoreBtn.addEventListener("click",async()=>{g(),L(),n++;try{const t=await b(u,n,f);if(t.hits.length==0||n>=m){y(t.hits),h.refresh(),d(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:5e3}),g();return}y(t.hits),h.refresh(),d(),n<m&&B()}catch(t){a.gallery.innerHTML=" ",i.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
