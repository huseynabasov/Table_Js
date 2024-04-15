const tbody = document.querySelector("tbody");
const addBtn = document.querySelector(".addBtn");
const editBtn = document.querySelector(".editBtn");
let allow = true;

const orderRow = () => {
  const rows = [...document.querySelectorAll("tbody tr")];
  rows.map((row, key) => {
    row.querySelector("td").textContent = key + 1;
  });
};

const cancelData = (a) => {
  const rows = document.querySelectorAll("tr");
  const lastRow = rows[rows.length - 1];
  lastRow.remove();
  allow = true;
};

const saveData = (e) => {
  const inputs = [...document.querySelectorAll("input")];
  inputs.map((input) => {
    if (input.value !== "") {
      input.parentElement.textContent = input.value;
      e.target.textContent = "Duzelis et";
      e.target.classList.remove("saveBtn");
      e.target.classList.add("editBtn");
      const sibling = e.target.nextElementSibling;
      sibling.textContent = "Sil";
    }
  });
  allow = true;
}; 
 
const editData = () => {
  console.log("asjsh");
}



addBtn.addEventListener("click", () => {
  if (!allow) {
    alert("Xaiş edirik boş xanaları doldurun...");
    return;
  }
  allow = false;
  const row = document.createElement("tr");
  const noTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Ad");
  nameTd.append(nameInput);
  const surnameTd = document.createElement("td");
  const surnameInput = document.createElement("input");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("placeholder", "Soyad");
  surnameTd.append(surnameInput);
  const ageTd = document.createElement("td");
  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("placeholder", "Yaş");
  ageTd.append(ageInput);
  const optionsTd = document.createElement("td");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Yadda saxla";
  saveBtn.classList.add("saveBtn"); 
  saveBtn.addEventListener("click", saveData);  
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Leğv et";
  cancelBtn.classList.add("cancelBtn");
  cancelBtn.addEventListener("click", cancelData); 
  optionsTd.append(saveBtn, cancelBtn);
  row.append(noTd, nameTd, surnameTd, ageTd, optionsTd);
  tbody.append(row);
  orderRow();
});


editBtn.addEventListener("click", () => {
  if (!allow) {
    alert("Xaiş edirik boş xanaları doldurun...");
    return;
  }
  allow = false;
  const row = document.createElement("tr");
  const noTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Ad");
  nameTd.append(nameInput);
  const surnameTd = document.createElement("td");
  const surnameInput = document.createElement("input");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("placeholder", "Soyad");
  surnameTd.append(surnameInput);
  const ageTd = document.createElement("td");
  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("placeholder", "Yaş");
  ageTd.append(ageInput);
  const optionsTd = document.createElement("td");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Yadda saxla";
  saveBtn.classList.add("saveBtn"); 
  saveBtn.addEventListener("click", saveData);  
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Leğv et";
  cancelBtn.classList.add("cancelBtn");
  cancelBtn.addEventListener("click", cancelData); 
  optionsTd.append(saveBtn, cancelBtn);
  row.append(noTd, nameTd, surnameTd, ageTd, optionsTd);
  tbody.append(row);
  orderRow();
});
