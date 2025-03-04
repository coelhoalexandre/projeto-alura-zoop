interface BotaoRadioGrupoProps {
  children: React.ReactNode;
  legenda?: string;
  ariaLabel: string;
}

const BotaoRadioGrupo = ({
  legenda,
  children,
  ariaLabel,
}: BotaoRadioGrupoProps) => {
  return (
    <fieldset
      className='radio__grupo--campos'
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {legenda && <legend className='radio__grupo--legenda'>{legenda}</legend>}
      <ul className='radio__grupo--campos'>{children}</ul>
    </fieldset>
  );
};

export default BotaoRadioGrupo;
