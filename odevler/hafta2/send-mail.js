/*

Mail adresi için yapılması gereken ayarlar
https://myaccount.google.com/lesssecureapps
Buradan izin ver,

*/


var el=document.querySelector(".contact-form");
if(el){
    el.addEventListener("submit",submitForm);
}
else{
    console.log("contact-form okunamadı");
}



function submitForm(e){
    e.preventDefault();

    //Get İnput Values

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, message);

}
 

// Send Email Info  
function sendEmail(name, email, message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "alikader123.123@gmail.com",
        Password: "alikeser",
        To: "alikader123.123@gmail.com",
        From: "alikader123.123@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Gonderen: ${name} <br/> İletisim: ${email} <br/> Mesaj: ${message}`,

    }).then((message) => alert("Mesajiniz iletilmistir."));




}