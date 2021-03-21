const lenName = document.querySelector(".form-name");
const lenMoney = document.querySelector(".form-money");
const lenDate = document.querySelector(".form-date");
const lenPurpose = document.querySelector(".form-purpose");
const userInfor = document.querySelector(".userInfor");

const state = {};

function createLensUser(data) {
  firebase.firestore().collection("lensUser").add(data);
}

createLensUser({
  name: lenName.value,
  money: lenMoney.value,
  backDay: lenDate.value,
  purpose: lenPurpose.value,
});

function createUser(data) {
  const { user } = data;
  return {
    money: user.money,
  };
}

async function readUserById() {
  let result = await firebase
    .firestore()
    .collection("user")
    .doc("InzCRmanNJKC1ZBpmBj3")
    .get();
  let userData = await result.data();
  console.log(userData);
  state.user = await createUser(userData);
}
readUserById();
console.log(state.user);

// userInfor.innerHTML = `
// <p>${userData.name}</p>
// <p>${userData.name}</p>
// <p>${userData.name}</p>
// `;
