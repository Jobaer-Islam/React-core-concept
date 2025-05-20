export default function User({user}){
    const {name, email, phone} = user

    return(
        <div className="card">
            <h4>Name: {name} </h4>
            <h5>Email: {email}</h5>
            <p>Phone: {phone}</p>
        </div>
    )
}