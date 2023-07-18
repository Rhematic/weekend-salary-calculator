function infoCollect(event) {
  event.preventDefault();
  const nameOne = document.getElementById("firstname").value;
  const nameTwo = document.getElementById("lastname").value;
  const id = document.getElementById("id").value;
  const title = document.getElementById("jobtitle").value;
  const salary = document.getElementById("salary").value;

  document.getElementById("employee").innerHTML += `<tr>
  <td>${nameOne}</td>
  <td>${nameTwo}</td>
  <td>${id}</td>
  <td>${title}</td>
  <td>${salary}</td>
</tr>`;
}
