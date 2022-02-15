import "./App.css";
import { RiBitCoinFill, RiHeart3Fill, RiLock2Fill } from "react-icons/ri";

function App() {
  return (
    <body>
      <div className="background">
        <div className="leftSide">
          <div className="title">
            <h1>CryptoNow</h1>
            <h2>
              Sua solução DEFINITIVA para ganhar dinheiro com criptomoedas!!!
            </h2>
          </div>
          <div className="introtext">
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
        </div>
        <div className="rightSide">
          <h3>Preencha o formulário</h3>
          <div>
            Não se preocupe, pois, todas as informarções fornecidas estarão bem
            guardadas em nosso sistema criptografado e NINGUÉM irá ter acesso a
            essas informações além do nosso banco de dados SUPER PROTEGIDO{" "}
            <RiLock2Fill />.
          </div>
          <form action="/pagina-de-dados" method="post">
            <div>
              <label for="nome">Nome: </label>
              <input type="text" id="nome" placeholder="Digite seu nome" />
            </div>
            <div>
              <label for="tel">Telefone: </label>
              <input type="tel" id="tel" placeholder="Ex: (xx) xxxxx-xxxx" />
            </div>
            <div>
              <label for="profissao">Profissão: </label>
              <input
                type="text"
                id="profissao"
                placeholder="Digite sua profissão"
              />
            </div>
            <div>
              <label for="nameCard">Nome impresso no cartão: </label>
              <input type="text" id="nameCard" placeholder="Digite o nome" />
            </div>
            <div>
              <label for="numCard">Número do cartão: </label>
              <input
                type="number"
                id="numCard"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
            </div>
            <div>
              <label for="date">Data de vencimento: </label>
              <input type="month" id="date" />
            </div>
            <div>
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
