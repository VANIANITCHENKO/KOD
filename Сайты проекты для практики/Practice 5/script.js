// Вход
let error = document.getElementById("error");
let btn = document.getElementById("btn");
let chekPassword = document.getElementById("chekPassword");
let dialog = document.getElementById("dialog");
let acc = document.getElementById("acc");
let email = document.getElementById("email");
let acc_btn_exit = document.getElementById("acc_btn_exit");
let sign_up = document.getElementById("sign_up");

// Окно Пользователя
let user_name = document.getElementById("user_name");
let user_email = document.getElementById("user_email");
let user_phone = document.getElementById("user_phone");

// Регистрация
let regist = document.getElementById("regist");
let btn_reg = document.getElementById("btn_reg");
let email_reg = document.getElementById("email_reg");
let name_reg = document.getElementById("name_reg");
let contact_reg = document.getElementById("contact_reg");
let password_reg = document.getElementById("password_reg");
let error1 = document.getElementById("error1");
let sign_in = document.getElementById("sign_in");

function show_hide_password(target) {
  let input = document.getElementById("chekPassword");
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}

function show_hide_password2(target) {
  let input = document.getElementById("password_reg");
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}

// Вход данные
const users = [
  {
    name: "Nikita",
    email: "nikita2008@gmail.com",
    password: "12345678",
    phone: "89384560930",
  },
  {
    name: "Dima",
    email: "dima2009@gmail.com",
    password: "75242224",
    phone: "89284560730",
  },
  {
    name: "Maksim",
    email: "Maksim2007@gmail.com",
    password: "erwofgjp",
    phone: "89381240920",
  },
  {
    name: "Ivan",
    email: "Ivan2006@gmail.com",
    password: "kdmcdwee",
    phone: "89288706035",
  },
];

// Окно входа

const chekedPassword = () => {
  let newUser = users.find((el) => {
    if (email.value === el.email && chekPassword.value === el.password) {
      return true;
    }
  });

  if (newUser) {
    dialog.classList.remove("dialog_visible");
    dialog.classList.add("dialog_hide");
    acc.classList.remove("acc_hide");
    acc.classList.add("acc_visible");

    user_name.textContent = newUser.name;
    user_email.textContent = newUser.email;
    user_phone.textContent = newUser.phone;
  } else {
    error.textContent = "Вы ввели неверные логин или пароль";
  }
};

const navigateSignUp = () => {
  dialog.classList.remove("dialog_visible");
  dialog.classList.add("dialog_hide");
  regist.classList.remove("registration_hide");
  regist.classList.add("registration_visible");
  email.value = "";
  chekPassword.value = "";
};

sign_up.addEventListener("click", navigateSignUp);
btn.addEventListener("click", chekedPassword);

// Окно данных
const goBack = () => {
  dialog.classList.remove("dialog_hide");
  dialog.classList.add("dialog_visible");
  acc.classList.remove("acc_visible");
  acc.classList.add("acc_hide");
  email.value = "";
  chekPassword.value = "";
};
acc_btn_exit.addEventListener("click", goBack);

// Окно регистрации
const addDataPerson = () => {
  if (
    name_reg.value &&
    email_reg.value &&
    password_reg.value &&
    contact_reg.value &&
    password_reg.value.length >= 8 &&
    email_reg.value.includes("@")
  ) {
    let newPerson = {
      name: name_reg.value,
      email: email_reg.value,
      password: password_reg.value,
      phone: contact_reg.value,
    };
    users.push(newPerson);

    regist.classList.remove("registration_visible");
    regist.classList.add("registration_hide");
    acc.classList.add("acc_visible");
    acc.classList.remove("acc_hide");

    user_name.textContent = name_reg.value;
    user_email.textContent = email_reg.value;
    user_phone.textContent = contact_reg.value;

    name_reg.value = "";
    email_reg.value = "";
    contact_reg.value = "";
    password_reg.value = "";
    error1.textContent = "";
  } else if (email_reg.value.includes("@") === false) {
    error1.textContent = "Введите корректный адрес почты";
  } else if (password_reg.value.length <= 8) {
    error1.textContent = "Пароль должен содержать не менее 8 символов";
  } else {
    error1.textContent = "Введены не все данные";
  }
};

const navigateSignIn = () => {
  dialog.classList.add("dialog_visible");
  dialog.classList.remove("dialog_hide");
  regist.classList.add("registration_hide");
  regist.classList.remove("registration_visible");

  name_reg.value = "";
  email_reg.value = "";
  contact_reg.value = "";
  password_reg.value = "";
  error1.textContent = "";
  error.textContent = "";
};

btn_reg.addEventListener("click", addDataPerson);
sign_in.addEventListener("click", navigateSignIn);

console.log('dima');