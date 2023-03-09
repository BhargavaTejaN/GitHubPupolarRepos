import './index.css'

const LanguageFilterItem = props => {
  const {details, isActive, setActiveLanguageFilterId} = props
  const {id, language} = details

  const onChangeFilter = () => {
    setActiveLanguageFilterId(id)
  }

  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  return (
    <li>
      <button onClick={onChangeFilter} type="button" className={btnClassName}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
