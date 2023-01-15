



document.getElementById("infoForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name").value;
        console.log("Name :", nameInput);


        const empProfileImage = document.querySelector('input[name="profile"]:checked').value;
        console.log("Profile :", empProfileImage);


        let genderInput = document.querySelector('input[name="gender"]:checked').value;
        console.log("Gender :", genderInput);

        let empdepartment = empdepartmentFun();
        function empdepartmentFun() {

            valid = true;




            if (document.getElementById("hr").checked) {
                valid = true;
                return "hr";
            }
            else if (document.getElementById("sales").checked) {
                valid = true;
                return "sales";
            }
            else if (document.getElementById("finance").checked) {
                valid = true;
                return "finance";
            }
            else if (document.getElementById("engineer").checked) {
                valid = true;
                return "engineer";
            }
            else if (document.getElementById("others").checked) {
                valid = true;
                return "others";
            }
        }
        console.log("Department :", empdepartment);




        const salary = document.getElementById("salary").value;
        console.log("Salary :", salary)



        const dayInput = document.getElementById("day").value;



        const monthInput = document.getElementById("month").value;



        const yearInput = document.getElementById("year").value;
        console.log("Date :", dayInput, monthInput, yearInput)


        const notesInput = document.getElementById("notes").value;
        console.log("Notes :", nameInput)

        let date = dayInput + monthInput + yearInput;

        let FormDetailsList = {

            name: nameInput,
            profile: empProfileImage,
            gender: genderInput,
            department: empdepartment,
            salary: salary,
            date: date,
            notes: nameInput


        };


        localStorage.setItem("InfoList", JSON.stringify(FormDetailsList));


        var arraOfObjs = []
        arraOfObjs.push(FormDetailsList)
        console.log(JSON.stringify(arraOfObjs));


    });






































// const form = document.getElementsByClassName(".form");
// const conatiner = document.querySelector(".container");



// function store() {
//     //const nameInput = form["name"]
//     const nameInput = document.getElementById("name").value;
//     //const profilePicInput =  form["profile"]
//     const ProfilePicInput = document.getElementsByName("profile").value;
//     //const  genderInput = form["gender"]
//     const genderInput = document.getElementsByName("gender").value;



//     const hrInput = document.getElementById("hr").value;

//     const salesInput = document.getElementById("sales").value;

//     const financeInput = document.getElementById("finance").value;

//     const engineerInput = document.getElementById("engineer").value;

//     const othersInput = document.getElementById("others").value;

//     const salary = document.getElementById("salary").value;

//     const dayInput = document.getElementById("day").value;

//     const monthInput = document.getElementById("month").value;

//     const yearInput = document.getElementById("year").value;

//     const notesInput = document.getElementById("notes").value;


//     const arrayOfElements = [];

//     const Data = {

//         name: nameInput,

//     }




//     window.localStorage.setItem(key, JSON.stringify(Data));

// }

// // const addData = (name, profilePic, gender, hr, sales, finance, engineer,
// //     others, salary, day, month, year, notes) => {

// // }





// // const createData = ({ name, profilePic, gender, hr, sales, finance, engineer,
// //     others, salary, day, month, year, notes }) => {

// // const.container = document.createElement('div');





// form.add


// window.onsubmit = function () {


//     document.querySelector(".form").onsubmit = store


// }