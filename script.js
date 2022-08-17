let finalExpense = document.querySelector(".right-coln-expense-value");

let expenseName = document.querySelector("#name");

let expenseDate = document.querySelector("#date");

let expenseAmount = document.querySelector("#amount");

let addExpenseButton = document.querySelector(".add-expense");

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
    amountEnti.setAttribute("class", "amt");
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
     
    var vls = document.querySelectorAll("#bottom-entities");

    vls.forEach((element) => {
      console.log(Array(element.innerText));
    })
    
  

    // element.parentElement.remove();
    });
  });




  // deleteButton.forEach((element) => {
  //   DelCount = 0;
  //   element.addEventListener("click", () => {
  //     if (DelCount === 0) {
  //       let prevVal = Number(finalExpense.textContent);
  //       console.log(prevVal);
  //       let delVal = Number(
  //         element.parentElement.querySelector(".amt").textContent
  //       );
  //       let newVal = prevVal - delVal;
  //       console.log(prevVal, delVal, newVal);
  //       finalExpense.textContent = newVal;
  //       DelCount++;
  //     }

  //     element.parentElement.remove();
  //   });
  // });





});
