const passwordsBank = [];
const usernamesBank = [];
const dataBank = [];
const correctPwdToLogin = "pwd"
//const usernamesBank = ["Hugo","Martín","Lucas","Mateo","Leo","Daniel","Alejandro","Pablo","ManuelÁlvaro","Adrián","David","Mario","Enzo","Diego","Marcos","IzanJavier","Marco","Álex","Bruno","Oliver","Miguel","Thiago","Antonio","Marc","Carlos","Ángel","Juan","Gonzalo","Gael","Sergio","Nicolás","Dylan","Gabriel","Jorge","José","Adam","Liam","Eric","Samuel","Darío","Héctor","Luca","Iker","Amir","Rodrigo","Saúl","Víctor","Francisco","Iván","Jesús","Jaime","Aarón","Rubén","Ian","Guillermo","Erik","Mohamed","Julen","Luis","Pau","Unai","Rafael","Joel","Alberto","Pedro","Raúl","Aitor","Santiago","Rayan","Pol","Nil","Noah","Jan","Asier","Fernando","Alonso","Matías","Biel","Andrés","Axel","Ismael","Martí","Arnau","Imran","Luka","Ignacio"];
const nums = "0123456789";
const charts = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const simbols = ".?,-_!¡¿*%&$#[]{}<>@";
const toDo = nums + charts + simbols;

class DataGenerator {

    get passwordsBank() {
        return passwordsBank;
    }

    get usernamesBank() {
        return usernamesBank;
    }

    get dataBank() {
        return dataBank;
    }

    get correctPwdToLogin() {
        return correctPwdToLogin;
    }

    usernameGenerator(cantidadUsuarios, longitud) {
        for(let i = 0; i < cantidadUsuarios; i++) {
            let username = "";
            for(let j = 0; j < longitud; j++){
                let random = Math.floor(Math.random()*toDo.length);
                username += ((charts+nums).charAt(random));
            }
            usernamesBank.push(username);
        }
    }

    passwordGenerator (cantidadPasswords, longitud) {
        for(let i = 0; i < cantidadPasswords; i++) {
            let password = "";
            for(let j = 0; j < longitud; j++){
                let random = Math.floor(Math.random()*toDo.length);
                password += toDo.charAt(random);
            }
            passwordsBank.push(password);
        }
    }

    fakeDataGenerator (arraySize, longitud) {
        for(let i = 0; i < arraySize; i++) {
            let data = "";
            for(let j = 0; j < longitud; j++){
                let random = Math.floor(Math.random()*toDo.length);
                data += toDo.charAt(random);
            }
            dataBank.push(data);
        }
    }
    
}

const dataGenerator = new DataGenerator();
export default dataGenerator;