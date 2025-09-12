import { useRef } from "react";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghizklmnopqrstuvqxyz";
    if (numberAllowed) str += 123456789
    if (charAllowed) str += "@#$%^&*()[]{}_+-=";
    for (let i = 0; i < lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numberAllowed, charAllowed, lenght])

  const passwordRef = useRef(null);

  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select();

    // passwordRef.current?.setSelectionRange(0,5)//this select the only 5 letter for the input field

    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(() => {
    passwordGenrator()
  }, [lenght, numberAllowed, charAllowed, passwordGenrator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-$xl text-center pt-4 text-white">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mt-2 mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 border border-gray-600"
            placeholder=""
            readOnly
            ref={passwordRef}

          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-2 mb-3 pb-5">
          <div className="flex items-center gaap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={lenght}
              className=" cursor-pointer"
              onChange={(e) => (setLenght(e.target.value))}
            />
            <label>Lenght:{lenght}</label>

          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label>Characters</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App;

