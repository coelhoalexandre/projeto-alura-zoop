import './SecaoHero.css';
import Botao from '../../../componentes/Botao';
import SecaoHeroImagem from './SecaoHeroImagem';
import SecaoHeroTitulo from './SecaoHeroTitulo';
import SecaoHeroDescricao from './SecaoHeroDescricao';
import { useState } from 'react';
import Modal from '@/componentes/Modal/Modal';
import ModalCabecalho from '@/componentes/Modal/ModalCabecalho';
import ModalConteudo from '@/componentes/Modal/ModalConteudo';

const SecaoHero = () => {
  const [abrirModal, setAbrirModal] = useState(false);

  const fecharModal = () => setAbrirModal(false);

  return (
    <section className='secao__hero'>
      {abrirModal && (
        <Modal
          ariaLabel='Pegue seu cupom Zoop'
          estaAberta={abrirModal}
          fecharModal={fecharModal}
        >
          <ModalCabecalho aoFechar={fecharModal} />{' '}
          <ModalConteudo aoFechar={fecharModal} />
        </Modal>
      )}
      <div className='secao__hero--conteudo'>
        <SecaoHeroImagem />
        <div className='secao__hero--informacoes'>
          <SecaoHeroTitulo />
          <SecaoHeroDescricao />
          <Botao variante='primario' onClick={() => setAbrirModal(true)}>
            Ganhar desconto!
          </Botao>
        </div>
      </div>
    </section>
  );
};

export default SecaoHero;
