const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r;const a=t=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`};t.addEventListener("click",(()=>{r=setInterval(a,1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(()=>{clearInterval(r),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.3ba60dcc.js.map
