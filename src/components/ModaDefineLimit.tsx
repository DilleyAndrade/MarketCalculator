import { InitialModalIsOpenContext } from "@/context/context";
import { CurrencyDollar, PiggyBank } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";

export default function ModaDefineLimit() {

  const { setInitialModalIsOpen, setModalDefineValueIsOpen, setValueIsFree } = useContext(InitialModalIsOpenContext)

  function closeInitialModalToValueLimitModal(e){
    e.preventDefault()
    setInitialModalIsOpen(false)
    setModalDefineValueIsOpen(true)
  }

  function closeInitialModalToMenu(e){
    e.preventDefault()
    setInitialModalIsOpen(false)
    setValueIsFree(true)
  }

  return (
    <div className="bg-bgColorLight dark:bg-bgColorDark bg-opacity-90 dark:bg-opacity-90 w-full h-full fixed z-10
      flex justify-center items-center p-7"
      >
        <div className=" text-center bg-bgMiddleLight dark:bg-bgMiddleDark rounded-lg
          flex flex-col items-center font-bold text-lg p-5"
        >
            <h4>Você gostaria de definir um limite de gastos para hoje?</h4>
            <div className="flex  justify-between gap-3 w-full my-4">
                <button 
                  onClick={closeInitialModalToValueLimitModal}
                  className="flex gap-1 justify-center h-20 w-1/2 rounded-lg items-center text-lg font-bold  
                    bg-greenColor hover:bg-greenHoverColor duration-300 "
                >
                <PiggyBank size={25} weight="bold" />
                Sim
                </button>

                <button 
                  onClick={closeInitialModalToMenu}
                  className="flex gap-1 justify-center h-20 w-1/2 rounded-lg items-center text-lg font-bold  
                    bg-redColor hover:bg-redHoverColor duration-300 "
                >
                <CurrencyDollar size={25} weight="bold" />
                Não
                </button>
            </div>
            <button>Intruções de uso</button>
        </div>
    </div>
  )
}
