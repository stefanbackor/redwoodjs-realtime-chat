import Header from 'src/components/Header/Header'

type PageLayoutProps = {
  children?: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <div className="flex justify-center m-6">
        <div className="max-w-screen-sm">{children}</div>
      </div>
    </>
  )
}

export default PageLayout
