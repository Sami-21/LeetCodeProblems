function checkStraightLine(coordinates: number[][]): boolean {
    let p:number=coordinates[0][0];
    let isVertical:boolean = true;
    for(let i:number=1;i<coordinates.length;i++){
        if(coordinates[i][0] != p){
            isVertical =false;
            i=coordinates.length;
        }
    }
    if(isVertical)return true;
    
    let alpha:number = (coordinates[0][1]-coordinates[1][1])/(coordinates[0][0]-coordinates[1][0]);
    let beta:number = coordinates[0][1] - (coordinates[0][0] * alpha);
    for(let i:number=2;i<coordinates.length;i++){
        if(((coordinates[i][0] * alpha) + beta) != coordinates[i][1]){
            return false
        }
    }
    return true;
};