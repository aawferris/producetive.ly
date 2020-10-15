Refresh = async () => {
    window.location.reload()
  }

  const [value, setValue] = useState()
  const refresh = () => {
    setValue({})
  }

//maybe can use to handle a reset of form
{ onReset }

//maybe can use for search bar postMVP
{ onSearch }

'?sort%5B0%5D%5Bfield%5D=name&sort%5B0%5D%5Bdirection%5D=desc'
{...name.map((name) => ( {...name.fields.name} ))}