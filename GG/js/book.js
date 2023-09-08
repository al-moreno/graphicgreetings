// Booking form submistion
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // stop submission
    const html = [...this.elements]
      .filter(ele => {
        if (ele.type === "text" || ele.type==="email") return true;
        if (ele.type === "checkbox" && ele.checked) return true;
        if (ele.type === "submit" || ele.type === "reset") return false;
      })
      .map(ele => {
        const name = ele.name
        const value = ele.value;
        if (ele.classList.contains("thingslike")) return `<tr class="thingslike"><td>${ele.name}</td><td>&nbsp;</td></tr>`
        else return `<tr><td>${ele.name}</td><td>${ele.value}</td></tr>`
      }).join("");
    document.getElementById("res").innerHTML = 
    `<h2 class="h1-responsive font-weight-bold text-center my-5">THANK YOU FOR YOUR SUBMISSION!</h2> 
    <p class="text-center w-responsive mx-auto mb-5">
    A team member will be in touch within 24 hours.</p>
    <p>You have indicated that you understand that the exhibit and/or decorations are on a rental basis, and while on my property, you assume responsibility for any absent artworks, decorations, and/or ornaments and that checking this option and submitting this form constitutes an electronic signature of this form. </p>
    <p><span class="small-font">Note: Consider printing this for your records.  </span>  </p>`;
     const like = document.querySelector("#answer .thingslike");
     if (like) like.insertAdjacentHTML("beforebegin",`<tr><td colspan="2">Things you like:</td></tr>`)
  });
  
