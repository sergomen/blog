import Header from './components/header'

const SubLayout = ({ children }) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default SubLayout