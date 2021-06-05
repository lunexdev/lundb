const fs = require("fs"); //module is defined (file jobs)
let addmsg; //'addmsg' funfaction is defined

module.exports = class lundb {
   
    constructor(filePath){

        this.jsonFilePath = filePath || "./database.json";

    
        this.data = {};

        if(!fs.existsSync(this.jsonFilePath)){
            fs.writeFileSync(this.jsonFilePath, "{}", "utf-8");
        } else {
            this.fetchDataFromFile();
        }}

    fetchDataFromFile(){
        const savedData = JSON.parse(fs.readFileSync(this.jsonFilePath));
        if(typeof savedData === "object"){
        this.data = savedData}}
                
    saveDataToFile(){
    fs.writeFileSync(this.jsonFilePath, JSON.stringify(this.data, null, 2), "utf-8")}

   


    on(fonksiyon , config) {
        if(fonksiyon=="ready"){
        let message;
        if(config.message){
        message = config.message
        console.log(message)}
        else throw Error("Ready Message İs Undefined")}

        if(fonksiyon=="dataAdd"){
        if(config.message){
        addmsg = config.message}
        else {
            throw Error("dataAdd Message İs Undefined")
        }
        }}


    fetch(key){
        if(!key) throw Error("Getirilecek Değer Bulunamadı!");
        return this.data[key]}

    has(key){
        if (!key) throw Error("Şartlama Yapılacak Değer Bulunamadı!");
        return Boolean(this.data[key])}

    set(key, value){
        this.data[key] = value;
        if (!key) throw Error("Değiştirilecek Değer Bulunamadı!");
        if (!value) throw Error("Değiştirilecek Değer Bulunamadı!");
        this.saveDataToFile()}
   
    delete(key){
        if (!key) throw Error("Silinecek Değer Bulunamadı");
        delete this.data[key];
        this.saveDataToFile()}

    add(key, count){
        if (!count) throw Error("Eklenecek Değer Bulunamadı!");
        if (!key) throw Error("Eklenecek Değer Bulunamadı");
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] += count;
        this.saveDataToFile();
        if(addmsg) {
        console.log(addmsg)}}

    subtract(key, count){
        if (!count) throw Error("Çıkarılacak Değer Bulunamadı!");
        if (!key) throw Error("Çıkarılacak Değer Bulunamadı!");
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.saveDataToFile()}

    push(key, element){
        if (!element) throw Error("Veri Bulunamadı!");
        if (!key) throw Error("Veri Bulunamadı!");
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(element);
        this.saveDataToFile()}


    clear(){
        this.data = {};
        this.saveDataToFile()}
    
    math(key , islem , key2) {
        if(!key) throw TypeError("Birinci Sayıyı Gir!")
        if(!key2) throw TypeError("İkinci Sayıyı Gir!")
        if(!islem) throw TypeError("İşlemi Gir!")
        let sayı = parseInt(key)
        let sayı2 = parseInt(key2)       
        if(islem=="+") {
        return sayı + sayı2}     
        if(islem=="-") {
        return sayı - sayı2}       
        if(islem=="*") {
        return sayı * sayı2}   
        if(islem=="/") {
        return sayı / sayı2}
        else {
        throw Error("Tanımsız İşlem!")}}
}