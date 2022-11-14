import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Paragraph from '../../components/paragraph/Paragraph'
import Title from '../../components/title/Title' 

function Faq() {
    return (
        <>
           <Header />
            <div className="container">
              
                <Title label="Políticas da Empresa"/>

              
                <Title sub>Entrega em caixa postal:</Title>
                <Paragraph>
                    Não efetuamos entregas em caixa postal. Entrega sujeita à devolução.
                </Paragraph>

                <Title sub>Fique atento:</Title>
               
                
                <Paragraph>
                O prazo de entrega passa a contar após a aprovação do pagamento. Assim que seu pagamento for aprovado, você será notificado por e-mail.
                </Paragraph>
                
                <Paragraph>
                Todos os pedidos estão sujeitos à análise, aprovação de dados cadastrais e confirmação de estoque.
                </Paragraph>

              
                <Title sub>Política de Preço:</Title>
               
                <Paragraph>
                ATENÇÃO!! Os preços dentro de nossa loja virtual podem ser diferentes de loja física devido a diferenciação de custos operacionais.
                </Paragraph>
              
                <Paragraph>
                Não efetuamos entregas em caixa postal. Sujeito à devolução.
                </Paragraph>
            </div>
            <Footer />
        </>
    )
}

export default Faq 


