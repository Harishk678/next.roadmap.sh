document.querySelector("[close-sponsor]")?.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),document.getElementById("sponsor-ad")?.classList.add("hidden")});window.setTimeout(()=>{const e=document.querySelector("#sponsor-ad");e&&(e.classList.remove("hidden"),e.classList.add("flex"))},500);window.fireEvent=e=>{const{action:n,category:t,label:o,value:s}=e;if(!window.gtag){console.warn("Missing GTAG - Analytics disabled");return}window.__DEBUG__&&console.log("Analytics event fired",e),window.gtag("event",n,{event_category:t,event_label:o,value:s})};