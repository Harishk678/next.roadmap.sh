import{a}from"./js.cookie.cf83ad76.js";import{T as w}from"./constants.007bcfeb.js";const n=document.getElementById("github-login-button"),u=document.getElementById("github-login-spinner"),m=document.querySelector("[data-github-text]"),c=document.querySelector("[data-github-error]");function f(){m?.classList.add("hidden"),u?.classList.remove("hidden"),n?.setAttribute("disabled","true")}function l(){m?.classList.remove("hidden"),u?.classList.add("hidden"),n?.removeAttribute("disabled")}function b(e){c?.classList.remove("hidden"),c&&(c.innerHTML=e.message)}n?.addEventListener("click",()=>{f(),fetch("http://localhost:8080/v1-github-login",{credentials:"include"}).then(e=>{if(e.ok)return e.json();throw new Error("Something went wrong.")}).then(e=>{if(e.loginUrl)window.location.href=e.loginUrl,n?.removeAttribute("disabled");else throw new Error("Something went wrong.")}).catch(e=>{l(),b(e)})});window.addEventListener("load",()=>{const e=new URLSearchParams(window.location.search),r=e.get("code"),i=e.get("state"),s=e.get("provider");r&&i&&s==="github"&&(f(),fetch(`http://localhost:8080/v1-github-callback${window.location.search}`,{method:"GET",credentials:"include"}).then(t=>{if(t.ok)return t.json();throw new Error("Something went wrong.")}).then(t=>{if(l(),t.token)a.set(w,t.token),window.location.href="/";else throw new Error("Something went wrong.")}).catch(t=>{l(),b(t)}))});const h=document.getElementById("google-login-button"),E=document.querySelector("[data-google-login-spinner]"),L=document.querySelector("[data-google-text]"),d=document.querySelector("[data-google-error]");function p(){L?.classList.add("hidden"),E?.classList.remove("hidden"),h?.setAttribute("disabled","true")}function g(){L?.classList.remove("hidden"),E?.classList.add("hidden"),h?.setAttribute("disabled","true")}function S(e){d?.classList.remove("hidden"),d&&(d.innerHTML=e.message)}h?.addEventListener("click",()=>{p(),fetch("http://localhost:8080/v1-google-login",{credentials:"include"}).then(e=>{if(e.ok)return e.json();throw new Error("Something went wrong.")}).then(e=>{if(e.loginUrl)window.location.href=e.loginUrl;else throw new Error("Something went wrong.")}).catch(e=>{g(),S(e)})});window.addEventListener("load",()=>{const e=new URLSearchParams(window.location.search),r=e.get("code"),i=e.get("state"),s=e.get("prompt"),t=e.get("provider");r&&i&&s&&t==="google"&&(p(),fetch(`http://localhost:8080/v1-google-callback${window.location.search}`,{method:"GET",credentials:"include"}).then(o=>{if(o.ok)return o.json();throw new Error("Something went wrong.")}).then(o=>{if(g(),o.token)a.set(w,o.token),history.go(-2);else throw new Error("Something went wrong.")}).catch(o=>{g(),S(o)}))});