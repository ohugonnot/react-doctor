import logo from "../../images/logo.png";
import HeaderTopBar from "./HeaderTopBar";
import HeaderItem from "./HeaderItem";
import {useState} from "react"
import {Link} from "react-router-dom";

const Header = ({menu, withToolBar = true}) => {
    const data = {};
    if (!menu) {
        menu = [
            {label: "Home", link: 'index.html', className: 'active', order: 1},
            {label: "About", link: 'about.html', className: 'active', order: 8},
            {label: "Services", link: 'service.html', order: 2},
            {
                label: 'Department', link: 'departments.html', order: 3, dropdown: [
                    {label: 'Departments', link: 'departments.html', order: 1},
                    {label: 'Department Single', link: 'department-single.html', order: 3},
                    {label: 'Truc en plus', link: 'truc-enplus.html', order: 2}
                ]
            },
            {
                label: 'Doctors', link: 'doctors.html', order: 4, dropdown: [
                    {label: 'Doctors', link: 'doctors.html', order: 1},
                    {label: 'Doctor Single', link: 'doctor-single.html', order: 2},
                    {label: 'Appoinment', link: 'appoinment.html', order: 3},
                ]
            },
            {
                label: "Blog", link: 'blog.html', order: 6, dropdown: [
                    {label: 'Blog with sidebar', link: 'blog-with-sidebar.html', order: 1},
                    {label: 'Blog Single', link: 'blog-single.html', order: 2},
                ]
            },
            {label: "Contact", link: 'contact.html', order: 7},
        ]
    }

    const [showToolBar, setShowToolBar] = useState(withToolBar)

    function onToggleToolBar() {
        setShowToolBar(false)
    }

    const [filterMenu, setFilterMenu] = useState('')
    return <>
        <header>
            {showToolBar &&
                <HeaderTopBar onToogleToolbar={onToggleToolBar}></HeaderTopBar>
            }
            <nav className="navbar navbar-expand-lg navigation" id="navbar">
                <div className="container">
                    <Link className={"navbar-brand"} to={"index.html"}>
                        <img src={logo} alt="" className="img-fluid"/>
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="icofont-navigation-menu"></span>
                    </button>

                    <div style={{width: "250px"}} className="input-group">
                        <input type="text" className={"form-control"}
                               value={filterMenu}
                               onChange={(e) => setFilterMenu(e.target.value)}/>
                        <div style={{height: "45px"}} className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>


                    <div className="collapse navbar-collapse" id="navbarmain">
                        <ul className="navbar-nav ml-auto">
                            {menu
                                .sort((a, b) => {
                                    if (a.order > b.order) return 1
                                    if (a.order < b.order) return -1
                                    return 0
                                })
                                .filter((element) => {
                                    return !!(element.label.toLowerCase().includes(filterMenu.toLowerCase())
                                        || element.dropdown && element.dropdown.filter((e) => e.label.toLowerCase().includes(filterMenu.toLowerCase())).length > 0);
                                })
                                .map((item, index) => {
                                    return (
                                        <HeaderItem className={item.className}
                                                    link={item.link}
                                                    dropdown={item.dropdown}
                                                    filter={filterMenu}
                                                    label={item.label}
                                                    key={item.label}>

                                        </HeaderItem>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
}

export default Header