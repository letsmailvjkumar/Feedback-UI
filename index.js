const button = document.getElementById('btn');


function saveData(e){
    const result = e.currentTarget.id;
    console.log("Result is " + result);
}


document.getElementById('unhappy').addEventListener('click', saveData);
document.getElementById('neutral').addEventListener('click', saveData);
document.getElementById('satisfied').addEventListener('click', saveData);

const beforeResponse = document.getElementById('before');
const receivedResponse = document.getElementById('after');
receivedResponse.style.display="none";

btn.addEventListener('click',()=>{
    receivedResponse.style.display="block"
    beforeResponse.style.display="none";
}
)


