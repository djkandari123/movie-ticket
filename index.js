const totalSeat = 56;
const seatAry = [];
let ticket = 0;
let total = 0;

const seatEl = document.getElementById("seats");
const ticketsEl = document.getElementById("ticket");
const totalEl = document.getElementById("total");

function updatePrices(){
    ticketsEl.innerText = ticket;
    totalEl.innerHTML = total;
};
updatePrices()
for (let i = 0; i < totalSeat; i++) {
  const seat = {
    status: randomSeat(),
  };
  seatAry.push(seat);
}

function randomSeat(){
    return Math.random() < 0.5 ? "available" : "booked";
};

seatAry.forEach((curSeat) => {
  renderSeat(curSeat);
});

function updateSeatStatus(status){
  switch(status){
    case "available": {
      return 'bg-green-500 text-center cursor-pointer';
    }
    case 'booked': {
      return 'bg-gray-500 text-center';
    }
    case "selected": {
      return 'bg-red-500 text-center';
    }
  }
};

function renderSeat(seat) {
  const spanEl = document.createElement("span");
  spanEl.innerHTML = '<i class="fa-solid fa-couch text-white"></i>';
  spanEl.className = updateSeatStatus(seat.status);
  if(seat.status === "booked"){
    spanEl.classList.add("cursor-not-allowed");
  }else{
    spanEl.addEventListener("click",()=>{
        if(seat.status === "available"){
            seat.status = "selected";
            spanEl.className = updateSeatStatus(seat.status);
            ticket++;
            total += 100;
        }else{
            seat.status = "available";
            spanEl.className = updateSeatStatus(seat.status);
            ticket--;
            total -= 100;
        }
        updatePrices();
    })
  }
  seatEl.appendChild(spanEl);
}
