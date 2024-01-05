import Left from "./Components/Left/Left"

import Right from "./Components/Right/Right"
import "bootstrap/dist/css/bootstrap.min.css"




function App() {

  return (
    <>    
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 col-lg-5">
          <Left />
        </div>
        <div className="col-12 col-lg-7">
          <Right />
        </div>
      </div>
    </div>

    </>


  )
}

export default App
