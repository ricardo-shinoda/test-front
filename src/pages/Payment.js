import Header from '../Components/Header'
import Total from '../Components/Total'

export default function Payment() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        CARTÃO DE CRÉDITO
        <form></form>
      </section>
      <Total />
      <button>FINALIZAR O PEDIDO</button>
    </div>
  )
}
