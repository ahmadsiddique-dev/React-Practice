import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  const handleSubmit = () => {

  }
  return (
    <>
    <div className="min-w-full min-h-full bgg">
      <center><div>
        <h1>Form by Ahmad</h1>
        <form onSubmit={handleSubmit}>

        </form>
      </div>
      </center>
      </div>
    </>
  )
}

export default App
