function CalcularIdade() {
    var dataAtual = new Date(); /*Pegamos a data Atual, que sera informada pelo navegador*/


    /*Pegamos os dados informados pelo usuario*/
    var inputDay = parseInt(document.getElementById("input-day").value);
    var inputMonth = parseInt(document.getElementById("input-month").value) - 1;
    var inputYear = parseInt(document.getElementById("input-year").value);
  
    /*pegamos a data de nascimento do usuario*/
    var dataNascimento = new Date(inputYear, inputMonth, inputDay);
    
    /*Fazemos então o calculo para chegarmos a diferença em dias da data atual e a data de nascimento*/
    var diff_miliS = dataAtual.getTime() - dataNascimento.getTime();
    var diff_S = Math.floor(diff_miliS / 1000);
    var diff_M = Math.floor(diff_S / 60);
    var diff_H = Math.floor(diff_M / 60);
    var diff_Day = Math.floor(diff_H / 24);
  
    /*Com base na diferença em dias, fazemos os seguintes calculos*/
    var years = Math.floor(diff_Day / 365);
    var months = Math.floor((diff_Day % 365) / 30.4167); /*30.4167 e a media de dias em um mês, com base neste calculo 365/12*/
    var days = Math.floor(diff_Day % 30.4167);
  
    document.getElementById("respostvalue_years").textContent = years;
    document.getElementById("respostvalue_months").textContent = months;
    document.getElementById("respostvalue_days").textContent = days;
  }









  function Verificar_Inputs () {

    var label1 = document.getElementById("label-input1");
    var label2 = document.getElementById("label-input2");
    var label3 = document.getElementById("label-input3");

    var inputDay = parseInt(document.getElementById("input-day").value);
    var inputMonth = parseInt(document.getElementById("input-month").value);
    var inputYear = parseInt(document.getElementById("input-year").value);

    var areaDAY = document.getElementById("input-day");
    var areaMONTH = document.getElementById("input-month");
    var areaYEAR = document.getElementById("input-year");

    var msDay = document.getElementById("DAYerror-info");
    var msMonth = document.getElementById("MONTHerror-info");
    var msYear = document.getElementById("YEARerror-info");



    
    /*Verifica se o dia e valido*/
    if (inputDay > 31 || inputDay === 0) {
      

      areaDAY.style.borderColor = "red";
      label1.style.color = "red";

      label1.classList.add ("tremor")


      setTimeout(function() {
      label1.classList.remove("tremor");
      }, 300);

      msDay.innerText = "Digite novamente!";
      msDay.style.fontFamily = "font-family: 'Poppins', sans-serif;"
      msDay.style.color = "red";
      msDay.style.textAlign = "center"

      setTimeout(function() {
      areaDAY.style.borderColor = "";
      label1.style.color = "";


        msDay.innerText = "";
      }, 3000)

      window.setTimeout(function() {
        location.reload();
      }, 3500);

      
    }

















    /*Verifica se o dia e valido de acordo com o mês de fevereiro*/
    if (inputMonth === 2 && inputDay > 28) {
      alert ("Dia Invalido, o mês de fevereiro não possui normalmente mais de 28 dias!")

      areaDAY.style.borderColor = "red";
      label1.style.color = "red";
      label2.style.color = "red";

    }
























    /*Verifica se o mês e valido*/
    if (inputMonth > 12 || inputMonth === 0) {
      

      areaMONTH.style.borderColor = "red";
      label2.style.color = "red";

      label2.classList.add ("tremor");

      setTimeout (function() {
      label2.classList.remove("tremor");
    }, 300);

    msMonth.innerText = "Digite novamente!";
    msDay.style.fontFamily = "font-family: 'Poppins', sans-serif;"
    msMonth.style.color = "red";
    msMonth.style.textAlign = "center"

    setTimeout(function() {
      areaMONTH.style.borderColor = "";
      label2.style.color = "";
      msMonth.innerText = "";
    }, 3000)

    window.setTimeout(function() {
      location.reload();
    }, 3500);
    
    }




















    

    /*Verifica se o ano e valido*/
    if (inputYear < 1940 || inputYear > 2100) {
      

      areaYEAR.style.borderColor = "red";
      label3.style.color = "red";

      label3.classList.add ("tremor");

      setTimeout (function() {
      label3.classList.remove("tremor");
    }, 300);

      msYear.innerText = "Digite novamente!";
      msDay.style.fontFamily = "font-family: 'Poppins', sans-serif;"
      msYear.style.color = "red";
      msYear.style.textAlign = "center"

    setTimeout(function() {
      
      areaYEAR.style.borderColor = "";
      label3.style.color = "";

      msYear.innerText = "";
    }, 3000)

    window.setTimeout(function() {
      location.reload();
    }, 3500);
    }
  }