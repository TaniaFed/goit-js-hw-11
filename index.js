import{S as m,i}from"./assets/vendor-BrddEoy-.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=t=>`
        <li class='gallery-card'>
            <a class='gallery-link' href='${t.largeImageURL}'>
                <img class='gallery-img' src='${t.webformatURL}' alt='${t.id}' />
            </a>
        </li> `,f=t=>{const a=new URLSearchParams({key:"48454112-2bb14e2eb4c862c9f6d932a5d",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"9"});return fetch(`https://pixabay.com/api/?${a}`).then(o=>{if(!o.ok)throw new Error(responce.status);return o.json()})},u=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),c=document.querySelector(".loader"),y=t=>{t.preventDefault();const a=t.currentTarget.elements.text_q.value.trim();if(a===""){i.warning({title:"Caution",message:"Please, enter valid search requirements!"});return}c.style.display="block",l.innerHTML="",f(a).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="",u.reset();return}const s=o.hits.map(e=>d(e)).join("");l.innerHTML=s}).catch(o=>{gallery.innerHTML===""&&(console.err("Error fetching data:",o),i.err({title:"Error",message:"An error occurred while searching for images"}))}).finally(()=>{c.style.display="none"})};u.addEventListener("submit",y);const h=new m(".gallery .js-gallery a",{captionsData:"alt",captionDelay:250});console.log(h);
//# sourceMappingURL=index.js.map
