import { AcordeaoProps } from './Acordeao';

const AcordeaoConteudo = ({ children }: AcordeaoProps) => {
  return <details>{children}</details>;
};

export default AcordeaoConteudo;
