import styleLoader from './LoadingScreen.module.css'

export const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <span className={styleLoader.loader}></span>
    </div>
  )
}