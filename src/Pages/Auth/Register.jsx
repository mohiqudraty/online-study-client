import { Link } from "react-router-dom";
import { CgGoogle } from "react-icons/cg";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, registerWithGoogle } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const registeredUser = result.user;
        updateProfile(registeredUser, {
          displayName: name,
          photoURL: photo,
        })
          .then()
          .catch((err) => console.log(err.message));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGoogleRegister = () => {
    registerWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src="https://i.ibb.co/tMmVZP6/register.png" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center md:text-5xl font-bold text-stBlack">
              Register Now!
            </h1>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-success "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-success "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-success "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-success "
                  required
                />

                <label className=" label-text-alt text-center mt-3">
                  Already Have an Account ?
                  <Link
                    to={"/login"}
                    className="label-text-alt link link-hover text-stSecondary"
                  >
                    Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-4">
                <button
                  type="submit"
                  className="btn bg-stPrimary text-white hover:text-stBlack"
                >
                  Register
                </button>
              </div>
              <div className="divider w-3/4 mx-auto">Or</div>
            </form>
            <div onClick={handleGoogleRegister} className="form-control ">
              <button className="btn btn-outline text-stBlack">
                <CgGoogle />
                Register With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
