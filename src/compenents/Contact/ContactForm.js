import {useState} from "react";
import AlertMessage from "../UI/AlertMessage";
import {useFetch} from "use-http";
import {object, setLocale, string} from 'yup';
import {fr} from 'yup-locales';

setLocale(fr);

const emptyContactForm = {
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
}
const ContactForm = (props) => {

    // Je déclare mes stats qui vont faire varier ma page et recharger mon rendu
    const [alertMessage, setAlertMessage] = useState(null)
    const [errors, setErrors] = useState({})
    const [contactForm, setContactForm] = useState({...emptyContactForm})
    const options = {
        cachePolicy: 'no-cache'
    }

    // Création d'un state de fetch avec une lib
    const {post, response, loading, error} = useFetch('https://localhost:8000/api', options)

    // je gère mon formulaire a chaque fois que je change qqch dans un input de mon form
    // je met a jour mon state ContactForm
    const handleChangeOnForm = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContactForm((contactForm) => ({...contactForm, [name]: value}))
    }

    // je gere l'envoi de mon formulaire au submit
    async function handleSubmitForm(event) {
        // jevite d'envoyer vraiment le form

        event.preventDefault();
        // je remove tous les erreurs que je pourrais avoir
        setErrors({})


        //je créer un schema de validation avec yup poru vérifier que mon form corresponda mes attentes avant l'envois
        let contactFromSchema = object({
            name: string().required(),
            subject: string().required(),
            email: string().email().required(),
            phone: string().required(),
            message: string().required(),
        });

        // je verifie que mon form est valid par rapport a mon schema
        const isFormValid = await contactFromSchema.isValid(contactForm)
        // sil n'est pas valide par rapport au scheam
        if (!isFormValid) {
            // je demande a yup de me file les error avec validate
            contactFromSchema.validate(contactForm, {abortEarly: false})
                .catch((err) => {
                    console.dir(err)
                    // je map toutes les erreurs de yup dans mon state Errors qui gerer les erreurs e mon forumlaire
                    err.inner.map(e => {
                        setErrors((errors) => ({...errors, [e.path]: e.message}))
                    })
                })
            // et je sort ici pour ne pas envoyer le message en bdd
            return
        }

        // yup ma dit que tout etait ok donc j'envois en bdd
        const newContactForm = await post('/contact_forms.json', contactForm)
        // si tout va bien message de success
        if (response.ok) {
            setAlertMessage({
                type: 'success',
                message: 'Fucking bitch ca a marché, votre message a bien été envoyé !'
            })
            setContactForm({...emptyContactForm})
        } else {
            // si tout va pas bien, je regarde les validation de symfony et je modifie mon state Errors pour afficher les differents erreurs
            if (newContactForm.violations) {
                newContactForm.violations.map((e) => {
                    setErrors((errors) => ({...errors, [e.propertyPath]: e.message}))
                })
            }
            // J'envois un message d'erreur général au dessus de mon form
            setAlertMessage({
                type: 'danger',
                message: 'Fucking bitch ca a pas marché, veuillez réessayer ulteriorement !',
                error: newContactForm.detail || null
            })
        }
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center">
                        <h2 className="text-md mb-2">Contact us</h2>
                        <div className="divider mx-auto my-4"></div>
                        <p className="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique,
                            excepturi mollitia sit perferendis maiores ratione aliquam?</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <form id="contact-form" className="contact__form" onSubmit={handleSubmitForm} method="post"
                          action="">
                        {alertMessage &&
                            <AlertMessage {...alertMessage}>
                            </AlertMessage>
                        }
                        {loading &&
                            <div className="text-center">Envoi du message...</div>
                        }

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="name" id="name" type="text"
                                           className={`form-control ${errors.name && 'is-invalid'}`}
                                           value={contactForm.name}
                                           onChange={handleChangeOnForm}
                                           placeholder="Your Full Name"/>
                                    {errors.name &&
                                        <div className="invalid-feedback">
                                            {errors.name}
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="email" id="email" type="email"
                                           className={`form-control ${errors.email && 'is-invalid'}`}
                                           value={contactForm.email}
                                           onChange={handleChangeOnForm}
                                           placeholder="Your Email Address"/>
                                    {errors.email &&
                                        <div className="invalid-feedback">
                                            {errors.email}
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="subject" id="subject" type="text"
                                           className={`form-control ${errors.subject && 'is-invalid'}`}
                                           value={contactForm.subject}
                                           onChange={handleChangeOnForm}
                                           placeholder="Your Query Topic"/>
                                    {errors.subject &&
                                        <div className="invalid-feedback">
                                            {errors.subject}
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="phone" id="phone" type="text"
                                           className={`form-control ${errors.phone && 'is-invalid'}`}
                                           value={contactForm.phone}
                                           onChange={handleChangeOnForm}
                                           placeholder="Your Phone Number"/>
                                    {errors.phone &&
                                        <div className="invalid-feedback">
                                            {errors.phone}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="form-group-2 mb-4">
                                    <textarea name="message" id="message" rows="8"
                                              className={`form-control ${errors.message && 'is-invalid'}`}
                                              value={contactForm.message}
                                              onChange={handleChangeOnForm}
                                              placeholder="Your Message">
                                    </textarea>
                            {errors.message &&
                                <div className="invalid-feedback">
                                    {errors.message}
                                </div>
                            }
                        </div>

                        <div className="text-center">
                            <input className="btn btn-main btn-round-full" name="submit" type="submit"
                                   value="Send Message"></input>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm