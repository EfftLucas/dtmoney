import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
 
import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    Entradas
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    Saidas
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    Total
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}