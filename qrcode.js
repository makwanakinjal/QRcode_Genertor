function generateqrcode(){
    let website = document.getElementById("website").value;

    if(website){
        let qrcodecontainer = document.getElementById("qrcode");
        qrcodecontainer.innerHTML="";
        new Qrcode(qrcodecontainer , website);

        document.getElementById("qrcode_container").style.display="block";

    }
    else{
        alert("Please enter a valid URL");
        return false;
    }

}