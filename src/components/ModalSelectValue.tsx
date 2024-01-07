'use client'
import { InitialModalIsOpenContext } from "@/context/context";
import { Wallet } from "@phosphor-icons/react/dist/ssr";
import { useContext, useState } from "react";

export default function ModalSelectValue() {

  const { setValueLimit, setModalDefineValueIsOpen } = useContext<any>(InitialModalIsOpenContext)
  const [definedValue, setDefinedValue] = useState()

  function closeModalDefineValue(e:any){
    e.preventDefault()
    setValueLimit(definedValue)
    setModalDefineValueIsOpen(false)
  }

  return (
    <div className="bg-bgColorLight dark:bg-bgColorDark bg-opacity-90 dark:bg-opacity-90 w-full h-full fixed z-10
      flex justify-center items-center p-7"
    >
        <div className=" text-center bg-bgMiddleLight dark:bg-bgMiddleDark rounded-lg
          flex flex-col items-center font-bold text-lg p-5"
        >
            <h4>Informe quanto você deseja gastar hoje!</h4>
            <div className="flex flex-col justify-between gap-3 w-full my-4">
                
                <input 
                  onChange={(e:any)=>setDefinedValue(e.target.value)}
                  className="w-full rounded-lg text-center h-12 indent-2 border-2 border-bgMiddleLight
                  dark:border-bgMiddleDark focus:border-greenColor outline-none text-textWhite dark:text-textBlack"
                  placeholder="Quanto deseja gastar?"
                  type="number"
                />

                <button 
                onClick={closeModalDefineValue}
                className="flex gap-1 justify-center h-20 w-full rounded-lg items-center text-lg font-bold  
                bg-greenColor hover:bg-greenHoverColor duration-300 "
                >
                <Wallet size={25} weight="bold" />
                Adicionar Valor
                </button> 
            </div>
        </div>
    </div>
  )
}
