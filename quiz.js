let easy = [
  {
    que: "what is the capital of australia",
    1: "sydney",
    2: "Canberra",
    3: "melbourne",
    4: "brisbane",
    correct: "2",
  },
  {
    que: "how many districts in madhya pradesh",
    1: 30,
    2: 27,
    3: 35,
    4: 55,
    correct: "4",
  },
  {
    que: "what is the name of swami vivekananda",
    1: "narendra vivekananda",
    2: "narendranath vivekananda",
    3: "narendranath datta",
    4: "none of the above",
    correct: "3",
  },
  {
    que: "which language is used to manage databases",
    1: "JAVA",
    2: "SQL",
    3: "C++",
    4: "C",
    correct: "2",
  },
  {
    que: "what is the name of the first computer",
    1: "ENIAC",
    2: "UNIVAC",
    3: "IBM-650",
    4: "UNIVAC",
    correct: "1",
  },
  {
    que: "which datastructure works in FIFO mode",
    1: "Array",
    2: "stack",
    3: "Queue",
    4: "Tree",
    correct: "3",
  },
  {
    que: "what is the time complexity of binary search",
    1: "n^2",
    2: "nlog(n)",
    3: "n",
    4: "log(n)",
    correct: "4",
  },
  {
    que: "which of the following is the first coding language of the world",
    1: "MongoDB",
    2: "FORTRANT",
    3: "Python",
    4: "MATLAB",
    correct: "2",
  },
  {
    que: "which of the following topology have the cheapest network cost",
    1: "Ring",
    2: "BUS",
    3: "Hybrrid",
    4: "Mess",
    correct: "2",
  },
  {
    que: "find outpot of:\nchar c=A\nint n=c;\ncout<<n;",
    1: "compilation error",
    2: "garbage value",
    3: "Asci value",
    4: "sementic error",
    correct: "3",
  },
];

let medium=[
  {
    que: "Identify the correct extension of user define header file in C++",
    1: ".cpp",
    2: ".hg",
    3: ".h",
    4: ".hf",
    correct: "3",
  },
  {
    que: "Identify the icorrect constructor type",
    1: "Friend constructor",
    2: "Default constructor",
    3: "copy constructor",
    4: "parameterize construction",
    correct: "1",
  },
  {
    que: "which is the scope resolution operator",
    1: ":",
    2: "?",
    3: "$",
    4: "::",
    correct: "4",
  },
  {
    que: "which is not the property of OOPS",
    1: "inheritence",
    2: "polimorphism",
    3: "abstraction",
    4: "array",
    correct: "4",
  },
  {
    que: "what is an object of class",
    1: "function of class",
    2: "instance of class",
    3: "datatype of class",
    4: "part of class sytax",
    correct: "2",
  },
  {
    que: "which tags doesn't need closing tag?",
    1: "<p>",
    2: "<hr>",
    3: "<br>",
    4: "<hr> and <br>",
    correct: "4",
  },
  {
    que: "How many sizes of the header are available in HTML",
    1: "5",
    2: "1",
    3: "8",
    4: "6",
    correct: "4",
  },
  {
    que: "what is the smallest header of HTML",
    1: "h1",
    2: "h6",
    3: "h2",
    4: "h3 and h4",
    correct: "2",
  },
  {
    que: "HTML tags are enclosed within?",
    1: "()",
    2: "<>",
    3: "{}",
    4: "!!",
    correct: "2",
  },
  {
    que: "which tag is used to add row?",
    1: "<tr>",
    2: "<td>",
    3: "<br>",
    4: "<footer>",
    correct: "1",
  },
];

