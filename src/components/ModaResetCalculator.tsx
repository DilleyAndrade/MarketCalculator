import { ModalReset } from "@/context/context"
import { ClockClockwise, Prohibit } from "@phosphor-icons/react/dist/ssr"
import { useContext } from "react"


export default function ModaResetCalculator() {

  const { setModalresetCalculator, setTotal, setValueLimit, setInitialModalIsOpen, setStoric  } = useContext<any>(ModalReset)

  function closeResetModal(e:any){
    e.preventDefault()
    setModalresetCalculator(false)
  }

  function resetAllCalculator(e:any){
    e.preventDefault() 
    setModalresetCalculator(false)
    setTotal('')
    setValueLimit('')
    setInitialModalIsOpen(true)
    setStoric([])
  }


  return (
    <div className="bg-bgColorLight dark:bg-bgColorDark bg-opacity-90 dark:bg-opacity-90 w-full h-full fixed z-10
      flex justify-center items-center p-7"
      >
        <div className=" text-center bg-bgMiddleLight dark:bg-bgMiddleDark rounded-lg
          flex flex-col items-center font-bold text-lg p-5"
        >
            <h4>Tem certeza que deseja resetar a calculadora?</h4>
            <div className="flex  justify-between gap-3 w-full my-4">
                <button 
                  onClick={resetAllCalculator}
                  className="flex gap-1 justify-center h-20 w-1/2 rounded-lg items-center text-lg font-bold  
                    bg-greenColor hover:bg-greenHoverColor duration-300 "
                >
                <ClockClockwise size={25} weight="bold" />
                Sim
                </button>

                <button 
                  onClick={closeResetModal}
                  className="flex gap-1 justify-center h-20 w-1/2 rounded-lg items-center text-lg font-bold  
                    bg-redColor hover:bg-redHoverColor duration-300 "
                >
                <Prohibit size={25} weight="bold" />
                Não
                </button>
            </div>
        </div>
    </div>
  )
}
