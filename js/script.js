const forms = document.querySelector(".forms"),
      psdShowHide = document.querySelectorAll(".hide-btn"),
      links = document.querySelectorAll(".link");
      
psdShowHide.forEach(hideBtn => {
    hideBtn.addEventListener("click", () => {
        let psdFields = hideBtn.parentElement.parentElement.querySelectorAll(".password");

        psdFields.forEach(password =>{
            if(password.type === "password"){
                password.type = "text";
                hideBtn.classList.replace("bx-hide","bx-show");
                return;
            }
            password.type = "password";
            hideBtn.classList.replace("bx-show", "bx-hide");


        })


    })
}) 

links.forEach(link => {
    link.addEventListener("click", e=> {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})
function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }





    

