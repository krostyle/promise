//Constante que almacena la URL
const url = ('https://jsonplaceholder.typicode.com/photos')

//Funcion que recibe la url y retorna TODOS los datos en json
const getData = async(url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

//Promesa que tarda 3 segundo en ser resuelta y retorna la promesa "Informacion Enviada"
const waiting = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Información Enviada'), 3000)
})

//Funcion que recibe la data y retorna un arreglo con los primeros 20 objetos
const getFirstTwenty = async(data) => {
    const ob = await data
    const twenty = []
    for (let index = 0; index < 20; index++) {
        twenty.push(ob[index])
    }
    return twenty;
}

//Funcion prinicpal donde se resuelven la promesas tanto con then como con await
const main = async(msj) => {
    await msj.then(success => {
        console.log(success);
    })
    const firstTwenty = await getFirstTwenty(getData(url));
    console.log(firstTwenty);
}

main(waiting());