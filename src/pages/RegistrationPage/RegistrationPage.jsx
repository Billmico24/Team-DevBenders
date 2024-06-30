import { Background, Header, Registration } from 'components';

const RegistrationPage = () => {
    return (
        <Background>
            <Header localPage="RegistrationPage" />
            <RegistrationForm />
        </Background>
    );
};

export default RegistrationPage;