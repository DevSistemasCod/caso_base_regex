document.addEventListener("DOMContentLoaded", function() {
    //entrada
    let nomeInput = document.getElementById("nome");
    let dataInput = document.getElementById("data");

    //saida p
    let saidaNome = document.getElementById("saidaNome");
    let saidaTelefone = document.getElementById("saidaTelefone");
    let saidaData = document.getElementById("saidaData");

    //botao
    let enviarButton = document.getElementById("enviar");

    enviarButton.addEventListener("click", function() {
        validarNome(nomeInput.value);
        validarTelefone();
        validarData(dataInput.value);
    });

    /**
     Explicação da REGEX: /^[a-zA-Z\s]+$/
     regex começam e terminam com barras /
     ^ indica o início da string
     [ ] define um conjunto de caracteres permitidos.
     a-z: todas as letras minúsculas 'a' a 'z'.
     A-Z: todas as letras minúsculas 'A' a 'Z'.
     \s: representa um espaço em branco. 
     +: indica que o conjunto de caracteres anterior [a-zA-Z\s] pode ocorrer uma ou mais vezes. Em outras palavras, ele permite que haja uma ou mais letras ou espaços em branco em sequência.
     $: informa o fim da string.
     
    **/
    function validarNome(nome) {
        let regex = /^[a-zA-Z\s]+$/; // Apenas letras maiúsculas, minúsculas e espaços
        if (regex.test(nome)) {
            //saidaNome.textContent = "";
            //saida válida ... algo pode ser feito com essa variável agora
            console.log(nome);
        } else {
            saidaNome.textContent = "Nome inválido";
        }
    }
    
    /**
     ^: Isso denota o início da string.
    (0[1-9]|[12][0-9]|3[01]): Esta parte valida o dia. 
        0[1-9]:  dias de "01" a "09". 
        [12][0-9]: dias de "10" a "29"
        3[01]: Isso permite que o dia seja "30" ou "31".
           Os únicos números que terminam com "0" ou "1" são "30" e "31".

        \/: Isso corresponde ao caractere de barra (/), 
        que separa o dia e o mês em datas no formato "dd/mm".

    (0[1-9]|1[0-2]): Esta parte valida o mês. Vamos dividi-la em duas partes:
      0[1-9]: mês de "01" a "09"
      1[0-2]: mês de "10" a "12".

    $: marca o final da string. 
     */
    function validarData(data) {
        let regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/; // dd/mm
        if (regex.test(data)) {
            saidaData.textContent = "";
            console.log(data);
        } else {
            saidaData.textContent = "Data inválida";
        }
    }


    function validarTelefone() {
        let codigoTelefone = document.getElementById('codigoTelefone1').value;
        let parte1Telefone = document.getElementById('parte1Telefone').value;
        let parte2Telefone = document.getElementById('parte2Telefone').value;
    
        let telefoneInput = codigoTelefone + parte1Telefone + parte2Telefone;
        

        // Use uma regex para validar a string do telefone
        let regex = /^\d{10}$/;
    
        if (regex.test(telefoneInput)) {
            saidaTelefone.textContent = "";
            let numeroTel = (parte1Telefone + parte2Telefone);
            console.log(codigoTelefone + " " + numeroTel);
            
            
        } else {
            saidaTelefone.textContent = "Telefone inválido";
        }
    }
});
