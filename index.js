import{i as c,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m=r=>`
       
            <li class='gallery-card'>
                <a class='gallery-link' href='${r.largeImageURL}'>
                    <img class='gallery-img' src='${r.webformatURL}' alt='${r.tags}' />
                    <div class='img-card'>
                        <span class='span-text'>Likes <span class='span-number'>${r.likes}</span></span>
                        <span class='span-text'>Views <span class='span-number'>${r.views}</span></span>
                        <span class='span-text'>Comments <span class='span-number'>${r.comments}</span></span>
                        <span class='span-text'>Downloads <span class='span-number'>${r.downloads}</span></span>
                    </div>
                </a>
            </li>`,d=r=>{const a=new URLSearchParams({key:"48454112-2bb14e2eb4c862c9f6d932a5d",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"9"});return fetch(`https://pixabay.com/api/?${a}`).then(t=>{if(!t.ok)throw new Error(responce.status);return t.json()})},u=document.querySelector(".js-search-form"),o=document.querySelector(".js-gallery"),i=document.querySelector(".loader"),h=r=>{r.preventDefault();const a=r.currentTarget.elements.text_q.value.trim();if(a===""){c.warning({title:"Caution",message:"Please, enter valid search requirements!"});return}i.style.display="block",o.innerHTML="",d(a).then(t=>{if(t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),o.innerHTML="",u.reset();return}const n=t.hits.map(s=>m(s)).join("");o.innerHTML=n;const e=new p(".gallery-card a.gallery-link  ",{});console.log(e)}).catch(t=>{o.innerHTML===""&&(console.err("Error fetching data:",t),c.err({title:"Error",message:"An error occurred while searching for images"}))}).finally(()=>{i.style.display="none"})};u.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
