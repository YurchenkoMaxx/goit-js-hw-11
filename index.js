import{a as m,i as d,S as f}from"./assets/vendor-vwbIfzmB.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function g(r){return m.get("https://pixabay.com/api/",{params:{key:"50312672-6ff896f2a2c8f700d68e76dd9",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(i=>i.data.hits.length===0?(d.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"white",messageColor:"white"}),[]):i.data.hits.map(t=>(console.log("hit:",t),{webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,tags:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads})))}const p=document.querySelector(".gallery"),y=document.querySelector(".form"),c=document.querySelector(".input");y.addEventListener("submit",r=>{r.preventDefault();const i=c.value.trim();if(i.length===0){d.warning({message:"Будь ласка, введіть запит",position:"topRight",backgroundColor:"rgb(255, 0, 34)",titleColor:"white",messageColor:"white"});return}b(),v(),g(i).then(t=>{h(t),u()}).catch(t=>{console.error("Помилка при завантаженні зображень:",t),u()}),c.value=""});function h(r){p.innerHTML=r.map(({webformatURL:t,largeImageURL:a,tags:e,likes:o,views:s,comments:n,downloads:l})=>`
        <li class="gallery-item">
        <a href="${a}" class ="image-container" alt="${e}">
        <img src="${t}"
        alt="${e}"
        title="Likes: ${o} | Views: ${s} | Comments: ${n} | Downloads: ${l}"
        />
        <div class="info-overlay">
                    <div class="info-item"><b>Likes</b>: ${o}</div>
                    <div class="info-item"><b>Views</b>: ${s}</div>
                    <div class="info-item"><b>Comments</b>: ${n}</div>
                    <div class="info-item"><b>Downloads</b>: ${l}</div>
                </div>  
        </a>
        </li>`).join(""),new f(".gallery a",{captions:!0,captionsData:"title",captionDelay:250,captionPosition:"bottom",captionClass:""}).refresh()}function b(){const r=document.querySelector(".gallery");r.innerHTML=""}function v(){document.querySelector(".loader").classList.add("is-visible")}function u(){document.querySelector(".loader").classList.remove("is-visible")}
//# sourceMappingURL=index.js.map
