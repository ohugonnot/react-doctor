import parse from "html-react-parser";


const AlertMessage = ({type, message, error}) => {

    return (
        <div className="row">
            <div className="col-12">
                <div className={`alert contact__msg alert-${type}`}
                     role="alert">
                    {parse(message)}
                    {error &&
                        <pre className="mt-3">{parse(error)}</pre>
                    }
                </div>
            </div>
        </div>
    )
}

export default AlertMessage