import{a as b}from"./authGuard-DDO8JLiG.js";import{r as h}from"./read-BRPGqXkT.js";import{d as x,i as f}from"./isAuthor-BHcnrvJ4.js";import"./constants-D_jcPeRz.js";async function y(t){if(!confirm("Are you sure you want to delete this post?"))return;let n;try{n=x(t)}catch{alert(`error: ${n.errors[0].message}`)}setTimeout(()=>{window.location.reload()},200)}function E(){window.localStorage.clear(),window.location.reload()}b();const v=document.getElementById("all-posts"),p=await h();for(let t=0;t<p.data.length;t++){const{title:u,body:n,media:s,tags:g,id:m,author:w}=p.data[t],r=document.createElement("div");r.classList="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow";const a=document.createElement("h3");a.innerText=u,a.classList="text-lg font-semibold text-primary mb-2";const e=document.createElement("img");s?.url?(e.src=s?.url,e.alt=s?.alt,e.classList="w-full aspect-video object-cover rounded mb-2"):(e.src="../../../public/images/noImage.jpg",e.alt="No Image",e.classList="w-full aspect-video object-cover rounded mb-2");const i=document.createElement("p");i.innerText=n,i.classList="text-gray-700 mb-4";const d=document.createElement("p");d.innerText=`Tags: ${g.join(" ")}`,d.classList="text-sm text-secondary mb-4";const o=document.createElement("button");if(o.innerText="View Post",o.classList="text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600 mr-2",o.addEventListener("click",()=>{window.location.href=`${window.location.origin}/post/?id=${m}`}),f(w.name)){const l=document.createElement("button");l.innerText="Edit",l.classList="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 mr-2",l.addEventListener("click",()=>{window.location.href=`${window.location.origin}/post/edit/?id=${m}`});const c=document.createElement("button");c.innerText="Delete",c.classList="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600",c.addEventListener("click",()=>{y(m)}),r.append(a,e,i,d,o,l,c)}else r.append(a,e,i,d,o);v.append(r)}const L=document.getElementById("logout-btn");L.addEventListener("click",()=>{E()});
