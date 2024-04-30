import { useEffect, useState } from "react";

interface Props {
    id: string;
    label: string;
    name: string;
    focus?: boolean;
    required?: boolean;
    regex?: RegExp;
    textoError?: string;
    change?: (e: any) => void;
    onError?:(status: boolean, id: string) => void
}

export default function TexAreaCondesti(prop: Props) {

    const [error, setError] = useState({
        status: false,
        msg: ''
    });

    const detectError = () => {
        const val = (document.getElementById(prop.id) as HTMLInputElement).value;
        if(prop.required && !val.trim().length){
           handleError(true,'Campo requerido')
           return
        }
        if(prop.regex && !prop.regex.test(val)){
         handleError(!prop.regex.test(val),'El campo no es valido')
         return
        }
        handleError(false);
    }

    const handleError = (error: boolean, message?: string) => {
        setError({
            status: error,
            msg: message ?? ''
        })
        prop.onError && prop.onError(error, prop.id);
    }

    useEffect(() => {
       if(prop.focus){
        detectError();
       }
    },[prop.focus])

    return (
        <div className="mb-5 w-full">
                <span className="pl-[21px] mb-[3px] text-[12px] text-xs leading-6 font-light tracking-[.02em] text-gray_10">
                {prop.label}
                </span>
                <div className="relative rounded-[35px] bg-gray_5 py-[18px] px-[25px]">
                {
                error.status ? <div className="absolute text-red text-[10px] top-0 right-[25px] top-[5px]">{error.msg}</div> : null
            }
                  <textarea
                  id={prop.id}
                    className="w-full bg-transparent text-black_10 !h-[107px]"
                    name={prop.name}
                    onChange={prop.change}
                    onKeyDown={detectError}
                    onKeyUp={detectError}
                    onBlur={detectError}
                  />
                </div>
              </div>
    )
}