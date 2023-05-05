
function AppStore({downloadIcon,text,beauty}) {
  return (
    <div className= {beauty}>
        {downloadIcon}
        <p className="px-3 text-sm">{text}</p>
    </div>
  )
}

export default AppStore