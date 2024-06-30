import{a as q,i as n,S as M}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const x=q.create({baseURL:"https://pixabay.com/",apiKey:"44654317-b43c54b885daf7a418bb31fe3"});async function f(r,t,o){try{const i={key:"44654317-b43c54b885daf7a418bb31fe3",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o};return(await x.get("api/",{params:i})).data}catch{n.error({title:"Error",message:`${err}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const c={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};async function h(r){const t=r.map(o=>`<li class="gallery-item">
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
</li>`).join("");c.gallery.innerHTML("beforeend",t)}function b(){c.loader.classList.remove("hidden")}function p(){c.loader.classList.add("hidden")}function L(){c.loadMoreBtn.classList.remove("hidden")}function g(){c.loadMoreBtn.classList.add("hidden")}function S(r,t){r>=t?(g(),t&&n.info({title:"The end!",message:"We're sorry, but you've reached the end of search results."})):L()}const s={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let d="",l=1,m=15,y=1;const B=new M(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});s.form.addEventListener("submit",async r=>{if(r.preventDefault(),d=s.input.ariaValueMax.trim(),l=1,g(),d===""){s.gallery.innerHTML=" ",n.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"}),s.form.reset();return}b(),s.gallery.innerHTML=" ";try{const t=await f(d,l,m);if(y=Math.ceil(t.totalHits/m),y===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),s.form.reset(),p();return}p(),s.form.reset(),h(t.hits),B.refresh(),L()}catch(t){n.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});s.loadMoreBtn.addEventListener("click",async()=>{g(),b();try{l++;const r=await f(d,l,m);r.hits.length!==0&&(h(r.hits),B.refresh(),p()),S(l,y),skipOldElement()}catch(r){s.gallery.innerHTML=" ",n.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
