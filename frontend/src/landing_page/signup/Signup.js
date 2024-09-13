export default function Singup (){
    return (
        <div className="comp text-center"> 
        <h1 className="mt-5">Signup</h1>

        <form method="POST" action="http://localhost:3000/signup" >
            <input type="text" placeholder="email"></input> <br/> <br/>
            <input type="password" placeholder="password"></input> <br/> <br/>

            <button>Submit</button>
        </form> <br/>

        Already have an account? <a href="/login">Login</a>
        </div>
    );
}