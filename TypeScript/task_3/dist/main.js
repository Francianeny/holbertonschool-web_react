import * as CRUD from './crud'; // Importer tout depuis crud.js
// Créer un objet appelé row avec le type RowElement
const row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
// Créer une variable const nommée newRowID avec le type RowID
const newRowID = CRUD.insertRow(row); // Insérer la ligne et obtenir le nouvel ID de ligne
// Créer une variable const nommée updatedRow avec le type RowElement
const updatedRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
};
// Appeler la commande updateRow
CRUD.updateRow(newRowID, updatedRow); // Mettre à jour la ligne avec les nouvelles données
// Appeler la commande deleteRow
CRUD.deleteRow(newRowID);
