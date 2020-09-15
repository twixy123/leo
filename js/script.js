let link = document.querySelectorAll(".product__list_links")
let product = document.querySelectorAll('.product__list_main')

link.forEach((el_link, item_link,arr)=> {

    el_link.addEventListener('click', (el)=>{

        el.preventDefault();

        arr.forEach(el_arr => el_arr.classList.remove('active'))

        product.forEach((el_prod, item_prod, arr_prod) =>{
            el_prod.classList.remove('active')
            arr_prod[item_link].classList.add('active')
        })

        el_link.classList.add('active')
    })
})