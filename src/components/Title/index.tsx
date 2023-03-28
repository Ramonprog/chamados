import { ReactNode } from 'react';
import { Container } from './styles';
type Props = {
  icon: ReactNode;
  name: string;
};

const Title = ({ icon, name }: Props) => {
  return (
    <Container>
      <div className="info">
        <p className="icon">{icon}</p>
        <span>{name}</span>
      </div>
    </Container>
  );
};

export default Title;
