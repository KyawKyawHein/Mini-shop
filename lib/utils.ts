export const backToHome = (e)=>{
    e.stopPropagation();
    window.location.href = '/';
}
export const backToProduct = (e) => {
    e.stopPropagation();
    window.location.href = '/products';
  };