import Button from '../../components/button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'
import boleto from '../../assets/images/barcode.png'
import card from '../../assets/images/credit-card.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseGameMutation } from '../../services/api'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Checkout = () => {
  const [purchaseGame, { isLoading, error, data, isSuccess }] =
    usePurchaseGameMutation()
  const { items } = useSelector((state: RootReducer) => state.Cart)
  const form = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      checkEmail: '',
      payWithCard: false,
      cardOweer: '',
      cardCpf: '',
      nameCard: '',
      cardNumber: '',
      month: '',
      year: '',
      cvv: '',
      installments: '1'
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('O nome completo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O e-mail é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O CPF deve ter 14 dígitos')
        .max(14, 'O CPF deve ter 14 dígitos')
        .required('O CPF é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail de entrega inválido')
        .required('O e-mail de entrega é obrigatório'),
      checkEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails não coincidem')
        .required('A confirmação do e-mail é obrigatória'),
      payWithCard: Yup.boolean(),
      cardOweer: Yup.string().when('payWithCard', {
        is: true,
        then: (schema) =>
          schema
            .min(5, 'O nome deve ter pelo menos 5 caracteres')
            .required('O nome no cartão é obrigatório')
      }),
      cardCpf: Yup.string().when('payWithCard', {
        is: true,
        then: (schema) =>
          schema
            .min(14, 'O CPF deve ter 14 dígitos')
            .max(14, 'O CPF deve ter 14 dígitos')
            .required('O CPF no cartão é obrigatório')
      }),
      nameCard: Yup.string().when('payWithCard', {
        is: true,
        then: (schema) =>
          schema
            .min(5, 'O nome deve ter pelo menos 5 caracteres')
            .required('O nome no cartão é obrigatório')
      }),
      cardNumber: Yup.string().when('payWithCard', {
        is: true,
        then: (schema) =>
          schema
            .matches(
              /^(\d{4}\s){3}\d{4}$/,
              'Número do cartão inválido (ex: 1234 5678 9012 3456)'
            )
            .required('O número do cartão é obrigatório')
      }),
      month: Yup.string().when('payWithCard', {
        is: true,
        then: (schema) => schema.required('O mês de validade é obrigatório')
      }),
      year: Yup.string().when('payWithCard', {
        is: true,
        then: (schema) => schema.required('O ano de validade é obrigatório')
      }),
      cvv: Yup.string().when('payWithCard', {
        is: true,
        then: (schema) =>
          schema
            .matches(/^\d{3}$/, 'CVV inválido (3 dígitos)')
            .required('O CVV é obrigatório')
      })
    }),
    onSubmit: (values) => {
      const payload = {
        products: items.map((item) => ({
          id: String(item.id),
          price: item.prices.current ?? 0
        })),
        billing: {
          name: values.fullname,
          email: values.email,
          document: values.cpf
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          card: {
            active: values.payWithCard,
            owner: values.payWithCard
              ? {
                  name: values.cardOweer,
                  document: values.cardCpf
                }
              : undefined,
            name: values.payWithCard ? values.nameCard : undefined,
            number: values.payWithCard ? values.cardNumber : undefined,
            expiry:
              values.payWithCard && values.month && values.year
                ? {
                    month: parseInt(values.month),
                    year: parseInt(values.year)
                  }
                : undefined,
            code: values.payWithCard ? values.cvv : undefined
          },
          installments: parseInt(values.installments)
        }
      }
      console.log('payload enviado:', JSON.stringify(payload, null, 2))
      purchaseGame(payload)
    }
  })

  const getErrorMessage = (field: string, message?: string) => {
    const isTouched = form.touched[field as keyof typeof form.touched]
    const isDirty =
      form.values[field as keyof typeof form.values] !==
      form.initialValues[field as keyof typeof form.initialValues]
    const errorMessage =
      message || (form.errors[field as keyof typeof form.errors] as string)
    return (isTouched || isDirty) && errorMessage ? errorMessage : ''
  }

  if (isSuccess && data) {
    return (
      <div className="container">
        <Card title="Muito obrigado pela sua compra!">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! Abaixo estão os detalhes da sua compra:
            </p>
            <p className="marginTop">
              <strong>Número do pedido:</strong> {data.orderId}
              <br />
              <strong>Forma de pagamento:</strong>{' '}
              {form.values.payWithCard
                ? 'Cartão de Crédito'
                : 'Boleto Bancário'}
            </p>
            {form.values.payWithCard ? (
              <p className="marginTop">
                A liberação do código de ativação ocorrerá após a aprovação da
                transação pela operadora do cartão. Você receberá o código no
                e-mail cadastrado em nossa loja.
              </p>
            ) : (
              <p className="marginTop">
                Lembre-se de que a confirmação do boleto pode levar até 3 dias
                úteis. Após a aprovação do pagamento, enviaremos um e-mail
                contendo o código de ativação do jogo.
              </p>
            )}
            <p className="marginTop">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="marginTop">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      </div>
    )
  }

  return (
    <div className="container">
      <form onSubmit={form.handleSubmit}>
        <Card title="Dados do cliente">
          <>
            <Row>
              <InputGroup>
                <label htmlFor="fullname">Nome completo</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={form.values.fullname}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('fullname')}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('email')}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('cpf')}</small>
              </InputGroup>
            </Row>
            <h3 className="marginTop">Dados de entrega - conteúdo Digital</h3>
            <Row>
              <InputGroup>
                <label htmlFor="Deliveryemail">E-mail de entrega</label>
                <input
                  type="email"
                  id="Deliveryemail"
                  name="deliveryEmail"
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('deliveryEmail')}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="CheckEmail">Confirme o seu E-mail</label>
                <input
                  type="email"
                  id="CheckEmail"
                  name="checkEmail"
                  value={form.values.checkEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('checkEmail')}</small>
              </InputGroup>
            </Row>
          </>
        </Card>
        <Card title="Formas de pagamento">
          <div>
            <TabButton
              $active={!form.values.payWithCard}
              onClick={() => form.setFieldValue('payWithCard', false)}
              type="button"
            >
              <img src={boleto} alt="Boleto" />
              Boleto bancário
            </TabButton>
            <TabButton
              $active={form.values.payWithCard}
              onClick={() => form.setFieldValue('payWithCard', true)}
              type="button"
            >
              <img src={card} alt="Cartão de Crédito" />
              Cartão de Crédito
            </TabButton>
            <div className="marginTop">
              {form.values.payWithCard ? (
                <>
                  <Row>
                    <InputGroup>
                      <label htmlFor="CardOweer">
                        Nome do titular do cartão
                      </label>
                      <input
                        type="text"
                        id="CardOweer"
                        name="cardOweer"
                        value={form.values.cardOweer}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cardOweer')}</small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="CarDcpf">CPF do titular do cartão</label>
                      <input
                        type="text"
                        id="CarDcpf"
                        name="cardCpf"
                        value={form.values.cardCpf}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cardCpf')}</small>
                    </InputGroup>
                  </Row>
                  <Row margin="24px">
                    <InputGroup>
                      <label htmlFor="NameCard">Nome do cartão</label>
                      <input
                        type="text"
                        id="NameCard"
                        name="nameCard"
                        value={form.values.nameCard}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('nameCard')}</small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="CardNumber">Número do cartão</label>
                      <input
                        type="text"
                        id="CardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cardNumber')}</small>
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="month">Mês de vencimento</label>
                      <input
                        type="text"
                        id="month"
                        name="month"
                        value={form.values.month}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('month')}</small>
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="year">Ano de vencimento</label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        value={form.values.year}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('year')}</small>
                    </InputGroup>
                    <InputGroup maxWidth="48px">
                      <label htmlFor="CVV">CVV</label>
                      <input
                        type="text"
                        id="CVV"
                        name="cvv"
                        value={form.values.cvv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cvv')}</small>
                    </InputGroup>
                  </Row>
                  <Row margin="24px">
                    <InputGroup maxWidth="150px">
                      <label htmlFor="Installments">Parcelas</label>
                      <select
                        name="installments"
                        id="Installments"
                        value={form.values.installments}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      >
                        <option value="1">1x sem juros</option>
                        <option value="2">2x sem juros</option>
                        <option value="3">3x sem juros</option>
                        <option value="4">4x sem juros</option>
                      </select>
                      <small>{getErrorMessage('installments')}</small>
                    </InputGroup>
                  </Row>
                </>
              ) : (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              )}
            </div>
          </div>
        </Card>
        <Button
          type="button"
          onClick={form.submitForm}
          title="Clique aqui para finalizar a compra"
          disabled={isLoading}
        >
          {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
        </Button>
        {error && (
          <p>Ocorreu um erro ao finalizar a compra. Tente novamente.</p>
        )}
      </form>
    </div>
  )
}

export default Checkout
