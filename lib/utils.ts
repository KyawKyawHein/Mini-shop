export const backToHome = (e:any)=>{
    e.stopPropagation();
    window.location.href = '/';
}
export const backToProduct = (e:any) => {
    e.stopPropagation();
    window.location.href = '/products';
  };