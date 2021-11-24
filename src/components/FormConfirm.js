const FormConfirm = ({ content, agree, setAgree }) => {
  return (
    <div className="form-confirm">
      <input
        type="checkbox"
        id="demo-check"
        className="form-confirm__box"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label htmlFor="demo-check" className="form-confirm__label">
        {content}
      </label>
    </div>
  )
}

export default FormConfirm
