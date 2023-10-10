import SectionTitle from "../compenents/UI/SectionTitle";
import Section from "../compenents/UI/Section";
import ContactCard from "../compenents/Contact/ContactCard";
import ContactForm from "../compenents/Contact/ContactForm";
import {useEffect, useState} from "react";
import axios from "axios";

const Contact = (props) => {
    const data = {
        contacts: [
            {icon: 'icofont-live-support', title: 'Call Us Quickly', content: '+823-4565-13456'},
            {icon: 'icofont-support-faq', title: 'Email Us', content: 'contact@mail.com'},
            {icon: 'icofont-location-pin', title: 'Location', content: 'North Main Street,Brooklyn Australia'},
            {icon: 'icofont-support-faq', title: 'Services', content: 'Mes nouveaux services'},
        ]
    }

    const [contactCards, setContactCards] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchContactCard = async () => {
        // await a la main
        try {
            setError(null)
            setIsLoading(true)
            const response = await axios.get('https://localhost:8000/api/contacts.json')
            setContactCards(response.data)
        } catch (e) {
            setError(e.message)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchContactCard()
    }, []);

    return (
        <>
            <SectionTitle message={'Contact'} title={"Contactez nous !!"}></SectionTitle>

            {!isLoading && contactCards && !error &&
                <Section row={true} classes={['contact-info', 'pb-0']}>
                    {contactCards.map((item, index) => {
                        return (
                            <ContactCard key={item.title}
                                         icon={item.icon}
                                         title={item.title}>
                                {item.content}
                            </ContactCard>
                        )
                    })}
                </Section>
            }
            {!isLoading && error &&
                <p className="text-center alert alert-danger">{error}</p>
            }
            {isLoading &&
                <p className="text-center">Loading...</p>
            }

            <Section row={false} classes={['contact-form-wrap']}>
                <ContactForm fetchContactCard={fetchContactCard}></ContactForm>
            </Section>
        </>
    )
}

export default Contact