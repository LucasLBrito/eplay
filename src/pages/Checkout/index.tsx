import { useState } from 'react'
import Button from '../../components/button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'
import boleto from '../../assets/images/barcode.png'
import card from '../../assets/images/credit-card.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
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
        <div>
          <TabButton
            active={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton active={payWithCard} onClick={() => setPayWithCard(true)}>
            <img src={card} alt="Cartão de Crédito" />
            Cartão de Crédito
          </TabButton>
          <div className="marginTop">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="CardOweer">Nome do titular do cartão</label>
                    <input type="text" id="CardOweer" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="CarDcpf">CPF do titular do cartão</label>
                    <input type="text" id="CarDcpf" />
                  </InputGroup>
                </Row>
                <Row margin="24px">
                  <InputGroup>
                    <label htmlFor="NameCard">Nome do cartão</label>
                    <input type="text" id="NameCard" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="CardNumber">Número do cartão</label>
                    <input type="text" id="CardNumber" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="month">Mês de vencimento</label>
                    <input type="text" id="month" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="year">Ano de vencimento</label>
                    <input type="text" id="year" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="CVV">CVV</label>
                    <input type="text" id="CVV" />
                  </InputGroup>
                </Row>
                <Row margin="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="Installments">Parcelas</label>
                    <select name="Installments" id="Installments">
                      <option value="1">1x sem juros</option>
                      <option value="2">2x sem juros</option>
                      <option value="3">3x sem juros</option>
                      <option value="4">4x sem juros</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </div>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra ">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
