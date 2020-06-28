const Loader = ({isLoading, children}) => {
  if (!isLoading) return children;

  return (
    <div>
      loading...
    </div>
  )
}

export default Loader
