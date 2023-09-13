let sira = 0
let image_array=["images/photo.jpeg","images/800x533.jpg","images/tree.jpg","images/mountains.webp"]

let images=document.querySelectorAll('.slide_image');
images.forEach((item,index) =>{
    item.src=image_array[index];
    item.addEventListener("click",function () {
        esas.src=this.src
    })
})

let turn1 = document.querySelector('.btn2');
turn1.addEventListener("click",function(){
    let test=esas.src;
    image_array.forEach((item,index)=>{
        if(test.includes(item)){
            sira=index;
            esas.src=image_array[sira+1]; 
        }
        if(sira==image_array.length-1){
            sira = 0
            esas.src=image_array[sira]; 
        }
    })
})

let turn2 = document.querySelector('.btn1');
turn2.addEventListener("click",function(){
    let test=esas.src;
    image_array.forEach((item,index)=>{
        if(test.includes(item)){
            sira=index;
            esas.src=image_array[sira-1];
        }
        if(sira==0){
            sira = image_array.length-1
            esas.src=image_array[sira];
        }
    })
})