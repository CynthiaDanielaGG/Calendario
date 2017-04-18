  function estructurar(){
    var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
       //Título
       let mes = document.createElement("DIV");
       mes.className = "mes";
       document.body.appendChild(mes);

       let tabla_mes = document.createElement("TABLE");
       tabla_mes.className = "tabla_mes";
       mes.appendChild(tabla_mes);

       let titulo = document.createElement("CAPTION");
       titulo.className = "titulo";
       titulo.innerText = "Enero";
      //  titulo.innerText = mes_text[m];
       tabla_mes.appendChild(titulo);

    }
