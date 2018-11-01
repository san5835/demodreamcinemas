/*
  Generated class for the DmformvalidationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class DmformvalidationProvider {

  static emailValidator(FormControl) {
    if(FormControl.value){
    // RFC 2822 compliant regex          
    if (FormControl.value.trim().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return null;            
    } else {
        return { 'invalidEmailAddress': true };
    }
} 
}
   
static phnoValidator(FormControl) {
      if(FormControl.value){
    // RFC 2822 compliant regex
    if (!(isNaN(FormControl.value))&&(FormControl.value.length>=10)) {
        return null;
    } else {
        return { 'invalidphno': true };
    }
} 
}


}
