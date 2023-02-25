const container = document.querySelector("#grid-container");
const size16 = document.querySelector("#but16");
const size32 = document.querySelector("#but32");
const size64 = document.querySelector("#but64");
let cols = 16;
let rows= 16;












createGrid();

size16.addEventListener('click', () => {
sizeChange(16);
createGrid();
});
size32.addEventListener('click', () =>{
 sizeChange(32)
 createGrid()
});
size64.addEventListener('click', () =>{
 sizeChange(64)
 createGrid()});


function sizeChange(size){

    container.innerHTML = "";
    if(size === 16){

        cols = 16;
        rows = 16;
    }
    if(size === 32){

        cols = 32;
        rows = 32;
    }
    if(size === 64){

        cols = 64;
        rows = 64;
    }
}







function createGrid(){

for(let i =0; i<rows ; i++){
    const row = document.createElement('div');
    row.classList.add('row');

    for(let j = 0; j<cols; j++){
        const col = document.createElement('div');
        if (cols === 16){
            col.classList.add('col');
        }

        else if(cols===32){
            col.classList.add('col32');
        }
        
        else if(cols===64){
            col.classList.add('col64');
        }
      
        
        row.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = "blue";
        })
        row.appendChild(col)
    }
container.appendChild(row);
}
};