(function () {
      var main = document.getElementById("galeriaMain");
      if (!main) return;

      var img = document.getElementById("galeriaMainImg");
      var bg = document.getElementById("galeriaMainBg");
      var placeholder = document.getElementById("galeriaPlaceholder");
      var thumbs = document.querySelectorAll(".galeria-thumb");

      // Ajusta o enquadramento conforme a orientação da foto:
      // fotos verticais aparecem inteiras (contain) sobre o fundo desfocado,
      // fotos horizontais preenchem toda a área (cover).
      function ajustarOrientacao() {
        if (!img.naturalWidth || !img.naturalHeight) return;
        var vertical = img.naturalHeight > img.naturalWidth * 1.05;
        main.classList.toggle("is-portrait", vertical);
        main.classList.toggle("is-landscape", !vertical);
      }

      img.addEventListener("load", ajustarOrientacao);

      function mostrarImagem(src, label) {
        if (src) {
          if (bg) bg.style.backgroundImage = "url('" + src + "')";
          img.src = src;
          img.alt = label || "";
          img.hidden = false;
          main.classList.add("has-image");
          if (placeholder) placeholder.hidden = true;
          if (img.complete) ajustarOrientacao();
        } else {
          img.hidden = true;
          main.classList.remove("has-image", "is-portrait", "is-landscape");
          if (bg) bg.style.backgroundImage = "";
          if (placeholder) {
            placeholder.hidden = false;
            placeholder.textContent = label || "";
          }
        }
      }

      thumbs.forEach(function (thumb) {
        var thumbSrc = thumb.getAttribute("data-src");
        if (thumbSrc) {
          thumb.style.backgroundImage = "url('" + thumbSrc + "')";
          thumb.classList.add("has-image");
          thumb.textContent = "";
        }
        thumb.addEventListener("click", function () {
          thumbs.forEach(function (t) {
            t.classList.remove("active");
          });
          thumb.classList.add("active");
          mostrarImagem(thumb.getAttribute("data-src"), thumb.getAttribute("data-label") || "");
        });
      });

      // Inicializa com a miniatura ativa (ou a primeira).
      var inicial = document.querySelector(".galeria-thumb.active") || thumbs[0];
      if (inicial) {
        mostrarImagem(inicial.getAttribute("data-src"), inicial.getAttribute("data-label") || "");
      }
    })();