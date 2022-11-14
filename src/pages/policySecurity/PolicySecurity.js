import './PolicySecurity.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Paragraph from '../../components/paragraph/Paragraph'
import Title from '../../components/title/Title'

function PolicySecurity() {
    return (
        <>
            <Header />
            <div class="container">
                <Title label="Políticas de Segurança"/>
                

        
                <Paragraph>
                Com relação aos seus dados pessoais de endereçamento, pagamento e conteúdo do pedido, você pode estar certo de
                        que não serão utilizados para outros fins que não o de processamento dos pedidos realizados, não sendo portanto
                        divulgados em hipótese alguma.
                </Paragraph>
               
                <Paragraph>
                Com relação à segurança no tráfego de dados, toda transação que envolver pagamento, seja por cartão de crédito
                        ou não, estará encriptada com a tecnologia SSL (Secure Socket Layer). Isso significa que só nossa empresa terá
                        acesso a estes dados.
                    </Paragraph>
            </div>

            <Footer />
        </>
    )
}

 export default PolicySecurity