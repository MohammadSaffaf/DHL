// JS Assets
    
//     <b>Brief und Postkarte</b> <br>
//             L: 10 - 23,5 cm
//             B: 7 - 12,5 cm
//             H: bis 1 cm
    
//     <b>DHL Paket 2 kg</b> <br>
//           bis 60 x 30 x 15 cm
    
//     <b>DHL Paket 5 kg</b> <br>
//           bis 120 x 60 x 60 cm
    
//     <b>DHL Paket 10 kg</b> <br>
//           bis 120 x 60 x 60 cm
    
//     "<b>Extra große Größe</b>

function showtxt() {
    let beschreibung;
    let mylist=document.getElementById("mylist").value;
    
    switch (mylist){
        case "0":
            beschreibung = "Brief und Postkarte L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
            break;
            case "1":
            beschreibung = "DHL Paket 5 kg bis 120 x 60 x 60 cm";
            break;
            case "2":
            beschreibung = "DHL Paket 2 kg bis 60 x 30 x 15 cm";
            break;
            case "3":
            beschreibung = "DHL Paket 10 kg bis 120 x 60 x 60 cm";
            break;
            default:
                beschreibung = "Extra große Größe"

    }
    document.getElementById("masse").innerHTML=beschreibung;
}