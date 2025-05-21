import{a as d,i as u,S as m}from"./assets/vendor-vwbIfzmB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function f(i){return d.get("https://pixabay.com/api/",{params:{key:"50312672-6ff896f2a2c8f700d68e76dd9",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data.hits.length===0?(u.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"white",messageColor:"white"}),[]):r.data.hits.map(t=>({webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,tags:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads})))}const g=document.querySelector(".gallery");document.querySelector(".form");const c=document.querySelector(".input");document.querySelector(".loader");let y=new m(".gallery a",{captions:!0,captionsData:"title",captionDelay:250,captionPosition:"bottom"});function p(i){i.preventDefault();const r=c.value.trim();if(r===""){u.warning({message:"Будь ласка, введіть запит",position:"topRight",backgroundColor:"rgb(255, 0, 34)",titleColor:"white",messageColor:"white"});return}b(),v(),f(r).then(t=>{h(t),y.refresh()}).catch(t=>{console.error("Помилка при завантаженні зображень:",t)}).finally(()=>{L(),c.value=""})}function h(i){const r=i.map(({webformatURL:t,largeImageURL:n,tags:e,likes:o,views:a,comments:s,downloads:l})=>`
      <li class="gallery-item">
        <a href="${n}" class="image-container" alt="${e}">
          <img src="${t}"
               alt="${e}"
               title="Likes: ${o} | Views: ${a} | Comments: ${s} | Downloads: ${l}" />
          <div class="info-overlay">
            <div class="info-item"><b>Likes</b>: ${o}</div>
            <div class="info-item"><b>Views</b>: ${a}</div>
            <div class="info-item"><b>Comments</b>: ${s}</div>
            <div class="info-item"><b>Downloads</b>: ${l}</div>
          </div>
        </a>
      </li>`).join("");g.innerHTML=r}function b(){const i=document.querySelector(".gallery");i.innerHTML=""}function v(){document.querySelector(".loader").classList.add("is-visible")}function L(){document.querySelector(".loader").classList.remove("is-visible")}const w=document.querySelector(".form");w.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
