import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; 

const Login = () => {
  const { loginUser, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // If authentication is still loading, display a loading indicator
  if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    );
  }

  // If the user is already authenticated, redirect to the home page
  if (user) {
    navigate("/");
  }

  // Handle form submission for user login
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error.message));

    e.target.reset();
  };

  // Render the login form
  return (
    <div className="">
      <div className="h-screen bg-base-200 flex flex-1 items-center justify-center">
        <div className=" flex-col p-4">
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100 p-5">
            <div className="">
              <form onSubmit={handleFormSubmit}>
                <div className="form-control flex flex-col">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control flex flex-col">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"


                    name="password"
                    placeholder="Password"
                    className=""
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="bg-black text-white p-2">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;