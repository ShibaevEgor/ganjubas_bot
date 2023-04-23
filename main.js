// https://api.telegram.org/bot6268236996:AAHE4ng3obZqFdNakci0AiMoL5QZWlQ5f1s/getUpdates



// https://api.telegram.org/bot6268236996:AAHE4ng3obZqFdNakci0AiMoL5QZWlQ5f1s/sendMessage?chat_id=684420550&text=КУ_ЁПТЫ









document.querySelector(".btn").onclick = function(){
    let message = document.querySelector(".inp").value;
    const token = "6268236996:AAHE4ng3obZqFdNakci0AiMoL5QZWlQ5f1s";
    let url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=684420550&text=';
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url+message, true);
    xhttp.send()
}