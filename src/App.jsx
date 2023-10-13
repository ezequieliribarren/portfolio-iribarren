import Left from "./Components/Left/Left"
import Right from "./Components/Right/Right"
import "bootstrap/dist/css/bootstrap.min.css"




function App() {

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md-6">
          <Left />
        </div>
        <div className="col-md-6">
          <Right />
        </div>

      </div>

    </div>


  )
}

export default App
