import BotaoRadioGrupo from '@/componentes/BotaoRadio/BotaoRadioGrupo';
import BotaoRadio from '@/componentes/BotaoRadio/BotaoRadio';
import { useState } from 'react';

const opcoes = [
  { id: 'cor-branca', value: 'branco', label: 'Branco' },
  { id: 'cor-prata', value: 'prata', label: 'Prata' },
  { id: 'cor-cinza', value: 'cinza-chumbo', label: 'Cinza chumbo' },
];

const Opcoes = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const aoSelecionaOpcao = (e: React.ChangeEvent) => {
    setOpcaoSelecionada(e.target.id);
  };

  return (
    <div className='pagina__produto--opcoes'>
      <BotaoRadioGrupo ariaLabel='Grupo opções de Cor'>
        {opcoes.map((opcao) => {
          return (
            <BotaoRadio
              key={opcao.label}
              id={opcao.id}
              nome='escolher-cor'
              selecionado={opcaoSelecionada === opcao.id}
              valor={opcao.value}
              aoMudar={aoSelecionaOpcao}
              textoLegenda={opcao.label}
            />
          );
        })}
      </BotaoRadioGrupo>
    </div>
  );
};

export default Opcoes;
