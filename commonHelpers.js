import{a as q,i,S as x}from"./assets/vendor-f144e563.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const M=q.create({baseURL:"https://pixabay.com/"});async function h(s,e,r){try{const n={key:"44654317-b43c54b885daf7a418bb31fe3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:r};return(await M.get("api/",{params:n})).data}catch{i.error({title:"Error",message:`${err}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const c={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};async function b(s){let e=s.map(r=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${r.largeImageURL}">
        <image 
        width="360";
        height="200";
         class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"/>
        </a>
        <div class="gallery-card-container">
       <ul class="text-list">
     <li class="text-item">
       <p class="text-item-name"><strong>Likes:</strong></p>
       <p class="text-item-quantity">${r.likes}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Views</strong></p>
       <p class="text-item-quantity">${r.views}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Comments</strong></p>
       <p class="text-item-quantity">${r.comments}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Downloads</strong></p>
       <p class="text-item-quantity">${r.downloads}</p>
     </li>
   </ul>
</div>
</li>`).join("");c.gallery.insertAdjacentHTML("beforeend",e)}function L(){c.loader.classList.remove("hidden")}function d(){c.loader.classList.add("hidden")}function g(){c.loadMoreBtn.classList.remove("hidden")}function y(){c.loadMoreBtn.classList.add("hidden")}function w(s=0,e=0){const n=c.gallery.children[0].getBoundingClientRect().height;window.scrollBy({top:n*2,left:e,behavior:"smooth"})}const a={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let u="",l=1,f=15,m=1;const B=new x(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.form.addEventListener("submit",async s=>{if(s.preventDefault(),u=a.input.value.trim(),l=1,y(),u===""){a.gallery.innerHTML=" ",i.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"}),a.form.reset();return}L(),a.gallery.innerHTML=" ";try{const e=await h(u,l,f);if(m=Math.ceil(e.totalHits/f),m===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),a.form.reset(),d();return}d(),a.form.reset(),b(e.hits),B.refresh(),g()}catch(e){i.error({title:"Error",message:`${e}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});a.loadMoreBtn.addEventListener("click",async()=>{L(),l++;try{const e=await h(u,l,f);if(e.hits.length==0||l>=m){i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:5e3}),d(),y();return}b(e.hits),B.refresh(),d(),g(),s(l,m),w()}catch(e){a.gallery.innerHTML=" ",i.error({title:"Error",message:`${e}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}function s(e,r){e>=r?(y(),r&&i.info({title:"The end!",message:"We're sorry, but you've reached the end of search results."})):g()}});
//# sourceMappingURL=commonHelpers.js.map
