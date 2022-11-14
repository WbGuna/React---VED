import './ShippingPolicy.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Paragraph from '../../components/paragraph/Paragraph'
import Title from '../../components/title/Title'


function ShippingPolicy() {
    return (
        <>
            <Header />
            <div className="container" >
                <Title label="Política de Frete"/>

                <Title sub>Envio dos produtos:</Title>


                <Paragraph>
                    Todos os produtos serão enviados de acordo com a forma escolhida pelo cliente, em até 2 dias úteis da confirmação do pagamento. O prazo para a entrega varia de acordo com a forma de envio escolhida.
                </Paragraph>
                
                <Title sub>Fique atento:</Title>

                <Paragraph>
                    O prazo de entrega começa a contar após a aprovação do pagamento. Assim que seu pagamento for aprovado você será notificado por e-mail.
                </Paragraph>

                <Paragraph>
                    Todos os pedidos estão sujeitos à análise e aprovação de dados cadastrais, o que pode causar atrasos na confirmação do pagamento.
                </Paragraph>

                <Paragraph>
                    O prazo de entrega informado inclui o prazo de processamento do pedido dentro do nosso armazém e o prazo para a realização da entrega pelo transportador. Pode haver atrasos.
                </Paragraph>

                <Paragraph>
                    No caso do frete econômico faremos 2 tentativas de entrega, caso o destinatário não seja encontrado, será necessário realizar o pagamento de um novo frete para receber o pedido.
                </Paragraph>

                <Paragraph>
                    E caso ocorra o cancelamento da compra será estornado com abatimento do valor de frete já utilizado.
                </Paragraph>
                
                <Paragraph>
                    A VED espera que tenham uma excelente experiência de compra. Para qualquer dúvida não exite em nos contar por e-mail ou WhatsApp.
                </Paragraph>
            </div>
            <Footer />
        </>
    )
}

export default ShippingPolicy