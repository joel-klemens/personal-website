import React from 'react'
import styled from 'styled-components';
import {MainLayout} from '../Styles/Layout'
import ContactItem from '../Components/ContactItem';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const ContactPageStyled = styled.section`
    .contact-item-section{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
    }
`;

function ContactPage() {
    const phone = <PhoneIcon /> 
    const email = <EmailIcon />
    return (
        <MainLayout>
            <ContactPageStyled>
                <div class="contact-item-section">
                    <ContactItem title={'Phone'} icon={phone} cont1={'Cell'} cont2={'(519) 890-2036'} />
                    <ContactItem title={'Email'} icon={email} cont1={'Personal'} cont2={'JoelKlemens@gmail.com'} />
                </div>
            </ContactPageStyled>
        </MainLayout>
    )
}

export default ContactPage;
