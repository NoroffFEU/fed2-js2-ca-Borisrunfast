import{A as e,a as t}from"./constants-D_jcPeRz.js";async function n(a){fetch(`${e}/${a}`,{method:"DELETE",headers:{"content-Type":"application/json",Authorization:`Bearer ${JSON.parse(localStorage.accessToken)}`,"X-Noroff-API-Key":t}})}function c(a){return JSON.parse(localStorage.getItem("userData")).name==a}export{n as d,c as i};
