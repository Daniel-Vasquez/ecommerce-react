import styleLoader from './LoadingScreen.module.css'

export const LoadingScreen = () => {
  return (
    <div className={styleLoader.wrapper}>
      <span className={styleLoader.loader}></span>
    </div>
  )
}