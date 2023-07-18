import { useContext } from "react";
import ImagenesContext from "../context/ImagenesProvider";

const useImagenes = () => {
    return useContext(ImagenesContext)
}

export default useImagenes