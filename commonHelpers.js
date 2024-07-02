import{a as q,i as l,S as M}from"./assets/vendor-f144e563.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const x=q.create({baseURL:"https://pixabay.com/"});async function L(t,e,o){try{const i={key:"44654317-b43c54b885daf7a418bb31fe3",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:o};return(await x.get("api/",{params:i})).data}catch{l.error({title:"Error",message:`${err}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const d={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};async function y(t){let e=t.map(o=>`<li class="gallery-item">
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
</li>`).join("");d.gallery.insertAdjacentHTML("beforeend",e)}function B(){d.loader.classList.remove("hidden")}function m(){d.loader.classList.add("hidden")}function b(){d.loadMoreBtn.classList.remove("hidden")}function f(){d.loadMoreBtn.classList.add("hidden")}function w(t,e,o){t>=e||data.hits.length<o?(f(),e&&l.info({title:"The end!",message:"We're sorry, but you've reached the end of search results."})):b()}function S(t=0,e=0){const i=d.gallery.children[0].getBoundingClientRect().height;window.scrollBy({top:i*2,left:e,behavior:"smooth"})}const a={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let u="",n=1,p=15,c=1;const h=new M(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.form.addEventListener("submit",async t=>{if(t.preventDefault(),u=a.input.value.trim(),n=1,u===""){a.gallery.innerHTML=" ",l.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"}),a.form.reset();return}B(),a.gallery.innerHTML=" ";try{const e=await L(u,n,p);if(c=Math.ceil(e.totalHits/p),c===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),a.form.reset(),m();return}m(),a.form.reset(),y(e.hits),h.refresh(),b()}catch(e){l.error({title:"Error",message:`${e}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});a.loadMoreBtn.addEventListener("click",async()=>{f(),B(),n++;try{const t=await L(u,n,p);if(c=Math.ceil(t.totalHits/p),t.hits.length==0||n>=c){y(t.hits),h.refresh(),m(),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:5e3}),f();return}y(t.hits),h.refresh(),m(),n<c&&b(),w(n,c),S()}catch(t){a.gallery.innerHTML=" ",l.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
