import { useState } from 'react'

// 個人
import SignUpBtn from './SignUpBtn'
import Alt from './Alt'
import FormConfirm from './FormConfirm'

const SignUpForm = () => {
  // 表單資訊
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  // 使否顯示密碼
  const [showPassword, setShowPassword] = useState(true)

  // 密碼長度至少為 8
  const [passMinLength, setPassMinLength] = useState(false)

  // 判斷是否至少包含一位數字
  const [oneNumber, setOneNumber] = useState(false)

  // 用戶是否同意規章
  const [agree, setAgree] = useState(false)

  const onFocusHandler = (e) => {
    e.target.classList.add('form-wrap__field--active')
    e.target.nextElementSibling.classList.remove('v-hidden')
  }

  const onBlurHandler = (e) => {
    const type = e.target.dataset.type
    // guard 有內容時 不回歸原本的效果
    if (info[type].length) return
    e.target.classList.remove('form-wrap__field--active')
    e.target.nextElementSibling.classList.add('v-hidden')
  }

  const onChangeHandler = (e) => {
    const type = e.target.dataset.type
    const value = e.target.value
    // guard 一鍵填入時 觸發效果
    value && onFocusHandler(e)

    // 如果是password時 額外判定
    if (type === 'password') {
      // 密碼長度至少為 8
      setPassMinLength(value.length >= 8)
      // 判斷是否至少包含一位數字
      setOneNumber(/\d/.test(value))
    }

    setInfo((prev) => ({ ...prev, [type]: value }))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // 根據條件判斷 passMinLength, oneNumber, agree etc.
    // axios.....
    console.log('POST')
  }

  return (
    <form className="form" onSubmit={onSubmitHandler}>
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
        {/* first name */}
        <div className="col">
          <div className="form-wrap">
            <input
              className="form-wrap__field "
              type="text"
              placeholder="First Name"
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              onChange={onChangeHandler}
              value={info.firstName}
              data-type="firstName"
            />
            <span className="form-wrap__sub v-hidden">First Name</span>
          </div>
        </div>

        {/* last name */}
        <div className="col">
          <div className="form-wrap">
            <input
              className="form-wrap__field"
              type="text"
              placeholder="Last Name"
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              onChange={onChangeHandler}
              data-type="lastName"
            />
            <span className="form-wrap__sub v-hidden">Last Name</span>
          </div>
        </div>
      </div>

      {/* email */}
      <div className="form-wrap">
        <input
          className="form-wrap__field"
          type="email"
          placeholder="E-mail"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          data-type="email"
        />
        <span className="form-wrap__sub v-hidden">Email</span>
      </div>

      {/* password */}
      <div className="form-wrap">
        <input
          className="form-wrap__field"
          type={showPassword ? 'password' : 'text'}
          placeholder="Password"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          data-type="password"
        />
        <span className="form-wrap__sub v-hidden">Password</span>
        <i
          className={`far fa-eye form-wrap__icon ${
            showPassword ? '' : 'form-wrap__icon--active'
          }`}
          onClick={() => setShowPassword((prev) => !prev)}
        ></i>
      </div>

      {/* password verify */}
      <div className="form-verify">
        <div
          className={`form-verify__box ${
            passMinLength ? 'form-verify__box--verify' : ''
          }`}
        >
          <i className="fas fa-check-circle form-verify__icon"></i>&nbsp;
          <span>8 characters min.</span>
        </div>
        <div
          className={`form-verify__box ${
            oneNumber ? 'form-verify__box--verify' : ''
          }`}
        >
          <i className="fas fa-check-circle"></i>&nbsp;<span>One number</span>
        </div>
      </div>

      {/* confirm */}
      <FormConfirm
        content="By creating account, you agree to accept our Privacy Policy, Terms of
        Service and Notification settings."
        agree={agree}
        setAgree={setAgree}
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
