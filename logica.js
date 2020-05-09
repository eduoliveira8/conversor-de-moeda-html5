      	function voltar() {
      		//voltar para a pagina da entrada
      		location.href = "entrada.html";
      	}

      	window.onload = function () {
      		chamaAPI();
      	}

      	function callback() {
      		console.log("Caiu aqui");
      		var oResponse = this;
      		var sResponseBody = oResponse.responseText;
      		var oJSON = JSON.parse(sResponseBody);
      		var sReais = oJSON.rates.BRL;

      		console.log(sReais);

      		var oUrl = new URL(location.href);
      		var sValorOrigem = oUrl.searchParams.get("valor_origem");
      		console.log(sValorOrigem);

      		document.querySelector("#valor_de_destino").value = sReais * sValorOrigem;

      	}

      	function chamaAPI() {
      		const sURL = "https://api.exchangeratesapi.io/latest";
      		var oRequest = new XMLHttpRequest();
      		oRequest.addEventListener("load", callback);
      		oRequest.open("GET", sURL);
      		oRequest.send();
      		console.log("Já passou pelo o send");
      	}