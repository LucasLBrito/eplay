import Button from '../../components/button'
import Card from '../../components/Card'
import { InputGroup, Row } from './styles'

const Checkout = () => {
  return (
    <div className="container">
      <Card title="Dados do cliente">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="nome">Nome completo</label>
              <input type="text" id="nome" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </InputGroup>
          </Row>
          <h3 className="marginTop">Dados de entrega - conteúdo Digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="Deliveryemail">E-mail de entrega</label>
              <input type="email" id="Deliveryemail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="CheckEmail">Confirme o seu E-mail</label>
              <input type="email" id="CheckEmail" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Formas de pagamento">
        <p>
          Ao optar por essa forma de pagamento, é importante lembrar que a
          confirmação pode levar até 3 dias úteis, devido aos prazos
          estabelecidos pelas instituições financeiras. Portanto, a liberação do
          código de ativação do jogo adquirido ocorrerá somente após a aprovação
          do pagamento do boleto.
        </p>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra ">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
