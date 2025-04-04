import { useState } from 'react'
import { InputBox } from './components'
import  useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount ,setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {setconvertedAmount(amount * currencyInfo[to])}

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('data:image/jpeg;base64,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')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            CurrencyOption={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            CurrencyOption={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable                           
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
