const form = document.querySelector("form");

form.addEventListener("submit", async(e)=>{
    e.preventDefault();

    const nome = document.querySelector("#name").value;
    const telefone = document.querySelector("#phone").value;
    const servico = document.querySelector("#service").value;
    const data = document.querySelector("#date").value;
    const horario = document.querySelector("#time").value;

    try {
        const resposta = await fetch("https://gabriel-s574.onrender.com/agendamentos", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(
            {
                nome,
                telefone,
                servico,
                data,
                horario
            })
        })

        const resultado = await resposta.text();

        alert(resultado);

    } catch (error) {
        alert("erro ao enviar o agendamento" + error);
    }

});