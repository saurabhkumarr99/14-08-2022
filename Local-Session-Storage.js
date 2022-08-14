localStorage.setItem("Name", "Saurabh Kumar Rai");
localStorage.setItem("Age", 22);


let student1 = {
    sname: "Student1",
    fname: "Father1",
    mname: "Mother1",
    gender: "Male",
    dob: 22,
}

localStorage.setItem("Students", JSON.stringify(student1));

function GetLocalStorage() {
    let name = localStorage.getItem("Name");
    let st1 = localStorage.getItem("Students")
    document.getElementById("localStorage").innerHTML = st1;
    console.log(st1);
}


let student2 = {
    sname: "Student2",
    fname: "Father2",
    mname: "Mother2",
    gender: "Female",
    dob: 23,
}

sessionStorage.setItem("Students", JSON.stringify(student2));

function GetSessionlStorage() {
    let name = sessionStorage.getItem("Name");
    let st2 = sessionStorage.getItem("Students")
    document.getElementById("SessionStorage").innerHTML = st2;
    console.log(st2);
}