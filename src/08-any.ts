(()=>{
    let myDinamicVar : any
    myDinamicVar = 'hello';
    myDinamicVar = 123;
    myDinamicVar = false;
    
    // Casting any
    myDinamicVar = 'Hola';
    const rta = (myDinamicVar as string).toLowerCase();

    // Other way
    const rta2 = (<number>myDinamicVar).toFixed();
})()