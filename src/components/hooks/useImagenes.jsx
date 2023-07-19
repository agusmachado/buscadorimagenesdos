import { useContext } from "react";
import ImagenesContext from "../context/ImagenesProvider";

const useImagenes = () => {
    return useContext(ImagenesContext)
}

export default useImagenes

// Al utilizar el hook, traigo los datos del context y los paso a todos los componentes, ahorrando líneas de código en cada uno de ellos y simplificando la visualización del código