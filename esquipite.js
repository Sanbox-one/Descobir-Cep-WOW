async function buscarCEP() {
    let cep = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      let response = await fetch(url);
      let dados = await response.json();

      if (dados.erro) {
        document.getElementById("resultado").innerHTML = "CEP não encontrado!";
      } else {
        // pedir número da casa
        let numero = document.getElementById("numeroCasa").value;

        document.getElementById("resultado").innerHTML = `
          <div class="card">
            <h4>Endereço:</h4>
            <p><strong>Rua:</strong> ${dados.logradouro}, ${numero}</p>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade:</strong> ${dados.localidade}</p>
            <p><strong>Estado:</strong> ${dados.uf}</p>
          </div>
        `;
      }
    } catch (e) {
      document.getElementById("resultado").innerHTML = "Erro ao consultar CEP!";
    }
  }