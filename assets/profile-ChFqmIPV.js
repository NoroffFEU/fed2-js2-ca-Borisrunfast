import{a as s}from"./authGuard-DDO8JLiG.js";import{b as c,a as d}from"./constants-D_jcPeRz.js";async function l(n){return(await(await fetch(`${c}/${n}`,{method:"GET",headers:{Authorization:`Bearer ${JSON.parse(localStorage.accessToken)}`,"X-Noroff-API-Key":d}})).json()).data}function i(){alert("This feature will be implemented soon!")}s();const m=window.location.search,u=new URLSearchParams(m);let a=u.get("username");a||(a=JSON.parse(localStorage.userData).name);const{name:f,bio:p,avatar:t}=await l(a),h=document.getElementById("profile-body"),r=document.createElement("h2");r.innerText=f;r.classList="text-2xl font-bold text-primary text-center";const e=document.createElement("img");t?.url?(e.src=t.url,e.alt=t.alt||"Profile picture",e.classList="w-24 h-24 rounded-full border-4 border-secondary shadow-md"):(e.src="/images/default-avatar.png",e.alt="Default avatar",e.classList="w-24 h-24 rounded-full border-4 border-secondary shadow-md");const o=document.createElement("p");o.innerText=p;o.classList="text-gray-700 text-center mt-4 px-4";h.append(e,r,o);const g=document.getElementById("update-profile-btn");g.addEventListener("click",()=>{i()});
