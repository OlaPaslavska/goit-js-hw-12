import{a as q,i as n,S as x}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const M=q.create({baseURL:"https://pixabay.com/"});async function f(r,t,o){try{const i={key:"44654317-b43c54b885daf7a418bb31fe3",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o};return(await M.get("api/",{params:i})).data}catch{n.error({title:"Error",message:`${err}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const d={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};async function h(r){let t=r.map(o=>`<li class="gallery-item">
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
</li>`).join("");d.gallery.insertAdjacentHTML("beforeend",t)}function b(){d.loader.classList.remove("hidden")}function p(){d.loader.classList.add("hidden")}function L(){d.loadMoreBtn.classList.remove("hidden")}function l(){d.loadMoreBtn.classList.add("hidden")}function w(r=0,t=0){const i=d.gallery.children[0].getBoundingClientRect().height;window.scrollBy({top:i*2,left:t,behavior:"smooth"})}const a={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let u="",c=1,g=15,y=1;const B=new x(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.form.addEventListener("submit",async r=>{if(r.preventDefault(),u=a.input.value.trim(),c=1,u===""){a.gallery.innerHTML=" ",n.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"}),a.form.reset();return}b(),a.gallery.innerHTML=" ",l();try{const t=await f(u,c,g);if(y=Math.ceil(t.totalHits/g),t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),p(),l(),a.form.reset();return}h(t.hits),B.refresh(),c<y?L():l(),p(),a.form.reset()}catch(t){n.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});a.loadMoreBtn.addEventListener("click",async()=>{l(),b(),c++;try{const r=await f(u,c,g);r.hits.length==0||c>=y?(l(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:5e3}),l()):(h(r.hits),B.refresh(),L()),p(),w()}catch(r){a.gallery.innerHTML=" ",n.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
