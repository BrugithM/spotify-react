import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="text">
                <p className="text__title">Testar o Premium de graça</p>
                <p className="text__subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios.
                    Não precisa de cartão de crédito.</p>
            </div>
            <div className="button">
                <button className="sign_up__button">Inscreva-se grátis</button>
            </div>
        </footer>
    )
};

export default Footer;