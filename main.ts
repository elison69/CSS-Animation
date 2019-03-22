export class Main {

    OnInit(){
        console.log("123");
        
        this.move();
    }

    move(): void{
        var elem = document.getElementById("nave");
        var posX = elem.style.left;
        // window.addEventListener("")
        document.addEventListener("keypress", function(event){
            if (event.keyCode == 37) {
                elem.style.left = posX -
            }
            if (event.keyCode == 39) {
                
            }
        });
    }

    

}