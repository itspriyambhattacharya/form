const E=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};E();let a=document.getElementById("registration-form-head"),m=document.getElementById("login-form-head"),u=document.getElementById("register-btn"),g=document.getElementById("login-btn"),f=document.getElementById("login-p"),p=document.getElementById("register-p"),B=document.getElementById("register-span"),I=document.getElementById("login-span"),h=document.getElementById("type_of_user"),L=document.getElementById("f-name"),c=document.getElementById("f-c-password");B.addEventListener("click",function(n){document.title="Registration Form",f.classList.remove("hidden"),p.classList.add("hidden"),g.classList.add("hidden"),u.classList.remove("hidden"),m.classList.add("hidden"),a.classList.remove("hidden"),h.classList.remove("hidden"),L.classList.remove("hidden"),c.classList.remove("hidden")});I.addEventListener("click",function(n){document.title="Login Form",f.classList.add("hidden"),p.classList.remove("hidden"),g.classList.remove("hidden"),u.classList.add("hidden"),m.classList.remove("hidden"),a.classList.add("hidden"),h.classList.add("hidden"),L.classList.add("hidden"),c.classList.add("hidden")});const o=document.getElementById("pass-inp"),l=document.getElementById("f-c-password");console.log(o);console.log(c);const _=document.getElementById("password-error");let y=0;o.addEventListener("focus",function(n){y++,y>1&&_.classList.toggle("hidden")});o.addEventListener("blur",function(n){o.value.length<8?(console.log("Password Should Be Greater than 8"),_.classList.toggle("hidden")):console.log("Ok Password")});const v=document.getElementById("c-password-error");l.addEventListener("focus",function(n){let s=l.value.length;console.log("cp_len is"+s),s>0&&v.classList.toggle("hidden")});l.addEventListener("blur",function(n){let s=o.value,d=l.value;d.length>0&&(s.localeCompare(d)==0?console.log("Password Matches"):(v.classList.toggle("hidden"),console.log("Password Doesnot Matches")))});