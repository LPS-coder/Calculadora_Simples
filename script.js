function add(valor) {
    document.getElementById("display").value += valor;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calcular() {
    let conta = document.getElementById("display").value;
    
    try {
            if (conta.includes("/0")) {
                document.getElementById("display").value = "Error";
                return;
            }

            let resultado = eval(conta);
            document.getElementById("display").value = resultado;
        } catch {
            document.getElementById("display").value = "Error";
        }
    }