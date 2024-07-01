import{a as q,i,S as x}from"./assets/vendor-f144e563.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const M=q.create({baseURL:"https://pixabay.com/"});async function h(r,e,o){try{const n={key:"44654317-b43c54b885daf7a418bb31fe3",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:o};return(await M.get("api/",{params:n})).data}catch{i.error({title:"Error",message:`${err}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const c={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};async function b(r){let e=r.map(o=>`<li class="gallery-item">
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
</li>`).join("");c.gallery.insertAdjacentHTML("beforeend",e)}function L(){c.loader.classList.remove("hidden")}function d(){c.loader.classList.add("hidden")}function f(){c.loadMoreBtn.classList.remove("hidden")}function m(){c.loadMoreBtn.classList.add("hidden")}function w(r,e){r>=e?(m(),e&&i.info({title:"The end!",message:"We're sorry, but you've reached the end of search results."})):f()}function S(r=0,e=0){const n=c.gallery.children[0].getBoundingClientRect().height;window.scrollBy({top:n*2,left:e,behavior:"smooth"})}const a={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let u="",l=1,y=15,p=1;const B=new x(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.form.addEventListener("submit",async r=>{if(r.preventDefault(),u=a.input.value.trim(),l=1,m(),u===""){a.gallery.innerHTML=" ",i.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"}),a.form.reset();return}L(),a.gallery.innerHTML=" ";try{const e=await h(u,l,y);if(p=Math.ceil(e.totalHits/y),p===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),a.form.reset(),d();return}d(),a.form.reset(),b(e.hits),B.refresh(),f()}catch(e){i.error({title:"Error",message:`${e}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});a.loadMoreBtn.addEventListener("click",async()=>{m(),L(),l++;try{const r=await h(u,l,y);if(r.hits.length==0||l>=p){b(r.hits),B.refresh(),d(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:5e3}),d(),m();return}f(),w(l,p),S()}catch(r){a.gallery.innerHTML=" ",i.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
