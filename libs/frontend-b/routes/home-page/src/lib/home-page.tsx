import './home-page.scss';
import { PrivateButtonComponent } from '../../../../components/private-button/src';
import { useEffect, useState } from 'react';

export function HomePage() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3333/api')
      .then<{ message: string }>((res) => res.json())
      .then(({ message }) => {
        setBackendMessage(message);
      });
  }, []);

  return (
    <div className="home-page row justify-content-center align-items-center">
      <div className="col-5">
        <div className="home-page__box p-5 d-flex flex-wrap">
          <h1 className="home-page__box--title">Aplicação React</h1>
          <p className="home-page__box--subtitle py-3">
            Este é um exemplo de aplicação <strong>react</strong> em uma
            estrutura de Monorepo usando NX.
          </p>
          <div>
            {/* Componente privado*/}
            <p className="home-page__box--description">
              1. Este é um componente react <strong>privado</strong> que pode
              ser utilizado apenas por este projeto:
            </p>
            <PrivateButtonComponent />
            {/* Componente compartilhado */}
            <p className="home-page__box--description mt-4">
              2. Este é um componente <strong>compartilhado</strong> com os
              demais projetos do monorepo, agnóstico a framework
            </p>
            <shared-button></shared-button>
            {/* Resposta do Backend */}
            <p className="home-page__box--description mt-4">
              3. Este é o retorno do <strong>Backend</strong>:
            </p>
            <p>{backendMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
