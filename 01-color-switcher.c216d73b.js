const t={body:document.querySelector("body"),buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]")};let o=null;t.buttonStart.addEventListener("click",(function(e){e.preventDefault(),t.buttonStart.disabled=!0,o=setInterval((()=>{const o=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.body.style.backgroundColor=o}),1e3)})),t.buttonStop.addEventListener("click",(function(e){t.buttonStart.disabled=!1,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.c216d73b.js.map
