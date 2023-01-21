interface LoadingProps{
  loadingState:string
}
const LoadingIndicator:React.FC<LoadingProps> = ( {loadingState} ) => {
  return <h3>{loadingState}</h3>;
};

export default LoadingIndicator;