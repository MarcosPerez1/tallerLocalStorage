// // let productos =["melon","sandia","peras","nueces"];
// // localStorage.setItem("arrayproductos", productos);
// // localStorage.setItem("arrayproductos",JSON.stringify(productos));
// const listaProductos=[
//     {
//         id:1,
//         producto:"melon",
//     },
//     {
//         id:2,
//         producto:"sandia",
//     },
//     {
//         id:3,
//         producto:"peras",
//     },
//     {
//         id:4,
//         producto:"nueces",
//     }
// ]

const arrayproductos= JSON.parse(localStorage.getItem("arrayproductos")) || []

const botonesSi = document.querySelectorAll(".botonSi")
const botonesNo =document.querySelectorAll(".botonNo")

botonesSi.forEach((boton)=>{
    boton.addEventListener("click",(ev)=>{
        const id=ev.target.getAttribute("data-id")
        const name= document.getElementById(id).innerHTML
        arrayproductos.push(name)
        localStorage.setItem("arrayproductos",JSON.stringify(arrayproductos));

    })
})
// botonesNo.foreach((boton)=>{
//     boton.addEventListener("click",(ev)=>{
//     const productosDescartados=arrayproductos.filter((boton)=>)
//     })
// })


// document.addEventListener("click",(ev)=>{

//     if(ev.target.matches(".botonSi")){
//         const id=ev.target.getAttribute("data-id")
//     console.log(id)
//     }


// })


// const eliminarProducto=(id)=>{
//     const productosDescartados = arrayproductos.filter((item)=>item.id!=id)
//     subirLocal(productosDescartados)
// }
// const subirLocal=(array)=>