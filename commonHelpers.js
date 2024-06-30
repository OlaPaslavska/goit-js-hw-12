import{a as L,i,S as B}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const x=L.create({baseURL:"https://pixabay.com/",apiKey:"44654317-b43c54b885daf7a418bb31fe3"});async function g(r,o,e){try{const n={key:"44654317-b43c54b885daf7a418bb31fe3",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:e};return(await x.get("api/",{params:n})).data}catch{i.error({title:"Error",message:`${err}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const s={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};async function f(r){const o=r.map(e=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${e.largeImageURL}">
        <image 
        width="360";
        height="200";
         class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"/>
        </a>
        <div class="gallery-card-container">
       <ul class="text-list">
     <li class="text-item">
       <p class="text-item-name"><strong>Likes:</strong></p>
       <p class="text-item-quantity">${e.likes}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Views</strong></p>
       <p class="text-item-quantity">${e.views}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Comments</strong></p>
       <p class="text-item-quantity">${e.comments}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Downloads</strong></p>
       <p class="text-item-quantity">${e.downloads}</p>
     </li>
   </ul>
</div>
</li>`).join("");s.gallery.innerHTML("beforeend",o)}function y(){s.loader.classList.remove("hidden")}function d(){s.loader.classList.add("hidden")}function h(){s.loadMoreBtn.classList.remove("hidden")}function m(){s.loadMoreBtn.classList.add("hidden")}function M(r,o){r>=o?(m(),o&&i.info({title:"The end!",message:"We're sorry, but you've reached the end of search results."})):h()}let w="",l=1,u=15,p=1;const b=new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});s.form.addEventListener("submit",async r=>{r.preventDefault();const o=r.target.elements.text.value.trim();if(l=1,m(),o===""){s.gallery.innerHTML=" ",i.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"}),s.form.reset();return}y(),s.gallery.innerHTML=" ";try{const e=await g(o,l,u);if(p=Math.ceil(e.totalHits/u),p===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),s.form.reset(),d();return}d(),s.form.reset(),f(e.hits),b.refresh(),h()}catch(e){i.error({title:"Error",message:`${e}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});s.loadMoreBtn.addEventListener("click",async()=>{m(),y();try{l++;const r=await g(w,l,u);r.hits.length!==0&&(f(r.hits),b.refresh(),d()),M(l,p),skipOldElement()}catch(r){s.gallery.innerHTML=" ",i.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
