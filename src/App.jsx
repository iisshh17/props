import './App.css';

function App(props) {
  // code here
  const imgData = props.data

  return(
    <div>
      <h1>Kalvium Gallery</h1>
      <div className="row">
        {
          imgData.map((image)=>{
            return(
              <div className="column" key={image.id}>
                <img src={image.img} alt="" className='ele'/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
