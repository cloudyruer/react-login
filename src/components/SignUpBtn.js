const SignUpBtn = ({ company }) => {
  const companyIcon = {
    Google: 'fa-google',
    Facebook: 'fa-facebook-f',
  }

  return (
    <button className="btn" type="button">
      <i className={`fab ${companyIcon[company]} btn__icon`}></i>
      <span>{`Sign Up with ${company}`}</span>
    </button>
  )
}

export default SignUpBtn
