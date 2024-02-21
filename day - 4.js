// 1. Create a resume in the JSON format


let resume = {   "name":"SARAVANA SATHISH R",
                 "email_id" : "saravana27sathish@gmail.com",
                 "mobile_no": 8778763236,
                 "city":"salem",
                 "college name" :"Government college of Engineering, Erode",
                 "Department":"Electrical and Electronics Engineering",
                 "CGPA" : 8.19,
                 "School Name":"SRV BOYS Higher Secondary School, Rasipuram ",
                 "HSC Percentage": 90.67,
                 "SSLC Percentage": 91.4,
                 "Soft_Skills" : "Enthuistic learner,Quick learner,Team work,Collaborative",
                 "Name_of_Company" : "QUANTANICS PRIVATE LIMITED, MADURAI",
                 "Intern_Topic" : "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                 "Days_of_Learning": "Two weeks",
                 "Project_Work" : "Abstacle avoiding Robot",
                 "presented_in" : "Government college of engineering,erode",
                 "workshop" : "Electric vehicle in Sri Krishna College of Engineering, Coimbatore",
                 "Participated_in" : "Technical quiz",
                 "Programming _Languages":  "Python basics,C Basics,Java Basics",
                 "Other_Skills" : "Git",
                 "Learning_Languages" : "HTML , CSS, JS, React JS, Node JS (completed in 5 months)"
                                      
        }

// 2. JSON iteration using for in  loop

let resumeJSON = JSON.stringify(resume);
for(let key in resume){
    console.log(key, ":" , resume[key]);
}

// JSON iteration using for  loops

let resumeJSON1 = JSON.stringify(resume);
const keys = Object.keys(obj);
for(let i = 0;i<keys.length;i++){
    console.log(keys, ":" ,keys[obj[i]]);
}

// JSON iteration using for of loop

let resumeJSON2 = JSON.stringify(resume);
for(let key of resume){
    console.log(key, ":" ,key[obj]);
}

// JSON iteration using foreach loop

resume.forEach(function display(){
    console.log(resume);
})


