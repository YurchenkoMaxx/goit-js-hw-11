import{a as f,i as n,S as g}from"./assets/vendor-vwbIfzmB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function p(i){return f.get("https://pixabay.com/api/",{params:{key:"50312672-6ff896f2a2c8f700d68e76dd9",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data.hits.length===0?(n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"white",messageColor:"white"}),[]):r.data.hits.map(t=>({webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,tags:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads})))}const d=document.querySelector(".gallery"),m=document.querySelector(".loader");let y=new g(".gallery a",{captions:!0,captionsData:"title",captionDelay:250,captionPosition:"bottom"});function h(i){const r=i.map(({webformatURL:t,largeImageURL:a,tags:e,likes:o,views:s,comments:l,downloads:c})=>`
      <li class="gallery-item">
        <a href="${a}" class="image-container" alt="${e}">
          <img src="${t}"
               alt="${e}"
               title="Likes: ${o} | Views: ${s} | Comments: ${l} | Downloads: ${c}" />
          <div class="info-overlay">
            <div class="info-item"><b>Likes</b>: ${o}</div>
            <div class="info-item"><b>Views</b>: ${s}</div>
            <div class="info-item"><b>Comments</b>: ${l}</div>
            <div class="info-item"><b>Downloads</b>: ${c}</div>
          </div>
        </a>
      </li>`).join("");d.innerHTML=r,y.refresh()}function b(){d.innerHTML=""}function v(){m.classList.add("is-visible")}function w(){m.classList.remove("is-visible")}const L=document.querySelector(".form"),u=document.querySelector(".input");L.addEventListener("submit",$);function $(i){i.preventDefault();const r=u.value.trim();if(r===""){n.warning({message:"Будь ласка, введіть запит",position:"topRight",backgroundColor:"#ef4040",titleColor:"white",messageColor:"white"});return}b(),v(),p(r).then(t=>{t.length>0&&h(t)}).catch(t=>{console.error("Помилка при завантаженні зображень:",t),n.error({message:"Виникла помилка при завантаженні. Спробуйте ще раз.",position:"topRight",backgroundColor:"#ef4040",titleColor:"white",messageColor:"white"})}).finally(()=>{w(),u.value=""})}
//# sourceMappingURL=index.js.map
