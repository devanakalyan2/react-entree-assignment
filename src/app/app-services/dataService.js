let instance = null;

class foodDataService{

    constructor(){
        if(!instance){
            instance = this;
        }
    }

    set foodData(data){
        this._foodData = data;
    }
    
    get foodData(){
        return this._foodData;
    }

}
    
export default foodDataService;
 
    


