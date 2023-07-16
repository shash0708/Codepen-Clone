function finalOutput(){
     let htmlCode = document.getElementById("html-Input").value;
     let cssCode = document.getElementById("Css-Input").value;
     let jsCode = document.getElementById("js-Input").value;

     let outputCode = document.getElementById("codeExecutionOutput");

     outputCode.contentDocument.body.innerHTML = `${htmlCode}<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>`;
     outputCode.contentDocument.getElementsByTagName("head")[0].innerHTML =`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"><style>${cssCode}</style>`;
     outputCode.contentDocument.eval(jsCode);
}

function themeChanger(){
    let checkBoxDocument = document.getElementsByClassName("form-check-input")[0];
    if (checkBoxDocument.checked==true){
            document.getElementById("themeSwicther").setAttribute("data-bs-theme","dark");
            document.getElementById("navThemeSwitcher").setAttribute("data-bs-theme","dark");
            document.getElementsByTagName("nav")[0].setAttribute("class","navbar bg-body-dark");

            document.getElementById("navSwitchText").innerHTML='<i class="bi bi-moon-fill"></i>'
            
            document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName("html")[0].setAttribute("data-bs-theme","dark");

            document.getElementById("iframeBorderTheme").setAttribute("class","ratio  ratio-21x9 border border-3 border-light rounded")


    }
    else{
        document.getElementById("themeSwicther").setAttribute("data-bs-theme","light");
            document.getElementById("navThemeSwitcher").setAttribute("data-bs-theme","light");
            document.getElementsByTagName("nav")[0].setAttribute("class","navbar bg-body-info");
            document.getElementById("navSwitchText").innerHTML='<i class="bi bi-brightness-high-fill">';
            document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName("html")[0].setAttribute("data-bs-theme","light");

            document.getElementById("iframeBorderTheme").setAttribute("class","ratio  ratio-21x9 border border-3 border-dark rounded")

    }
}

const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");

     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });
     const body = document.querySelector('body'),

     modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
      modeSwitch.addEventListener("click" , () =>{
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            modeText.innerText = "Light mode";
        }else{
            modeText.innerText = "Dark mode";
            
        }
    });