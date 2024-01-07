'use client'
import ModaDefineLimit from "@/components/ModaDefineLimit";
import ModaResetCalculator from "@/components/ModaResetCalculator";
import ModalSelectValue from "@/components/ModalSelectValue";
import { InitialModalIsOpenContext, LimitValueContext, ModalReset } from "@/context/context";
import { PlusCircle, XCircle, Broom,} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [total, setTotal] = useState<any>(0)
  const [valueLimit, setValueLimit] = useState<any>(0)
  const [InitialModalIsOpen, setInitialModalIsOpen] = useState(true)
  const [modalDefineValueIsOpen, setModalDefineValueIsOpen] = useState(false)
  const [modalresetCalculator, setModalresetCalculator] = useState<boolean>(false)
  const [valueIsFree, setValueIsFree] = useState(false)

  const [productQuantity, setProductQuantity] = useState<any>('')
  const [productPrice, setProductPrice] = useState<any>('')

  const [storic, setStoric] =useState<any>([])

  let hasValue: any;

  if(productPrice != ''){
    hasValue = true
  }

  function addNewValue(e:any){
    e.preventDefault()
    let addCalculate
    if(productQuantity === ''){
      addCalculate = productPrice * 1
    } else {
      addCalculate = productQuantity * productPrice
    }
    setTotal(total + addCalculate)
    setStoric([...storic, ` +${addCalculate.toFixed(2)} `])

    setProductQuantity('')
    setProductPrice('')
  }

  function removeNewValue(e:any){
    e.preventDefault()
    let addCalculate
    if(productQuantity === ''){
      addCalculate = productPrice * 1
    } else {
      addCalculate = productQuantity * productPrice
    }
    setTotal(total - addCalculate)
    setStoric([...storic, ` -${addCalculate.toFixed(2)} `])

    setProductQuantity('')
    setProductPrice('')
  }

  function openResetModal(e:any){
    e.preventDefault()
    setModalresetCalculator(true)
  }

  return (
    <LimitValueContext.Provider value={{valueLimit, setValueLimit}}>
      <InitialModalIsOpenContext.Provider 
        value={{InitialModalIsOpen, setInitialModalIsOpen,setModalDefineValueIsOpen, setValueIsFree, setValueLimit}} 
      >
        {InitialModalIsOpen     && <ModaDefineLimit />}
        {modalDefineValueIsOpen && <ModalSelectValue />}
        <ModalReset.Provider value={{setModalresetCalculator, setTotal, setValueLimit, setInitialModalIsOpen, setStoric}}>
          {modalresetCalculator   && <ModaResetCalculator />}
        </ModalReset.Provider>
      </InitialModalIsOpenContext.Provider>
      
      <div 
        className="bg-bgMiddleLight dark:bg-bgMiddleDark rounded-lg
        flex flex-col items-center p-7"
      >
        <Image src="/logoCalculator.png" width={280} height={140} alt="logo" />
        <form
          className="flex flex-col mt-3 gap-2"
        >
          <input 
            value={productQuantity}
            onChange={(e)=>setProductQuantity(e.target.value)}
            className="w-full rounded-lg text-center h-12 indent-2 border-4 border-bgMiddleLight
            dark:border-bgMiddleDark focus:border-greenColor outline-none text-textWhite dark:text-textBlack"
            placeholder="Quantidade de produtos"
            type="number"
          />

          <input 
            value={productPrice}
            onChange={(e)=>setProductPrice(e.target.value)}
            className="w-full rounded-lg text-center h-12 indent-2 border-4 border-bgMiddleLight
            dark:border-bgMiddleDark focus:border-greenColor outline-none text-textWhite dark:text-textBlack"
            placeholder="Valor unitário"
            required
            type="number"
          />
          
          <div className="flex justify-between gap-3 w-full">
            <button
              disabled={!hasValue}
              onClick={addNewValue}
              className={`flex gap-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-greenColor justify-center h-20 w-1/2 rounded-lg items-center text-lg font-bold  
                bg-greenColor hover:bg-greenHoverColor duration-300 `}
            >
              <PlusCircle size={25} weight="bold"/>
              Adicionar
            </button>

            <button
              disabled={!hasValue}
              onClick={removeNewValue}
              className="flex gap-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-redColor justify-center h-20 w-1/2 rounded-lg items-center text-lg font-bold  
              bg-redColor hover:bg-redHoverColor duration-300 "
            >
              <XCircle size={25} weight="bold"/>
              Retirar
            </button>
          </div>
        </form>

        <div className=" h-1 bg-bgMiddleLight w-full my-4" />

        <div className="font-bold text-lg flex justify-between w-full">
          <div>
            <h4>Total:</h4>
            <h4>R$ <span>{(total + total - total).toFixed(2)}</span></h4>
          </div>
          <div>
            <h4>Posso  gastar:</h4>
            {valueIsFree && <h4>R$ <span>Livre</span></h4> }
            {!valueIsFree && <h4>R$ <span>{(valueLimit - total).toFixed(2)}</span></h4> }
          </div>
        </div>

        <div className=" h-1 bg-bgMiddleLight w-full mt-4 mb-1" />

        <div className="text-center w-60">
          <h4 className="font-bold text-lg mb-1">Histórico dos valores</h4>
          <h6 className="font-bold text-xs">{storic}</h6>
        </div>

        <div className=" h-1 bg-bgMiddleLight w-full mb-4 mt-1" />

        <button
          onClick={openResetModal}
          className="flex gap-2 justify-center h-16 w-full rounded-lg items-center text-lg font-bold  
          bg-redColor hover:bg-redHoverColor duration-300 "
        >
          <Broom size={25} weight="bold"/>
          Resetar
        </button>

        <a 
          href="www.dilleyandrade.com.br"
          className="text-sm mt-4"
        >
            Criado por Dilley Andrade
        </a>
      </div>
    </LimitValueContext.Provider>
  )
}
