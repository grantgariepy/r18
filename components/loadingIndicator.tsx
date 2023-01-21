interface LoadingProps{
  loadingState:string
}
const LoadingIndicator = ( props:LoadingProps ) => {
  return <h3>{props.loadingState}</h3>;
};

export default LoadingIndicator;