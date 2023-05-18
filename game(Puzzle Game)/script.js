class Box{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    getTopBox(){
        if(this.y ===0) return null;
        return newBox(this.x, this.y -1);
    }
    getRightBox(){
        if(this.x ===3) return null;
        return newBox(this.x +1, this.y);
    }
    getBottomBox(){
        if(this.y ===3) return null;
        return newBox(this.x, this.y +1);
    }
    getLeftBox(){
        if(this.x ===0) return null;
        return newBox(this.x -1, this.y);
    }
    getNExtdootBoxes(){
        return[
            this.getTopBox(),
            this.getRightBox(),
            this.getBottomBox(),
            this.getLeftBox()
        ].filter(box => box !== null);
    }
}

class State{
    constructor(grid, move, time, status){
        
    }
}