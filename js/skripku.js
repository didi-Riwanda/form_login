function masuk(){
    let lgn, eml, pass;

    lgn = window.document.getElementById("form_login");
    eml = lgn.nama.value;
    pass = lgn.password.value;

    if(eml == "mimin" && pass == "mimin123"){
        alert(`Selamat datang ${eml}, anda Administrator`);
    }else if(eml == "budi" && pass == "budi123"){
        alert(`Selamat datang ${eml}, anda Operator`);
    }else{
        alert(`Maaf anda gagal login!!`); 
    }
}
