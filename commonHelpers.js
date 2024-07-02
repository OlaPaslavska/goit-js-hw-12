import{a as x,i as l,S as B}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const w=x.create({baseURL:"https://pixabay.com/"});async function f(r,t,o){try{const i={key:"44654317-b43c54b885daf7a418bb31fe3",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o};return(await w.get("api/",{params:i})).data}catch{l.error({title:"Error",message:`${err}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const c={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};async function h(r){let t=r.map(o=>`<li class="gallery-item">
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
</li>`).join("");c.gallery.insertAdjacentHTML("beforeend",t)}function b(){c.loader.classList.remove("hidden")}function u(){c.loader.classList.add("hidden")}function L(){c.loadMoreBtn.classList.remove("hidden")}function g(){c.loadMoreBtn.classList.add("hidden")}function M(r=0,t=0){const i=c.gallery.children[0].getBoundingClientRect().height;window.scrollBy({top:i*2,left:t,behavior:"smooth"})}const a={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let d="",n=1,y=15,m=1;const q=new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.form.addEventListener("submit",async r=>{if(r.preventDefault(),d=a.input.value.trim(),n=1,d===""){a.gallery.innerHTML=" ",l.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"}),a.form.reset();return}b(),a.gallery.innerHTML=" ",g();try{const t=await f(d,n,y);if(m=Math.ceil(t.totalHits/y),t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),u(),a.form.reset();return}h(t.hits),q.refresh(),n<m?L():g(),u(),a.form.reset()}catch(t){l.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});a.loadMoreBtn.addEventListener("click",async()=>{g(),b(),n++;try{const r=await f(d,n,y);r.hits.length==0||n>=m?(l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:5e3}),u()):(h(r.hits),q.refresh(),n<m&&L(),u(),M())}catch(r){l.error({title:"Error",message:`Error loading images: ${r}`,position:"topRight",timeout:5e3}),u()}});
//# sourceMappingURL=commonHelpers.js.map
