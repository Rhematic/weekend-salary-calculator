let employees = [];

function infoCollect(event) {
  event.preventDefault();
  const nameOne = document.getElementById("firstname").value;
  const nameTwo = document.getElementById("lastname").value;
  const id = document.getElementById("id").value;
  const title = document.getElementById("jobtitle").value;
  const salary = document.getElementById("salary").value;

  const employee = {
    firstName: nameOne,
    lastName: nameTwo,
    idNumber: id,
    jobTitle: title,
    annualSalary: salary,
  };

  employees.push(employee);
  console.log(employees);

  document.querySelector("#employeeForm").reset();

  updateDom(employees);
}

function updateDom(employees) {
  const employeeTable = document.querySelector("#employee");
  const totalCost = document.querySelector("#totalCost");

  for (let i = 0; i < employees.length; i++) {
    document.getElementById("employee").innerHTML += `
            <tr>
                <td>${employees[i].firstName}</td>
                <td>${employees[i].lastName}</td>
                <td>${employees[i].idNumber}</td>
                <td>${employees[i].jobTitle}</td>
                <td>${employees[i].annualSalary}</td>
                <td>
                <button onclick="deleteEmployee(event)">Delete</button>
                </td>
            </tr>
            `;
  }
  let totalMonthlyCost = 0;
  for (let i = 0; i < employees.length; i++) {
    totalMonthlyCost += Number(employees[i].annualSalary) / 12;
  }

  if (employees.length === 0) {
    totalMonthlyCost = 0;
  }

  if (totalMonthlyCost > 20000) {
    totalCost.style.backgroundColor = "red";
  } else {
    totalCost.style.backgroundColor = "white";
  }

  totalCost.innerHTML = `Total cost: $${totalMonthlyCost}`;
}

function deleteEmployee(event) {
  event.target.closest("tr").remove();
}
