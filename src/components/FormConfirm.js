const FormConfirm = ({ content, agree, setAgree }) => {
  const onChangeHandler = (e) => {
    setAgree(e.target.checked)
  }

  return (
    <div className="form-confirm">
      <input
        type="checkbox"
        id="demo-check"
        className="form-confirm__box"
        checked={agree}
        onChange={onChangeHandler}
      />
      <label htmlFor="demo-check" className="form-confirm__label">
        {content}
      </label>
    </div>
  )
}

export default FormConfirm
