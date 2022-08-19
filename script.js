let finalExpense = document.querySelector(".right-coln-expense-value");
let expenseName = document.querySelector("#name");
let expenseDate = document.querySelector("#date");
let expenseAmount = document.querySelector("#amount");
let addExpenseButton = document.querySelector(".add-expense");
let delExpenseButton = document.querySelector(".del-expense");
let modeButton = document.querySelector(".mode");
let expenseEntities = document.querySelector(".bottom-entities");
let finalColumn = document.querySelector(".final-col");

addExpenseButton.addEventListener("click", function () {
  if (
    expenseName.value.length < 1 ||
    expenseAmount.value.length < 1 ||
    expenseDate.length < 1
  ) {
    alert("Please fill every box!");
  } else {
    let newEntities = document.createElement("div");
    newEntities.setAttribute("class", "bottom-entities");
    newEntities.setAttribute("id", "bottom-entities");

    let nameEnti = document.createElement("div");
    nameEnti.setAttribute("class", "entiti");
    nameEnti.innerText = expenseName.value;

    let dateEnti = document.createElement("div");
    dateEnti.setAttribute("class", "entiti");
    dateEnti.innerText = expenseDate.value;

    let amountEnti = document.createElement("div");
    amountEnti.setAttribute("class", "amt entiti");
    
    amountEnti.innerText = expenseAmount.value;

    let delButton = document.createElement("button");
    delButton.setAttribute("class", "delbutton");
    delButton.innerText = "-";

    newEntities.append(nameEnti, dateEnti, amountEnti, delButton);
    finalColumn.append(newEntities);

    let currVal = parseInt(finalExpense.innerText.replace(/[|&;$%@"<>()+,]/g, ""));
    currVal += parseInt(expenseAmount.value);
    finalExpense.innerText = currVal;

    expenseName.value = "";
    expenseDate.value = "";
    expenseAmount.value = "";
  }

  let deleteButton = document.querySelectorAll(".delbutton");
  deleteButton.forEach((element) => {
    element.addEventListener("click", () => {
      finalExpense.innerText = parseInt(finalExpense.innerText) - parseInt(element.parentElement.children[2].innerHTML);
      element.parentElement.remove();
      updateAmt();
    });
  });

  function updateAmt() {
    let acc = 0;
    let remValues = document.querySelectorAll('.amt');
        remValues.forEach((element) => {
          acc += parseInt(element.innerText)
        });
        finalExpense.innerText = acc;
        console.log(acc);
  }
});

delExpenseButton.addEventListener('click', function(){
  document.querySelectorAll('#bottom-entities').forEach((element) => {
    element.remove();
  });
  finalExpense.innerText = '0';
});

modeButton.addEventListener('click', function(){
  if (modeButton.innerText === '☀️'){
    modeButton.innerText = '🌙';
    document.body.style.backgroundColor ='black';
    expenseName.style.backgroundColor = 'black';
    expenseName.style.color = 'white';
    expenseDate.style.backgroundColor = 'black';
    expenseDate.style.color = 'white';
    expenseAmount.style.backgroundColor = 'black';
    expenseAmount.style.color = 'white';
    document.getElementById('title').style.color = 'white';
    document.querySelector('.home').style.color = 'white';
    document.querySelector('.left-coln-title').style.color = 'white';
  }
  else{
    modeButton.innerText = '☀️';
    document.body.style.backgroundColor ='white';
    expenseName.style.backgroundColor = 'white';
    expenseName.style.color = '#6C6C6C';
    expenseDate.style.backgroundColor = 'white';
    expenseDate.style.color = '#6C6C6C';
    expenseAmount.style.backgroundColor = 'white';
    expenseAmount.style.color = '#6C6C6C';
    document.getElementById('title').style.color = '#6C6B6B';
    document.querySelector('.home').style.color = '#00606D';
    document.querySelector('.left-coln-title').style.color = '#6C6B6B';
  }
})
