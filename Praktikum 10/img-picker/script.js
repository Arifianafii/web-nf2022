function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "purple") {
        images.src = "image/anggrek.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar anggrek.jpg";
        alert("Ini adalah gambar anggrek.jpg");
    } else if (picker == "white") {
        images.src = "image/edelweiss.png";
        images.width = 300;
        images.alt = "Ini adalah gambar edelweiss.png";
        alert("Ini adalah gambar edelweiss.png");
    } else if (picker == "white") {
        images.src = "image/kamboja.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar kamboja.jpg";
        alert("Ini adalah gambar kamboja.jpg");
    } else if (picker == "purple") {
        images.src = "image/lavender.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar lavender.jpg";
        alert("Ini adalah gambar lavender.jpg");
    } else if (picker == "white") {
        images.src = "image/lily.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar lily.jpg";
        alert("Ini adalah gambar lily.jpg");
    } else if (picker == "yellow") {
        images.src = "image/matahari.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar matahari.jpg";
        alert("Ini adalah gambar matahari.jpg");
    } else if (picker == "red") {
        images.src = "image/mawar.png";
        images.width = 300;
        images.alt = "Ini adalah gambar mawar.png";
        alert("Ini adalah gambar mawar.png");
    } else if (picker == "pink") {
        images.src = "image/sakura.png";
        images.width = 300;
        images.alt = "Ini adalah gambar sakura.png";
        alert("Ini adalah gambar sakura.png");
    } else {
        alert("Gagal");
    }
}