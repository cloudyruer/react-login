import SignUpBtn from './SignUpBtn'
import Alt from './Alt'
import FormConfirm from './FormConfirm'

const SignUpForm = () => {
  return (
    <form className="form">
      <h3 className="form__subtitle">Start from free</h3>
      <h2 className="form__title">Create an account</h2>

      <div className="row">
        <div className="col">
          <SignUpBtn company="Google" />
        </div>

        <div className="col">
          <SignUpBtn company="Facebook" />
        </div>
      </div>

      <Alt content="Or use your email for registration" />

      <div className="row">
        <div className="col">
          <div className="form-wrap">
            <input
              className="form-wrap__field form-wrap__field--active"
              type="text"
              placeholder="First Name"
            />
            <span className="form-wrap__sub">First Name</span>
          </div>
        </div>

        <div className="col">
          <div className="form-wrap">
            <input
              className="form-wrap__field form-wrap__field--active"
              type="text"
              placeholder="Last Name"
            />
            <span className="form-wrap__sub">Last Name</span>
          </div>
        </div>
      </div>

      <div className="form-wrap">
        <input className="form-wrap__field" type="email" placeholder="E-mail" />
        <span className="form-wrap__sub v-hidden">Email</span>
      </div>

      <div className="form-wrap">
        <input
          className="form-wrap__field"
          type="password"
          placeholder="Password"
        />
        <span className="form-wrap__sub">Password</span>
        <i className="far fa-eye form-wrap__icon form-wrap__icon--active"></i>
      </div>

      <div className="form-verify">
        <div className="form-verify__box form-verify__box--verify">
          <i className="fas fa-check-circle form-verify__icon"></i>&nbsp;
          <span>8 characters min.</span>
        </div>
        <div className="form-verify__box">
          <i className="fas fa-check-circle"></i>&nbsp;<span>One number</span>
        </div>
      </div>

      <FormConfirm
        content="By creating account, you agree to accept our Privacy Policy, Terms of
        Service and Notification settings."
      />

      <button type="submit" className="btn btn--submit">
        Create An Free Account!
      </button>

      <a className="form__ask" href="/#">
        Already have an account? <span>Log in</span>
      </a>
    </form>
  )
}

export default SignUpForm
