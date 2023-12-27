

function App() {
  const clickHandle=()=>{alert("Merhaba");
var a=5;
var a='Enes';
console.log(a);
}
  return (
    <div >
      <button onClick={()=>clickHandle()}>Tıkla!</button>
      
    </div>
  );
}

export default App;
