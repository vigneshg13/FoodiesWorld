import { resolve } from 'url';

export class AuthService{
    loggedIn:boolean = false;
    
    isAuthenticated() {
      const promise = new Promise(
          (resolve,reject) =>{
              resolve( this.loggedIn)
          });
     return promise;
    }

    login(userId:String, passWord:string){
      if(userId === "test" && passWord === "help"){
         return this.loggedIn=true;
      }
    }
    
    logout(){
        this.loggedIn=false;
    }
}