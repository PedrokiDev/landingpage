import "./App.css";
import { RiBitCoinFill, RiHeart3Fill, RiLock2Fill } from "react-icons/ri";

function App() {
  return (
    <body>
      <img src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      <div className="background">
        <div className="leftSide">
          <div className="title">
            <h1>CryptoNow</h1>
            <h2>
              Sua solução DEFINITIVA para ganhar dinheiro com criptomoedas!!!
            </h2>
          </div>
          <div className="introText">
            Nossa empresa está 100% dedicada em fazer VOCÊ uma pessoa bem
            sucedida no mundo das criptomoedas. Temos uma equipe completa e bem
            preparada que te dará todos os atalhos e segredos mais bem guardados
            para que você saiba o momento exato para investir o seu dinheiro.
          </div>
          <div className="callText">
            Preencha o formulário ao lado com todas as informações necessárias
            para que você receba todas as nossas DICAS MATADORAS para que você
            fique mais próximo do tão desejado PRIMEIRO MILHÃO <RiBitCoinFill />{" "}
            em investimentos.
          </div>
          <div className="secText">
            Não se preocupe, pois, todas as informarções fornecidas estarão bem
            guardadas em nosso sistema criptografado e NINGUÉM irá ter acesso a
            essas informações além do nosso banco de dados SUPER PROTEGIDO{" "}
            <RiLock2Fill />.
          </div>
        </div>
        <div className="rightSide">
          <h3>Preencha o formulário</h3>
          <form action="/pagina-de-dados" method="post">
            <div className="nome">
              <label for="nome">Nome: </label>
              <input type="text" id="nome" placeholder="Digite seu nome" />
            </div>
            <div className="tel">
              <label for="tel">Telefone: </label>
              <input type="tel" id="tel" placeholder="Ex: (xx) xxxxx-xxxx" />
            </div>
            <div className="profissao">
              <label for="profissao">Profissão: </label>
              <input
                type="text"
                id="profissao"
                placeholder="Digite sua profissão"
              />
            </div>
            <div className="nameCard">
              <label for="nameCard">Nome impresso no cartão: </label>
              <input type="text" id="nameCard" placeholder="Digite o nome" />
            </div>
            <div className="numCard">
              <label for="numCard">Número do cartão: </label>
              <input
                type="number"
                id="numCard"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
            </div>
            <div className="date">
              <label for="date">Data de vencimento: </label>
              <input type="month" id="date" />
            </div>
            <div className="cod3d">
              <label for="cod3d">Código de segurança: </label>
              <input type="number" id="cod3d" placeholder="Ex: xxx" />
            </div>
            <div className="buttonSubmit">
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
        <div className="footer">
          Isso é uma obra de ficção. Todo conteúdo é apenas um mero
          estudo/portifólio. Feito com humor e carinho por mim, Pedrokidev <RiHeart3Fill color="red" />
        </div>
      </div>
    </body>
  );
}

export default App;
