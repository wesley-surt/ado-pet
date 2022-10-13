
import { listaDeErrosPersonalizados } from "../modulos/listaDeErrosPersonalizados.js";

export var RetornaErroPersonalizado = (input) => {
    var tipoDoInput = input.name;

    if (tipoDoInput in listaDeErrosPersonalizados) {
        var mensagemPersonalizada = listaDeErrosPersonalizados[tipoDoInput];
        return mensagemPersonalizada;
    }
}
