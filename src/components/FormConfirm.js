const FormConfirm = ({ content }) => {
  return (
    <div className="form-confirm">
      <input type="checkbox" id="demo-check" className="form-confirm__box" />
      <label htmlFor="demo-check" className="form-confirm__label">
        {content}
      </label>
    </div>
  )
}

export default FormConfirm
