import logo from "../../images/logo.png";
import FooterSocial from "./FooterSocial";
import FooterLink from "./FooterLink";

const Footer = (props) => {
    const socials = [
        {link: '#', icon: 'icofont-facebook'},
        {link: '#', icon: 'icofont-twitter'},
        {link: '#', icon: 'icofont-linkedin'},
    ];

    const links = [
        {link: '#', label: 'Surgery'},
        {link: '#', label: 'Wome\'s Health'},
        {link: '#', label: 'Radiology'},
        {link: '#', label: 'Cardioc'},
        {link: '#', label: 'Medicine'},
    ];

    const linksInternal = [
        {link: '#', label: 'Terms & Conditions'},
        {link: '#', label: 'Privacy Policy'},
        {link: '#', label: 'Company Support'},
        {link: '#', label: 'FAQuestions'},
        {link: '#', label: 'Company Licence'},
    ];

    return <footer className="footer section gray-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mr-auto col-sm-6">
                    <div className="widget mb-5 mb-lg-0">
                        <div className="logo mb-4">
                            <img src={logo} alt="" className="img-fluid"/>
                        </div>
                        <p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati
                            tenetur veritatis eveniet distinctio possimus.</p>

                        <ul className="list-inline footer-socials mt-4">
                            {socials.map((item, index) => {
                                return (
                                    <FooterSocial
                                        link={item.link}
                                        icon={item.icon}
                                        key={item.icon}>
                                    </FooterSocial>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="widget mb-5 mb-lg-0">
                        <h4 className="text-capitalize mb-3">Department</h4>
                        <div className="divider mb-4"></div>

                        <ul className="list-unstyled footer-menu lh-35">
                            {links.map((item, index) => {
                                return (
                                    <FooterLink
                                        link={item.link}
                                        label={item.label}
                                        key={item.label}>
                                    </FooterLink>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="widget mb-5 mb-lg-0">
                        <h4 className="text-capitalize mb-3">Support</h4>
                        <div className="divider mb-4"></div>

                        <ul className="list-unstyled footer-menu lh-35">
                            {linksInternal.map((item, index) => {
                                return (
                                    <FooterLink
                                        link={item.link}
                                        label={item.label}
                                        key={item.label}>
                                    </FooterLink>
                                )
                            })}

                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget-contact mb-5 mb-lg-0">
                        <h4 className="text-capitalize mb-3">Get in Touch</h4>
                        <div className="divider mb-4"></div>

                        <div className="footer-contact-block mb-4">
                            <div className="icon d-flex align-items-center">
                                <i className="icofont-email mr-3"></i>
                                <span className="h6 mb-0">Support Available for 24/7</span>
                            </div>
                            <h4 className="mt-2"><a href="tel:+23-345-67890">Support@email.com</a></h4>
                        </div>

                        <div className="footer-contact-block">
                            <div className="icon d-flex align-items-center">
                                <i className="icofont-support mr-3"></i>
                                <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                            </div>
                            <h4 className="mt-2"><a href="tel:+23-345-67890">+23-456-6588</a></h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-btm py-4 mt-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-6">
                        <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                            <form action="#" className="subscribe">
                                <input type="text" className="form-control" placeholder="Your Email address"/>
                                <a href="#" className="btn btn-main-2 btn-round-full">Subscribe</a>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <a className="backtop js-scroll-trigger" href="#top">
                            <i className="icofont-long-arrow-up"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer