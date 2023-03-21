import Card from './Card';
import { Container } from './styles/Container.styles';
import SunIcon from "./icons/SunIcon";
import Switch from "./Switch";
import './styles/Switch.css'
import MoonIcon from "./icons/MoonIcon";



export default function Tutorial(props) {
    return (
        <Container>
            <div className="toggle">
                <SunIcon />
                <Switch toggleTheme={props.toggleTheme} isDarkTheme={props.isDarkTheme} />
                <MoonIcon />
            </div>
            <div>
                <Card />
            </div>
        </Container>
    );
}