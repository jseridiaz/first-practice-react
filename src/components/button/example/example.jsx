// Componente Padre
function ParentComponent() {
  return (
    <div>
      <ChildComponent>
        <h1>Hola, soy un elemento hijo</h1>
        <p>Este es un párrafo dentro del componente hijo</p>
      </ChildComponent>
    </div>
  )
}

// Componente Hijo
function ChildComponent(props) {
  console.log(props)
  return (
    <div>
      <h2>Componente Hijo</h2>
      {props.children}
    </div>
  )
}
export default ParentComponent