let Hard=[
  {
    que: "which type of language javascript is?",
    1: "Object-oriented",
    2: "object based",
    3: "assembly-language",
    4: "High-level",
    correct: "2",
  },
  {
    que: "who invented the C++",
    1: "Dennis richard",
    2: "dennis M.Ritchard",
    3: "Bjarne Stroustrup",
    4: "Anders Hejlsberg",
    correct: "3",
  },
  {
    que: "The cin and cout are___",
    1: "library function",
    2: "structure",
    3: "pointers",
    4: "object",
    correct: "3",
  },
  {
    que: "the best technique of collision handleling is?",
    1: "Separate chaining",
    2: "Double hashing",
    3: "Linear chaining",
    4: "Quadratic problem",
    correct: "4",
  },
  {
    que: "which HTMl tags is used for You Tube?",
    1: "<samp>",
    2: "<small>",
    3: "<frame>",
    4: "<iframe>",
    correct: "4",
  },
  {
    que: "herder nodes is used as sentinel in____",
    1: "Array",
    2: "stack",
    3: "Queue",
    4: "Tree",
    correct: "1",
  },
  {
    que: "Which of the following is infix expression",
    1: "ABC+*",
    2: "A+B*C",
    3: "+A*BC",
    4: "None of the above",
    correct: "2",
  },
  {
    que: "c++ comes with___standard libraries",
    1: "5",
    2: "3",
    3: "2",
    4: "4",
    correct: "3",
  },
  {
    que: "C++ is invented in?",
    1: "1919",
    2: "1990",
    3: "1979",
    4: "1965",
    correct: "3",
  },
  {
    que: "which among the followind operators can't be overloaded;",
    1: "-",
    2: "+",
    3: "%",
    4: "?:",
    correct: "4",
  },
];

let index = 0;
const question = document.getElementById("question");
const options = document.querySelectorAll(".option input[type='radio']");
const labels = document.querySelectorAll(".option label");
const option = document.querySelectorAll(".option");
const notice = document.getElementById("notice");
const count=document.getElementById("count");
const time=document.getElementById("time");
let sec=20;
let timevar;

function timer(){
  time.innerHTML=sec;
  sec--;
  if(sec===0){
    sec=20;
    clearInterval(timevar);
    button=1;
    next();
  }
}
function shuffleArray(array) { 
  let size = array.length; 
  for (let i = size - 1; i >= 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}
const loadQuestion = () => {
  sec=20;
  clearInterval(timevar);
  timer();
  timevar=setInterval(timer,1000);
    if(index===easy.length)
    {
        endquiz();
        return;
    }
  count.innerText=`${index+1}/${arr.length}`;
  const data = arr[index];
  question.innerText = `${index + 1}) ${data.que}`;
  for (let i = 0; i < options.length; i++) {
    let a = i + 1;
    options[i].nextElementSibling.innerText = data[a];
    options[i].checked = false; // Reset radio button
    labels[i].style.color = "";
    option[i].style.backgroundColor = ""; // Reset color
    notice.textContent = "";  }
};

let score = 0;
let button = 0;
function submit() {
  notice.textContent = "";
  const data = arr[index];
  const ans = getans();
  if (ans) {
    button = 1;
    if (ans === data.correct) {
      score++;
      console.log(score);
    }
    options.forEach((opt) => {
      opt.disabled = true;
    });
  } else {
    notice.textContent = "please select any option";
    options.forEach((opt) => {
      opt.disabled = false;
    });
  }
  
  option.forEach((opt) => {
    opt.style.backgroundColor = "";
  });

  const selectedOption = document.querySelector(".option input[type='radio']:checked").parentNode;
  if (selectedOption.querySelector("label").innerText === data[data.correct]) {
    selectedOption.style.backgroundColor = "green";
  } else {
    selectedOption.style.backgroundColor = "red";
    const correctOptionIndex = data.correct - 1; 
    option[correctOptionIndex].style.backgroundColor = "green";
  }
  
}

function getans() {
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      return options[i].value;
    }
  }
}
function next() {
  options.forEach((opt) => {
    opt.disabled = false;
  });
  if (button === 1) {
    index++;
    button = 0;
    loadQuestion();
    return;
  } else {
    notice.textContent = "submit your answer";
  }
}
const frame=document.getElementById("frame");
function endquiz(){
    frame.innerHTML=`<h1>Thankyou ${name.value.trim()}  
  for appearing the quiz<h1>
    <h2>Score = ${score}/${arr.length}<h2>`
}
const popup=document.getElementById("popup");
const name=document.getElementById("name");
const para=document.getElementById("para");
const difficulty=document.getElementById("difficulty");
let arr;
function start() {
  if(name.value.trim()!=="")
  {
    const level=difficulty.value;
    frame.style.display="block";
    popup.style.display="none";
    console.log(level);
    if(level==="1"){
      arr=shuffleArray(easy);
      console.log(arr);
    }
    else if(level==="2"){
      arr=shuffleArray(medium);
      console.log(arr);
    }
    else{
      arr=shuffleArray(Hard);
      console.log(arr);
    }
    loadQuestion();
  }
  else{
     para.innerHTML=`please inter name`;
     para.style.color="red";
  }
}