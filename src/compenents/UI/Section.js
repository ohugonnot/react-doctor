const Section = (props) => {

    return (<section className={"section " + props.classes.join(' ')}>
        <div className="container">
            {props.row &&
                <div className="row">
                    {props.children}
                </div>
            }
            {!props.row &&
                props.children
            }
        </div>
    </section>)
}

export default Section