import nerdImage from '../assets/images/illustration.png';
import Button from './Button';
import { ButtonContainer, CardContainer, ContentContainer  } from './styles/Container.styles';
import { H1, Image, P, Tag} from './styles/Elements';
import Title from "./Title";

export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag color="#4361ee">EXCLUSIVE</Tag>
                <H1>
                    <Title text="React Styled Components" />
                </H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="#" text="Watch now" />
                    <Button link="#" text="Github repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    );
}