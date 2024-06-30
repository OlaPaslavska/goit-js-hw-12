import{a as B,i as a,S as x}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const M=B.create({baseURL:"https://pixabay.com/",apiKey:"44654317-b43c54b885daf7a418bb31fe3"});async function g(r,t,o){try{const i={key:"44654317-b43c54b885daf7a418bb31fe3",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o};return(await M.get("api/",{params:i})).data}catch{a.error({title:"Error",message:`${err}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const l={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};async function y(r){const t=r.map(o=>`<li class="gallery-item">
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
</li>`).join("");l.gallery.insertAdjacentHTML("beforeend",t)}function h(){l.loader.classList.remove("hidden")}function u(){l.loader.classList.add("hidden")}function b(){l.loadMoreBtn.classList.remove("hidden")}function m(){l.loadMoreBtn.classList.add("hidden")}function w(r,t){r>=t?(m(),t&&a.info({title:"The end!",message:"We're sorry, but you've reached the end of search results."})):b()}let c="",n=1,p=15,f=1;const L=new x(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});refs.form.addEventListener("submit",async r=>{if(r.preventDefault(),c=r.target.elements.text.value.trim(),n=1,m(),c===""){refs.gallery.innerHTML=" ",a.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"}),refs.form.reset();return}h(),refs.gallery.innerHTML=" ";try{const t=await g(c,n,p);if(f=Math.ceil(t.totalHits/p),f===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),refs.form.reset(),u();return}u(),refs.form.reset(),y(t.hits),L.refresh(),b()}catch(t){a.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});refs.loadMoreBtn.addEventListener("click",async()=>{m(),h();try{n++;const r=await g(c,n,p);r.hits.length!==0&&(y(r.hits),L.refresh(),u()),w(n,f),skipOldElement()}catch(r){refs.gallery.innerHTML=" ",a.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
