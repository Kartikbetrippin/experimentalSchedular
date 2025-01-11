var finalbatch;
var finalday;
var classtype;
var arrrr = [9, 10, 11, 12, 13, 14, 15, 16];
var subcodefinal;
var semSelect;
var finalelec;
var check = 0;
const daybut = document.querySelectorAll("#daySelector>button");




async function toggleShrinkWithDelay(elementId, delay, yep) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  }).then(() => {
    document.getElementById(elementId).classList.remove("shrink");
    document.getElementById(yep).classList.remove("up");
    // console.log("done");
  });
}















window.onscroll = () => {
  document.getElementById("scroll").style.transform = "translateY(-100px)";
  const element = document.getElementById("s128");
  const elementmenu = document.getElementById("menu");
  const noffset = -20 + this.scrollY;
  element.style.transform = "translateX(" + noffset + "px)";
  //  var opac=this.scrollY/130;
  //  opac=1-opac;

  // element.style.opacity=opac;
  if (this.scrollY > 10) {
    const date = document.querySelector("#time>h1");
    date.style.transition = "transform 0.5s ease, opacity 2s ease";
    date.style.transform = "translateY(0px)";
    date.style.opacity = "1";
  }
  if (this.scrollY > 20) {
  }
  // if(this.scrollY>130){
  //   document.getElementById('s128').style.display='none';
  // }
  // if(this.scrollY<130){
  //   document.getElementById('s128').style.display='block';
  // }
};










document.querySelectorAll("#flexsem>h2").forEach((item) => {
  item.addEventListener("click", () => {
    if (check != 1) {
      const batchele = document.querySelector("#batch");
      batchele.style.transition = "transform 0.5s ease, opacity 2s ease";
      batchele.style.transform = "translateX(0px)";
      batchele.style.opacity = "1";
      check = 1;
    }

    document.getElementById("timeTable").style.transform = "translateX(-200%)";
    document.getElementById("daydecider").style.transform = "translateY(-200%)";
    document.querySelector("#daySelector").style.display = "none";
    document.querySelector("#buttonContainer").classList.add("hidden");
    document.querySelector("#batch").innerText = "Select Batch";
    document.getElementById("electivePicker").style.display = "none";

    if (item.id == "s2") {
      // item.style.fontSize = '1.5rem';
      item.style.color = "black";
      const text = document.getElementById("s2");

      if (document.getElementById("s4").classList[0] == "grow") {
        document.getElementById("rightball").classList.remove("drop");
        document.getElementById("s4").classList.remove("grow");
        document.getElementById("rightball").classList.add("up");
        document.getElementById("s4").classList.add("shrink");
        document.getElementById("s4").style.color = "white";
        toggleShrinkWithDelay("s4", 600, "rightball");
      }

      document.getElementById("leftball").classList.add("drop");
      text.classList.add("grow");
      semSelect = 2;
    } else {
      // item.style.fontSize = '1.5rem';
      item.style.color = "black";
      if (document.getElementById("s2").classList[0] == "grow") {
        document.getElementById("leftball").classList.remove("drop");
        document.getElementById("s2").classList.remove("grow");
        document.getElementById("leftball").classList.add("up");
        document.getElementById("s2").classList.add("shrink");
        document.getElementById("s2").style.color = "white";
        toggleShrinkWithDelay("s2", 600, "leftball");
      }
      const text = document.getElementById("s4");
      document.getElementById("rightball").classList.add("drop");
      text.classList.add("grow");
      semSelect = 4;
    }
  });
});












document.querySelector("#batch").addEventListener("click", (element) => {
  const ele = document.querySelector("#buttonContainer");
  const ele2 = document.getElementById("buttonContainerS");
  document.getElementById("batch").innerText = "Select Batch";

  if (semSelect == 2) {
    ele.classList.toggle("hidden");
  } else {
    // console.log("yep");
    ele2.classList.toggle("hidden");
  }

  document.getElementById("electivePicker").style.display = "none";
  document.getElementById("daydecider").style.transform = "translateY(-200%)";
  document.querySelector("#daySelector").style.display = "none";
  document.getElementById("timeTable").style.transition = "transform 2s ease";

  document.getElementById("timeTable").style.transform = "translateX(-200%)";

  
  
  divclear();




  daybut.forEach((itemm) => {
    if (itemm.innerText[0] == "-") {
      itemm.innerText = itemm.innerText.substring(2);
      itemm.style.width = "80px";
    }
  });




});



















document.querySelectorAll("#buttonContainerS>button").forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("batch").innerText = item.id;
    finalbatch=item.id;
    document.getElementById("buttonContainerS").classList.toggle("hidden");

    showelecmenu();
  });
});









function showelecmenu() {
  document.getElementById('electivePicker').style.display='flex';
}








document.querySelectorAll("#electivePicker>button").forEach((item) => {
  item.addEventListener("click", () => {
    finalelec = item.id;
    console.log(finalelec);
    document.getElementById("batch").innerText =
      document.getElementById("batch").innerText + "->" + item.innerText;
    skipToDay();
  });
});








document.querySelectorAll("#buttonContainer>button").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("#batch").innerText = item.innerText;
    finalbatch = item.innerText;

    const ele = document.querySelector("#buttonContainer");
    ele.classList.add("hidden");
    
      skipToDay();
  });
});





function skipToDay() {
  document.getElementById("electivePicker").style.display = "none";
  const today = new Date();
  const dayOfWeek = today.getDay();
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const theday = days[dayOfWeek].charAt(0) + days[dayOfWeek].charAt(1);

  document.getElementById("daySelector").style.display = "flex";
  console.log(theday);
  console.log(dayOfWeek);
if(dayOfWeek!=0){
  const daybutt = document.getElementById(theday);
  console.log(daybutt);
  daybutt.innerText = "->" + daybutt.innerText;
}
}









updateDay();
function updateDay() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const minutes = today.getHours();
  const seconds = today.getMinutes();
  document.querySelector("#time>h1").innerText =
    days[dayOfWeek] + "\n" + minutes + ":" + seconds;
  var count = 0;
  for (const item of arrrr) {
    if (item <= minutes) {
      // console.log("here are minutes "+minutes);
      // console.log("here are items "+item);
      // console.log(document.querySelector("."+"c"+item));
      document.querySelector("." + "c" + item).style.color = "black";
      document.querySelector("." + "c" + item).style.backgroundColor = "white";
      count++;
    }
    if (minutes > 16) {
      document.querySelector("." + "c" + item).style.color = "white";
      document.querySelector("." + "c" + item).style.backgroundColor = "black";
    }
  }
  setTimeout(updateDay, 1000);
}








daybut.forEach((item) => {
  item.addEventListener("click", () => {
    daybut.forEach((itemm) => {
      if (itemm.innerText[0] == "-") {
        itemm.innerText = itemm.innerText.substring(2);
        itemm.style.width = "80px";
      }
    });
    finalday = item.innerText;
    item.innerText = "->" + item.innerText;
    item.style.width = "200px";
    const daydecider = document.getElementById("daydecider");
    daydecider.innerText = "schedule for  " + finalday;
    document.getElementById("daydecider").style.transform = "translateY(0%)";
    document.getElementById("timeTable").style.transition =
      "transform 0.5s ease";

    document.getElementById("timeTable").style.transform = "translateX(0%)";
    divclear();

    mainconcept(finalday, finalbatch);
  });
});

function mainconcept(day, batch) {
  switch (semSelect) {
    case 2:
      {
        Object.entries(nine).forEach((item) => {
          if (item[0] == day) {
            decifer(item[1], batch, 1);
          }
        });

        Object.entries(ten).forEach((item) => {
          if (item[0] == day) {
            decifer(item[1], batch, 2);
          }
        });

        Object.entries(elev).forEach((item) => {
          if (item[0] == day) {
            decifer(item[1], batch, 3);
          }
        });

        Object.entries(twe).forEach((item) => {
          if (item[0] == day) {
            decifer(item[1], batch, 4);
          }
        });
        Object.entries(oneo).forEach((item) => {
          if (item[0] == day) {
            decifer(item[1], batch, 5);
          }
        });
        Object.entries(twoo).forEach((item) => {
          if (item[0] == day) {
            decifer(item[1], batch, 6);
          }
        });
        Object.entries(three).forEach((item) => {
          if (item[0] == day) {
            decifer(item[1], batch, 7);
          }
        });
        Object.entries(fouro).forEach((item) => {
          if (item[0] == day) {
            decifer(item[1], batch, 8);
          }
        });
      }
      break;
    case 4:{ 
      
      
    Object.entries(fournine).forEach((item) => {
      if (item[0] == day) {
        decifer4(item[1], batch, 1);
      }
    });

    Object.entries(fourten).forEach((item) => {
      if (item[0] == day) {
        decifer4(item[1], batch, 2);
      }
    });

    Object.entries(foureleven).forEach((item) => {
      if (item[0] == day) {
        decifer4(item[1], batch, 3);
      }
    });

    Object.entries(fourtwelve).forEach((item) => {
      if (item[0] == day) {
        decifer4(item[1], batch, 4);
      }
    });
    Object.entries(fourone).forEach((item) => {
      if (item[0] == day) {
        decifer4(item[1], batch, 5);
      }
    });
    Object.entries(fourtwo).forEach((item) => {
      if (item[0] == day) {
        decifer4(item[1], batch, 6);
      }
    });
    Object.entries(fourthree).forEach((item) => {
      if (item[0] == day) {
        decifer4(item[1], batch, 7);
      }
    });
    Object.entries(fourfour).forEach((item) => {
      if (item[0] == day) {
        decifer4(item[1], batch, 8);
      }
    });
  }
  }
}
function decifer4(todecode,batch,slot){


  

  todecode.forEach((str) =>{


    // console.log(str);

     
      if(str.substring(1,4)=='ALL' ){
        // console.log("inside");
        const fi=str.indexOf('(');
        const li=str.lastIndexOf(')');
        var subbe=str.substring(fi+1,li);
        // console.log(subbe);
        subbe=subbe.trim();
        if(subbe==finalelec){
          // console.log(str);
          callit(str,slot);


        }
      }

    if (str.includes(batch)) {
      if (batch == "F1") {
        const fi = str.indexOf(batch);
        const pc = str.charAt(fi + 2);
        if (Number.isInteger(Number(pc))) {
        } else {
          callit(str,slot);
        }
      } else if(batch == "E1"){
        const fi = str.indexOf(batch);
        const pc = str.charAt(fi + 2);
        if (Number.isInteger(Number(pc))) {
        } else {
          callit(str,slot);
        }
      }
      else{

        callit(str,slot);
      }

      
    }
  });

}







function decifer(arr, batch, slot) {
  arr.forEach((str) => {
    if (str.includes(batch)) {
      if (batch == "F1") {
        const fi = str.indexOf(batch);
        const pc = str.charAt(fi + 2);
        if (Number.isInteger(Number(pc))) {
        } else {
          callit(str, slot);
        }
      } else callit(str, slot);
    }
  });
}








function callit(str, slot) {
  var fi = str.indexOf("(");
  var li = str.indexOf(")");
  var code = str.substring(fi + 1, li);
  code = code.trim();
  subcode[0].forEach((item, index) => {
    if (code == item) {
      // console.log(subcode[1][index]);
      subcodefinal = subcode[1][index];
    }
  });
  var firstpart = str.substring(0, fi);
  var lastpart = str.substring(li + 1);
  // console.log("first part is"+firstpart);
  // console.log("last part is"+lastpart);
  subcodefinal = "(" + subcodefinal + ")";
  str =
    '<span style="color:yellow">' +
    firstpart +
    "</span>" +
    '<span style="color:#BAD8B6">' +
    subcodefinal +
    "</span>" +
    lastpart;
  setter(str, slot);
}








function setter(str, slot) {
  switch (slot) {
    case 1:
      {
        document.getElementById("one").innerHTML = str;
      }
      break;
    case 2:
      {
        document.getElementById("two").innerHTML = str;
      }
      break;
    case 3:
      {
        if (finalday == "Saturday") {
          if (/(\bLUNCH\b)/.test(str)) {
            str = str.substring(str.lastIndexOf(">") + 1);
            document.getElementById("three").style.background = "green";
          }
        }
        document.getElementById("three").innerHTML = str;
      }
      break;
    case 4:
      {
        if (/(\bLUNCH\b)/.test(str)) {
          str = str.substring(str.lastIndexOf(">") + 1);
          document.getElementById("four").style.background = "green";
        }
        document.getElementById("four").innerHTML = str;
      }
      break;
    case 5:
      {
        if (/(\bLUNCH\b)/.test(str)) {
          str = str.substring(str.lastIndexOf(">") + 1);
          document.getElementById("five").style.background = "green";
        }
        document.getElementById("five").innerHTML = str;
      }
      break;
    case 6:
      {
        document.getElementById("six").innerHTML = str;
      }
      break;
    case 7:
      {
        document.getElementById("seven").innerHTML = str;
      }
      break;
    case 8:
      {
        document.getElementById("eight").innerHTML = str;
      }
      break;
  }
}
function divclear() {
  document.getElementById("one").innerText = "";
  document.getElementById("two").innerText = "";
  document.getElementById("three").innerText = "";
  document.getElementById("four").innerText = "";
  document.getElementById("five").innerText = "";
  document.getElementById("six").innerText = "";
  document.getElementById("seven").innerText = "";
  document.getElementById("eight").innerText = "";
  document.getElementById("three").style.backgroundColor = "black";
  document.getElementById("four").style.backgroundColor = "black";
  document.getElementById("five").style.backgroundColor = "black";
  document.getElementById("six").style.backgroundColor = "black";
  document.getElementById("seven").style.backgroundColor = "black";
}

// const subcode = [
//   [
//     "15B11EC111",
//     "15B11PH211",
//     "15B11MA211",
//     "18B15GE111",
//     "15B11CI211",
//     "15B17PH271",
//     "15B17EC171",
//     "15B17CI271",
//     "24B11HS111",
//     "24B16HS111",
//   ],
//   [
//     "Electrical I",
//     "Phy II",
//     "Maths II",
//     "EDD",
//     "SDF II",
//     "PhyLab II",
//     "ElectricalLab I",
//     "SDFLab II",
//     "UHV",
//     "LifeSkills",
//   ],
// ];


const subcode = [
  [
    "15B11EC111",
    "15B11PH211",
    "15B11MA211",
    "18B15GE111",
    "15B11CI211",
    "15B17PH271",
    "15B17EC171",
    "15B17CI271",
    "24B11HS111",
    "24B16HS111",
    "15B11EC411",
    "18B11EC212",
    "15B11EC413",
    "15B17EC471",
    "18B15EC212",
    "15B17EC473",
    "15B1NHS432",
    "15B1NHS431",
    "15B1NHS435",
    "15B11MA301",
    "18B11EC213",
    "15B11CI411",
    "19B13BT211",
    "18B15EC213",
    "15B17CI471",
    "19B12HS412",
    "16B1NHS431",
    "24B11HS111",
  ],
  [
    "Electrical I",
    "Phy II",
    "Maths II",
    "EDD",
    "SDF II",
    "PhyLab II",
    "ElectricalLab I",
    "SDFLab II",
    "UHV",
    "LifeSkills",
    "Analogue Electronics",
    "Analog and Digital Communication",
    "Digital Signal Processing",
    "Analogue Electronics Lab",
    "Analog and Digital Communication Lab",
    "Digital Signal Processing Lab",
    "Introduction to Psychology",
    "Introduction to Literature",
    "Financial Accounting",
    "Probability and Random Processes",
    "Digital Systems",
    "Algorithms and Problem Solving",
    "Environmental Studies",
    "Digital Systems Lab",
    "Algorithms and Problem Solving Lab",
    "Industrial Economics",
    "Human Resource Management",
    "Universal Human Values",
  ],
];

const nine = {
  Monday: [
    "PF13 (18B15GE111)/EDD/CADD03/RAHUL KUMAR",
    "PF2 (18B15GE111)/EDD/CADD03/SUMIT MAHAJAN (PRABHAKAR JHA)",
    "PF4F5F6(15B17CI271)-CL1/VIKAS SHARMA/MUKESH/ AKANSHA/SHAILESH/HIMANI/ADITI SHARMA",
    "PF1(15B17PH271)-41/PRASHANT CHAUHAN",
    "PF9(15B17PH271)-027A/VIKAS MALIK",
    "LF18F19(15B11PH211)-228/SUNEET KUMAR AWASTHI",
    "TE2(24B11HS111)--126/SHWETA VERMA",
    "LF16F17(15B11PH211)-111/IMRAN",
    "PF12 (24B16HS111)-246/HSS SCHOLAR",
  ],
  Tuesday: [
    "PF5(15B17PH271)-027A/SUDIP HALDAR",
    "PF1 (18B15GE111)/EDD/CADD03/PIYUSH SHARMA",
    "PF3 (18B15GE111)/EDD/CADD03/HARISH BISHWAKARMA (NIRAJ KUMAR)",
    "TF14(24B11HS111)--121/SHWETA VERMA",
    "PF10 (24B16HS111)-240/AMBA AGARWAL",
    "LF11F12(15B11MA211)-SR05/NFMATHS1",
    "LF18F19(15B11PH211)-228/SUNEET KUMAR AWASTHI",
    "TF8(15B11CI211)-126/SHAILESH",
    "TF9(15B11CI211)-127/HIMANSHU",
    "TF6 (15B11PH211)-138/VIKAS MALIK",
    "LF7F8(15B11PH211)-DW04/PRASHANT CHAUHAN",
    "PF4 (24B16HS111)-246/PRAVEEN SHARMA",
  ],
  Wednesday: [
    "TF5(15B11PH211)-126/VIKAS MALIK",
    "TF6(15B11CI211)-127/VARTIKA",
    "PF4 (18B15GE111)/EDD/CADD03/NIRAJ KUMAR",
    "PF18 (18B15GE111)/EDD/CADD03/PRABHAKAR JHA (SUMIT MAHAJAN)",
    "PF13F14(15B17CI271)-CL1/MUKESH/SHRUTI GUPTA/SHARIQ/HIMANI",
    "LF1F2(15B11PH211)-228/NARENDRA KHATRI",
    "PE1(15B17PH271)-41/IMRAN",
    "PE3(15B17PH271)-027A/SUDIP HALDAR",
    "TF8(15B11PH211)-111/PRASHANT CHAUHAN",
    "LF7F8(15B11CI211)-SR05/ADITI SHARMA",
  ],
  Thursday: [
    "PF19 (18B15GE111)/EDD/CADD03/SUMIT MAHAJAN (PRABHAKAR JHA)",
    "PF11 (18B15GE111)/EDD/CADD03/HARISH BISHWAKARMA",
    "LE1E2(15B11CI211)-111/SNIGDHA",
    "PF12(15B17PH271)-027A/NARENDRA KHATRI",
    "PF3(15B17PH271)-41/SUNEET KUMAR AWASTHI/NFPHY2",
    "LE3E4(15B11MA211)-SR05/AMIT SRIVASTAVA",
    "LF1F2(15B11MA211)-244/PANKAJ KUMAR SRIVASTAVA",
    "LF13F14(15B11PH211)-225/SUDIP HALDAR",
    "LF16F17(24B11HS111)-229/ANURADHA GUPTA",
    "TF18(15B11PH211)-116/ANSHU D. VARSHNEY",
    "LF5F6(15B11MA211)-234/MOHD. SARFARAZ",
  ],
  Friday: [
    "LE1E2(15B11PH211)-226/NARENDRA KHATRI",
    "PF2(15B17PH271)-41/VIKAS MALIK",
    "PF17 (18B15GE111)/EDD/CADD03/NIRAJ KUMAR",
    "PF8 (18B15GE111)/EDD/CADD03/PRABHAKAR JHA (SUMIT MAHAJAN)",
    "TF11(15B11PH211)-116/AK",
    "LE3E4(15B11MA211)-217/AMIT SRIVASTAVA",
    "TF12(24B11HS111)--121/PRAVEEN SHARMA",
    "LF13F14(15B11MA211)-111/NFMATHS1",
    "LF18F19(15B11PH211)-230/SUNEET KUMAR AWASTHI",
  ],
  Saturday: [
    "PF12 (18B15GE111)/EDD/CADD03/NIRAJ KUMAR (HARISH BISHWAKARMA)",
    "PF7 (18B15GE111)/EDD/CADD03/PRABHAKAR JHA",
    "LF16F17(15B11PH211)-226/IMRAN",
    "TF14(15B11PH211)-127/SUDIP HALDAR",
    "PF11(15B17PH271)-027A/ANSHU D. VARSHNEY",
    "TF5(15B11MA211)-121/PANKAJ KUMAR SRIVASTAVA",
    "TF8(15B11MA211)-126/MOHD. SARFARAZ",
    "TF1(15B11CI211)-121/VARTIKA",
  ],
};

const ten = {
  Monday: [
    "LF16F17(15B11MA211)-226/PANKAJ KUMAR SRIVASTAVA",
    "PF7(24B16HS111)-240/EKTA SRIVASTAVA/HSS SCHOLAR",
    "TF19(15B11PH211)-113/NARENDRA KHATRI",
    "LE1E2(24B11HS111)-123/GKN",
    "TF3(15B11MA211)-138/KAMLESH KUMAR SHUKLA",
    "LE3E4(15B11PH211)-228/IMRAN",
    "TF10(15B11CI211)-126/PULKIT",
    "TF11(15B11CI211)-138/NEERAJ JAIN",
  ],
  Tuesday: [
    "TE3(24B11HS111)-116/SHWETA VERMA",
    "LF7F8(15B11MA211)-226/P. RANA",
    "TF17(15B11MA211)-121/KAMLESH KUMAR SHUKLA",
    "TE4(15B11CI211)-113/TWINKLE",
  ],
  Wednesday: [
    "TF12(15B11PH211)-113/AK",
    "LF5F6(24B11HS111)-225/ANSHU D. VARSHNEY",
    "LF9F10(15B11PH211)-229/SUDIP HALDAR",
    "PF3(24B16HS111)-240/PRAVEEN SHARMA/HSS SCHOLAR",
    "LF16F17(15B11MA211)-226/PANKAJ KUMAR SRIVASTAVA",
    "LF1F2(24B11HS111)-228/MOHD. SARFARAZ",
    "TF7(24B11HS111)-127/DEEPAK VERMA",
    "TF19(15B11CI211)-126/PULKIT",
  ],
  Thursday: [
    "PE1(24B16HS111)-240/EKTA SRIVASTAVA",
    "LF13F14(15B11MA211)-226/NFMATHS1",
    "LF1F2(24B11HS111)-228/MOHD. SARFARAZ",
    "TF10(24B11HS111)-113/SHWETA VERMA",
    "TE2(15B11PH211)-121/AMIT VERMA",
    "PE4(24B16HS111)-240/AMBA GARWAL",
  ],
  Friday: [
    "LE1E2(15B11MA211)-226/P. RANA",
    "TF16(24B11HS111)-121/SHWETA VERMA",
    "PF11(24B16HS111)-240/ANSHU BANWARI",
    "PF14(24B16HS111)-240/PRAVEEN SHARMA",
    "LE3E4(15B11CI211)-111/SHARIQ",
    "LF9F10(15B11MA211)-228/KAMLESH KUMAR SHUKLA",
    "LF18F19(15B11MA211)-225/NFMATHS1",
    "LF3F4(15B11CI211)-229/AKANSHA",
    "TF13(15B11PH211)-113/SUDIP HALDAR",
  ],
  Saturday: [
    "LE1E2(15B11MA211)-226/P. RANA",
    "LF13F14(15B11MA211)-228/NFMATHS1",
    "LF9F10(15B11CI211)-225/SATYAPRAKASH",
    "LE3E4(15B11PH211)-229/US/GFPHY",
    "LF1F2(15B11PH211)-111/NARENDRA KHATRI",
    "LF5F6(15B11CI211)-234/AYUSHI",
    "TF16(15B11CI211)-126/SHRUTI GUPTA",
    "TF18(15B11MA211)-138/AMIT SRIVASTAVA",
  ],
};

const elev = {
  Monday: [
    "TF1(24B11HS111)--121/DEEPAK VERMA",
    "LF5F6(15B11MA211)-228/MOHD. SARFARAZ",
    "PF16(15B17PH271)-41/SUNEET KUMAR AWASTHI/NFPHY1",
    "PF14(15B17PH271)-027A/ANSHU D. VARSHNEY/US/GFPHY",
    "TF11(24B11HS111)--244B/ANSHU BANWARI",
    "LE1E2(15B11PH211)-225/NARENDRA KHATRI",
    "LF3F4(15B11PH211)-229/SUNEET KUMAR AWASTHI",
    "TF12(15B11CI211)-126/SHRUTI GUPTA",
    "TF17(15B11CI211)-113/NIVEDITTA",
  ],
  Tuesday: [
    "LE3E4(24B11HS111)-228/SRTI JAIN",
    "PF6(15B17PH271)-027A/ANSHU D. VARSHNEY/PRASHANT CHAUHAN",
    "PF9 (24B16HS111)-240/NILU CHOUDHARY",
    "LF7F8(15B11CI211 )-226/ADITI SHARMA",
    "LF16F17(15B11PH211)-229/IMRAN",
    "LF13F14(15B11CI211 )-234/HIMANI",
    "PF18(24B16HS111)-246/HSS SCHOLAR",
  ],
  Wednesday: [
    "LF5F6(15B11PH211)-225/VIKAS MALIK",
    "TF2(24B11HS111)--138/ANSHU BANWARI",
    "LF7F8(15B11PH211)-226/PRASHANT CHAUHAN",
    "LE3E4(15B11PH211)-228/IMRAN",
    "PF13(15B17PH271)-027A/AV/NFPHY3",
    "PF19(15B17PH271)-41/ANUJ KUMAR/SUNEET KUMAR AWASTHI",
    "LF9F10(15B11CI211 )-234/SATYAPRAKASH",
  ],
  Thursday: [
    "PF4(15B17PH271)-027A/SUNEET KUMAR AWASTHI",
    "LF16F17(15B11MA211)-234/PANKAJ KUMAR SRIVASTAVA",
    "LF5F6(24B11HS111)-228/ANSHU D. VARSHNEY",
    "LF9F10(15B11CI211 )-226/SATYAPRAKASH",
    "LF1F2(15B11PH211)-111/NARENDRA KHATRI",
    "TF14(15B11CI211)-121/NEERAJ JAIN",
    "TF13(24B11HS111)--113/DEEPAK VERMA",
  ],
  Friday: [
    "TF10(15B11MA211)-126/KAMLESH KUMAR SHUKLA",
    "PE1E2E3,E4(15B17CI271)-CL1/SHARIQ/SNIGDHA/HIMANSHU/PULKIT/SHRUTI GUPTA/SATYAPRAKASH/DEVPRIYA",
    "LF1F2(15B11MA211)-226/PANKAJ KUMAR SRIVASTAVA",
    "LF3F4(24B11HS111)-228/MOHD. SARFARAZ",
    "LF5F6(15B11PH211)-229/VIKAS MALIK",
    "LF18F19(15B11CI211 )-225/SHAILESH",
    "LF9F10(24B11HS111)-230/JANRADAN",
  ],
  Saturday: [
    "F13F14F16F17F18F19E1E2E3E4 LUNCH",
    "LF9F10(15B11MA211)-225/KAMLESH KUMAR SHUKLA",
    "LF1F2(15B11CI211 )-111/ANURADHA",
    "TF4(24B11HS111)--127/DEEPAK VERMA",
    "TF6(24B11HS111)--121/ANSHU BANWARI",
    "TF19(15B11MA211)-116/AMIT SRIVASTAVA",
    "TF3(15B11PH211)-113/SUNEET KUMAR AWASTHI",
  ],
};

const twe = {
  Monday: [
    "F1F2F3F4F5F6F7F8F9F10F11F12 LUNCH",
    "LE3E4(15B11CI211 )-234/SHARIQ",
    "TF13(15B11MA211)-127/AMIT SRIVASTAVA",
    "LE1E2(15B11CI211 )-225/SNIGDHA",
    "LF18F19(15B11MA211)- 111/NFMATHS1",
  ],
  Tuesday: [
    "LF1F2(15B11CI211 )-234/ANURADHA",
    "F13F14F16F17F18F19E1E2E3E4 LUNCH",
    "LF3F4(15B11PH211) -226/SUNEET KUMAR AWASTHI",
    "LF11F12(15B11PH211) -228/ANUJ KUMAR",
  ],
  Wednesday: [
    "F1F2F3F4F5F6F7F8F9F10F11F12 LUNCH",
    "LE1E2(15B11CI211 )-226/SNIGDHA",
    "TF16(15B11PH211) -126/GFPHY",
    "TF17(15B11PH211) -121/GFPHY",
    "TF18(15B11CI211)-127/NEERAJ JAIN",
    "LE3E4(15B11MA211)-148/AMIT SRIVASTAVA",
  ],
  Thursday: [
    "F13F14F16F17F18F19E1E2E3E4 LUNCH",
    "LF5F6(15B11CI211 )-228/AYUSHI",
    "LF9F10(15B11MA211)-226/KAMLESH KUMAR SHUKLA",
    "LF7F8(24B11HS111)-230/AMBALIKA SARKAR",
    "PE2 (24B16HS111)-240/PRAVEEN SHARMA",
  ],
  Friday: [
    "TF19(24B11HS111)--116/DEEPAK VERMA",
    "F1F2F3F4F5F6F7F8F9F10F11F12F16 LUNCH",
    "LF13F14(15B11CI211 )-226/HIMANI",
  ],
  Saturday: [
    "LE1E2(15B11PH211) -226/NARENDRA KHATRI",
    "LF13F14(15B11CI211)-228/HIMANI",
    "LF16F17(15B11CI211)-234/ASHISH",
    "LF18F19(15B11CI211)-225/SHAILESH",
    "LF7F8(15B11CI211 )-229/ADITI SHARMA",
    "LF11F12(15B11PH211) -SR05/ANUJ KUMAR",
    "TF9(15B11PH211)-DW04/AMIT VERMA",
  ],
};

const oneo = {
  Monday: [
    "F13F14F16F17F18F19E1E2E3E4 LUNCH",
    "LF1F2(15B11CI211 )-226/ANURADHA",
    "LF9F10(24B11HS111)-228/JANRADAN",
    "LF11F12(15B11MA211)- SR05/NFMATHS1",
    "LF3F4(15B11CI211 )- 225/AKANARENDRA KAURSHA",
    "TF8(24B11HS111)--126/PRAVEEN SHARMA",
    "LF5F6(15B11PH211) -229/VIKAS MALIK",
    "TF7(15B11CI211)-121/HIMANI",
  ],
  Tuesday: [
    "TE4(24B11HS111)--116/PRAVEEN SHARMA",
    "LF13F14(15B11PH211) -234/SH",
    "F1F2F3F4F5F6F7F8F9F10F11F12 LUNCH",
    "LF18F19(15B11MA211)- 226/NFMATHS1",
    "LF16F17(15B11CI211 )-228/ASHISH",
    "TE1(24B11HS111)--121/DEEPAK VERMA",
  ],
  Wednesday: [
    "TF10(15B11PH211) -116/ANSHU D. VARSHNEY",
    "LF3F4(15B11MA211)-228/KAMLESH KUMAR SHUKLA",
    "LF7F8(15B11MA211)-234/P. RANA",
    "F13F14F16F17F18F19E1E2E3E4 LUNCH",
    "LF11F12(15B11CI211 )-226/MUKESH",
    "TF2(15B11PH211)-113/NARENDRA KHATRI",
    "TF5(24B11HS111)--111/DEEPAK VERMA",
  ],
  Thursday: [
    "F1F2F3F4F5F6F7F8F9F10F11F12 LUNCH",
    "TF17(24B11HS111)--116/DEEPAK VERMA",
    "TF18(24B11HS111)--121/ANSHU BANWARI",
    "LE3E4(24B11HS111)-228/ARJ",
  ],
  Friday: [
    "F13F14F17F18F19E1E2E3E4 LUNCH",
    "LF3F4(15B11PH211) -228/SUNEET KUMAR AWASTHI",
    "LF11F12(15B11CI211 )-217/MUKESH",
    "LF9F10(15B11PH211) -230/SUDIP HALDAR",
    "LF7F8(15B11PH211)-226/PRASHANT CHAUHAN",
    "PF16 (24B16HS111)-240/EKTA SRIVASTAVA",
    "PF6 (24B16HS111)-246/AMBA AGARWAL",
  ],
  Saturday: [],
};

const twoo = {
  Monday: [
    "LE1E2(15B11MA211)-111/P. RANA",
    "TE3(15B11MA211)-244/AMIT SRIVASTAVA",
    "PF17 (24B16HS111)-240/ANSHU BANWARI",
    "PF5 (24B16HS111)-246/NILU CHOUDHARY",
    "PF16(15B17CI271)-CL1/SATYAPRAKASH/SNIGDHA",
    "PF7(15B17PH271)-027A/IMRAN",
    "PF8(15B17PH271)-41/PRASHANT CHAUHAN",
    "PF9 (18B15GE111)/EDD/CADD03/PIYUSH SHARMA",
    "PE4 (18B15GE111)/EDD/CADD03/HARISH BISHWAKARMA (RAHUL KUMAR)",
    "LF11F12(24B11HS111)-118/HIMANSHU AGARWAL",
    "PF1F2F3(15B17CI271)-CL1/ADITISHARMA/SHARIQ/HIMANI/ SHIKHA MEHTA/PULKIT/SHRUTI GUPTA",
  ],
  Tuesday: [
    "TE4 (15B11PH211)-113/GFPHY",
    "PF18(15B17PH271)-027A/NARENDRA KHATRI",
    "TF16(15B11MA211)-127/KAMLESH KUMAR SHUKLA",
    "LF3F4(15B11CI211)-226/AKANSHA",
    "PF17(15B17PH271)-41/SUDIP HALDAR/VIKAS MALIK",
    "TF1(15B11MA211)-244/PANKAJ KUMAR SRIVASTAVA",
    "PF19 (24B16HS111)-246/EKTA SRIVASTAVA",
    "PF2(24B16HS111)-2460ANSHU BANWARI",
    "TF5(15B11CI211)-138/VIKAS SHARMA",
    "PF14 (18B15GE111)/EDD/CADD03/SUMIT MAHAJAN",
    "PF6 (18B15GE111)/EDD/CADD03/RAHUL KUMAR (HARISH BISHWAKARMA)",
    "PF7F8F9(15B17CI271)-CL1/HIMANSHU/DEVPRIYA/SHIKHA MEHTA/ SNIGDHA, NIVEDITA/SATYAPRAKASH/MUKESH",
    "TF12(15B11MA211)-217/AMIT SRIVASTAVA",
  ],
  Wednesday: [
    "TE1(15B11PH211)-116/ANSHU D. VARSHNEY",
    "LF13F14(15B11PH211)-234/SUDIP HALDAR",
    "LF5F6(15B11CI211)-226/AYUSHI",
    "PF10(18B15GE111)/EDD/CADD03/SUMIT MAHAJAN",
    "PF8(24B16HS111)-240/PRAVEEN SHARMA",
    "PF16F17F18F19(15B17CI271)-CL1/RASHMI/ARTIJAIN/SHRUTIGUPTA/ NIVEDITA/SHAILESH",
    "PE2(15B17PH271)-027A/ANUJ KUMAR",
    "PE4(15B17PH271)-41/AMIT VERMA",
    "TF4(15B11MA211)-121/KAMLESH KUMAR SHUKLA",
    "TF7(15B11MA211)-126/MOHD. SARFARAZ",
    "PE3(24B16HS111)-246/ANSHU BANWARI",
  ],
  Thursday: [
    "PE1(18B15GE111)/EDD/CADD03/PRABHAKAR JHA",
    "PF1(24B16HS111)-240/HSS SCHOLAR",
    "PF13(24B16HS111)-246/EKTA SRIVASTAVA",
    "PF10(15B17PH271)-41/NARENDRA KHATRI/AMIT VERMA",
    "LF3F4(15B11MA211)-226/KAMLESH KUMAR SHUKLA",
    "LE3E4(15B11CI211)-234/SHARIQ",
    "LF11F12(15B11PH211)-228/ANUJ KUMAR",
    "PF16(18B15GE111)/EDD/CADD03/PIYUSH SHARMA(NIRAJ KUMAR)",
    "LF18F19(24B11HS111)-234/RASHMI KUSHWAHA",
    "LF7F8(24B11HS111)-230/AMBALIKA SRAKAR",
    "PE2(18B15GE111)/EDD/CADD03/NIRAJ KUMAR(PIYUSH SHARMA)",
  ],
  Friday: [
    "LF3F4(15B11MA211)-230/KAMLESH KUMAR SHUKLA",
    "PF5(18B15GE111)/EDD/CADD03/HARISH BISHWAKARMA",
    "PE3(18B15GE111)/EDD/CADD03/PIYUSH SHARMA(RAHUL KUMAR)",
  ],
  Saturday: [],
};
const three = {
  Monday: [
    "TF6(15B11MA211)-244/PANKAJ KUMAR SRIVASTAVA",
    "LF11F12(15B11CI211)-228/MUKESH",
    "TF4(15B11CI211)-126/VIKAS SHARMA",
    "TE1(15B11CI211)-127/NIVEDITTA",
    "TE2(15B11MA211)-138/MOHD. SARFARAZ",
    "TE3(15B11CI211)-234/TWINKLE",
  ],
  Tuesday: [
    "TE3(15B11PH211)-116/GFPHY",
    "LF1F2(15B11MA211)-SR05/PANKAJ KUMAR SRIVASTAVA",
    "TE2(15B11CI211)-127/SHRUTI GUPTA",
  ],
  Wednesday: [
    "TE1(15B11MA211)-138/P. RANA",
    "TF7(15B11PH211)-121/PRASHANT CHAUHAN",
    "LF5F6(15B11MA211)-226/MOHD. SARFARAZ",
    "LF11F12(24B11HS111)-228/HIMANSHU AGRAWAL",
    "TF13(15B11CI211)-126/PULKIT",
    "LF13F14(24B11HS111)-230/JANARDAN",
  ],
  Thursday: [
    "LF3F4(24B11HS111)-228/MOHD. SARFARAZ",
    "LF11F12(15B11MA211)-226/NFMATHS1",
    "TF2(15B11MA211)-138/PANKAJ KUMAR SRIVASTAVA",
    "TF9(24B11HS111)-116/DEEPAK VERMA",
  ],
  Friday: [
    "TF9(15B11MA211)-121/PANKAJ KUMAR SRIVASTAVA",
    "PF10F11F12(15B17CI271)-CL1/ARTI JAIN/SHRUTI GUPTA/HIMANSHU/DEVPRIYA/VIKAS SHARMA/ADITI SHARMA",
    "LF7F8(15B11MA211)-226/P. RANA",
    "LF13F14(24B11HS111)-230/JANARDAN",
    "LF16F17(24B11HS111)-148/ANURADHA GUPTA",
    "LF18F19(24B11HS111)-153/RASHMI KUSHWAHA",
    "TF3(24B11HS111)-127/DEEPAK VERMA",
  ],
  Saturday: [],
};

const fouro = {
  Monday: [
    "TF1(15B11PH211)-228/NARENDRA KHATRI",
    "TF4(15B11PH211)-121/SUNEET KUMAR AWASTHI",
  ],
  Tuesday: ["LF9F10(15B11PH211)-228/SUDIP HALDAR"],
  Wednesday: [
    "LE1E2(24B11HS111)-228/GAURAV KUMAR NIGAM",
    "TF11(15B11MA211)-138/P. RANA",
    "TF2(15B11CI211)-113/VARTIKA",
  ],
  Thursday: ["TF3(15B11CI211)-116/VARTIKA"],
  Friday: ["LF16F17(15B11CI211)-148/ASHISH"],
  Saturday: [],
};

const fournine = {
  Monday: [
    "PF1F2F3 (15B11CI471) - CL2/KRISHNA/ANURADHA/MINAL/TWINKLE/ADITIPRIYA/SHRUTI JAISWAL",
    "PE16 (18B15EC212) - 133/AJIT KUMAR/PRIYANKA KWATRA",
    "PF11 (18B15EC213) - 134/JITENDRA MOHAN/PARUL ARORA",
    "PE17 (24B45EC212) - 142/B SURESH",
    "TE15 (15B11EC411) - 116/NILUFAR YASMIN",
  ],
  Tuesday: [
    "LF1F2 (18B11EC213) - CR54/ATUL KUMAR",
    "PE15 (15B17EC473) - 134/B SURESH/SAJAI VIR SINGH",
    "PE16 (15B17EC471) - 224/142/VINAY ANAND TIKKIWAL/BHARTENDU CHATURVEDI",
    "PE17 (18B15EC212) - 133/AJIT KUMAR/PRIYANKA KWATRA",
    "TF3 (18B11EC213) - 116/ABHISHEK KASHYAP",
    "LF9F10 (15B11CI411) - 244B/ADITI PRIYA",
    "LF5F6 (15B11CI411) - 111/TWINKLE",
  ],
  Wednesday: [
    "LF3F4 (18B11EC213) - CR53/BAJRANG BANSAL",
    "PE17 (15B17EC471) - 224/142/NILUFAR YASMIN/BHARTENDU CHATURVEDI",
    "PF7F8F9 (15B11CI471) - CL2/KRISHNA/SHRUTI JAISWAL/MINAL/ADITIPRIYA/NEERAJ PATHAK/TWINKLE/PRAKHAR MISHRA",
    "TF2 (18B11EC213) - 116/ATUL KUMAR",
    "TF6 (15B11MA301) - 121/AMITA BHAGAT",
  ],
  Thursday: [
    "LF7F8 (15B11CI411) - CR53/NEERAJ PATHAK",
    "PE17 (15B17EC473) - 134/B SURESH/SAJAIVEER SINGH",
    "LF11 (19B13BT211) - CR54/GUNJAN PUROHIT",
    "LE15E16 (15B11EC411) - 244B/BHARTENDU CHATURVEDI",
  ],
  Friday: [
    "LF7F8 (18B11EC213) - CR53/MEGHA AGARWAL",
    "PE15 (15B17EC471) - 224/142/VINAY ANAND TIKKIWAL/ABHISHEK KASHYAP",
    "LE17 (15B11EC411) - 244/BHARTENDU CHATURVEDI",
    "LF9F10 (19B13BT211) - CR54/NFBIOTECH",
  ],
  Saturday: [
    "LE15E16 (18B11EC212) - CR53/RAGHVENDRA KUMAR SINGH",
    "PE17 (24B45EC212) - 134/142/B SURESH",
    "PF1 (18B15EC212) - 142/JITENDRA MOHAN/AJIT KUMAR",
  ],
};

const fourten = {
  Monday: [
    "TF10 (15B11MA301) - 111/UMME ZAINAB",
    "LF5F6 (18B11EC213) - CR53/MEGHA AGARWAL",
    "LF7F8 (15B11CI411) - CR54/NEERAJ PATHAK",
    "TE15 (15B11EC413) - 121/KAPIL DEV TYAGI",
  ],
  Tuesday: [
    "LF1F2 (15B11CI411) - CR54/KRISHNA ASAWA",
    "LF7F8 (15B11MA301) - CR53/LAKHVEER KAUR",
    "LF11 (19B13BT211) - 111/GUNJAN PUROHIT",
    "LF3F4 (15B11CI411) - 123/PRAKHAR",
  ],
  Wednesday: [
    "LF5F6 (15B11MA301) - CR54/P. RANA",
    "TF11 (15B11MA301) - 116/LAKHVEER KAUR",
    "LF1F2 (24B11HS111) - 230/ARG",
    "LF3F4 (24B11HS111) - CR53/ARJ",
    "PE16 (24B45EC212) - 134/ANKUR GUPTA",
    "PE15 (18B15EC212) - 133/AJIT KUMAR/ABHISHEK KASHYAP",
  ],
  Thursday: [
    "LF7F8 (18B11EC213) - CR53/MEGHA AGARWAL",
    "LF9F10 (15B11MA301) - CR54/AMITA BHAGAT",
    "LF11 (15B11MA301) - 217/LAKHVEER KAUR",
    "TF5 (24B11HS111) - 116/SAKSHI VARSHNEY",
    "LF3F4 (19B13BT211) - 230/GUNJAN PUROHIT",
    "LF5F6 (24B11HS111) - 111/RSK",
  ],
  Friday: [
    "TE16 (18B11EC212) - 116/RAGHVENDRA KUMAR SINGH",
    "LF7F8 (15B11CI411) - CR53/NEERAJ PATHAK",
    "LF5F6 (19B13BT211) - 230/MONIKA BAJPAI",
    "LE17 (24B41EC212) - 244/PARUL ARORA",
    "LF1F2 (15B11MA301) - 217/MOHD. SARFARAZ",
  ],
  Saturday: [
    "LF3F4 (15B11MA301) - 148/AMITA BHAGAT",
    "TF8 (15B11MA301) - 116/LAKHVEER KAUR",
    "LE15E16 (15B11EC411) - CR53/BHARTENDU CHATURVEDI",
    "LF11 (18B11EC213) - 123/BAJRANG BANSAL",
    "LF5F6 (19B13BT211) - CR54/MONIKA BAJPAI",
    "TF7 (18B11EC213) - 113/PRIYANKA KWATRA",
    "TF9 (15B11MA301) - 121/MOHD. SARFARAZ",
  ],
};
const foureleven = {
  Monday: [
    "LALL (15B1NHS435) - 148/SAKSHI VARSHNEY",
    "LALL (16B1NHS431) - 153/PRAVEEN SHARMA",
    "LALL (19B12HS412) - 117/AMBA AGARWAL",
    "LALL (15B1NHS432) - 230/SHWETA VERMA",
    "LALL (15B1NHS431) - 226/EKTA SRIVASTAVA",
  ],
  Tuesday: [
    "LF11 (15B11MA301) - CR53/LAKHVEER KAUR",
    "PF2 (18B15EC212) - 142/ASHISH GUPTA/JITENDRA MOHAN",
    "LF3F4 (15B11MA301) - CR54/AMITA BHAGAT",
    "TF5 (18B11EC213) - 116/PRIYANKA KWATRA",
    "LE17 (15B11EC411) - 111/BHARTENDU CHATURVEDI",
    "LE15E16 (18B11EC212) - 244B/RAGHVENDA KUMAR SINGH",
    "LF7F8 (18B11EC213) - 217/MEGHA AGARWAL",
  ],
  Wednesday: [
    "LF9F10 (15B11MA301) - 117/AMITA BHAGAT",
    "PF3 (18B15EC213) - 142/ASHISH GUPTA/ATUL KUMAR",
    "LF11 (18B11EC213) - 244B/BAJRANG BANSAL",
    "LE17 (15B11EC411) - CR54/BHARTENDU CHATURVEDI",
    "TF4F5F6F7 (15B1NHS435) - 113/SAKSHI VARSHNEY",
    "TF5F6F7F8 (16B1NHS431) - 121/PRAVEEN SHARMA",
    "TF5F6F7F8F9 (19B12HS412) - 126/AMBA AGARWAL",
    "TF5F6F7F8 (15B1NHS432) - 127/SHWETA VERMA",
    "TF5F6F7F8 (15B1NHS431) - 116/EKTA SRIVASTAVA",
  ],
  Thursday: [
    "PF4 (18B15EC213) - 142/JITENDRA MOHAN/NILUFAR YASMIN",
    "PF10F11 (15B11CI471) - CL2/KRISHNA/NEERAJ PATHAK/ADITIPRIYA/PRAKHAR MISHRA/ANURADHA/SHRUTI JAISWAL",
    "LF5F6 (15B11CI411) - CR53/TWINKLE",
    "LE15E16 (24B11HS111) - 244B/PRIYANKA KWATRA",
    "TF3 (15B11MA301) - 116/AMITA BHAGAT",
    "LF7F8 (15B11MA301) - 217/LAKHVEER KAUR",
    "TE17 (15B11EC411) - 126/BHARTENDU CHATURVEDI",
  ],
  Friday: [
    "LF1F2 (15B11CI411) - 217/KRISHNA ASAWA",
    "PF5 (18B15EC213) - 142/ASHISH GUPTA/BAJRANG BANSAL",
    "LE15E16 (15B11EC411) - CR53/BHARTENDU CHATURVEDI",
    "LE17 (15B11EC413) - 148/SAJAI VIR SINGH",
    "LF11 (19B13BT211) - CR54/GUNJAN PUROHIT",
    "LF7F8 (19B13BT211) - 153/MONIKA BAJPAI",
    "TF10 (24B11HS111) - 121/SAKSHI VARSHNEY",
    "TF3 (24B11HS111) - 116/NILU CHOUDHARY",
  ],
  Saturday: [
    "LF3F4 (15B11CI411) - 230/PRAKHAR",
    "LF9F10 (15B11CI411) - CR53/ADITI PRIYA",
    "LF11 (15B11CI411) - 217/MINAL",
    "LF5F6 (15B11MA301) - 148/P. RANA",
    "LE17 (24B41EC212) - 244/PARUL ARORA",
    "LF7F8 (19B13BT211) - CR54/MONIKA BAJPAI",
    "TF1 (15B11MA301) - 126/LAKHVEER KAUR",
    "PE15 (24B45EC212) - 142/ANKUR GUPTA",
    "PE16 (15B17EC473) - 134/SAJAI VIR SINGH/VINAY ANAD TIKKIWAL",
  ],
};
const fourtwelve = {
  Monday: [
    "LF5F6 (15B11CI411) - 226/TWINKLE",
    "LF1F2 (19B13BT211) - CR53/GUNJAN PUROHIT",
    "LF9F10 (19B13BT211) - 230/NFBIOTECH",
    "TE15 (18B11EC212) - 116/RAGHVENDA KUMAR SINGH",
    "TF7 (15B11MA301) - 121/LAKHVEER KAUR",
    "LF3F4 (15B11MA301) - CR54/AMITA BHAGAT",
  ],
  Tuesday: [
    "TF1 (18B11EC213) - 116/ATUL KUMAR",
    "LF3F4 (19B13BT211) - CR54/GUNJAN PUROHIT",
    "LE17 (15B11EC413) - 121/SAJAI VIR SINGH",
    "TE16 (24B11HS111) - 126/SAKSHI VARSHNEY",
  ],
  Wednesday: [
    "LF7F8 (15B11MA301) - CR53/LAKHVEER KAUR",
    "LF11 (15B11CI411) - 244B/MINAL",
    "LE17 (24B41EC212) - 244/PARUL ARORA",
    "LF1F2 (19B13BT211) - CR54/GUNJAN PUROHIT",
    "LF5F6 (19B13BT211) - 217/MONIKA BAJPAI",
    "TF4 (15B11MA301) - 116/AMITA BHAGAT",
    "TE15 (24B11HS111) - 113/NILU CHOUDHARY",
    "LF9F10 (19B13BT211) - 230/NFBIOTECH",
  ],
  Thursday: [
    "LF1F2 (15B11MA301) - CR54/MOHD. SARFARAZ",
    "LE15E16 (18B11EC212) - 244B/RAGHVENDA KUMAR SINGH",
    "TF7 (24B11HS111) - 116/NILU CHOUDHARY",
    "TE17 (24B11HS111) - 113/HSS SCHOLAR",
    "TF9 (18B11EC213) - 121/ABHISHEK KASHYAP",
    "LF5F6 (18B11EC213) - CR53/MEGHA AGARWAL",
  ],
  Friday: [
    "LF1F2 (18B11EC213) - 217/ATUL KUMAR",
    "LE15E16 (24B41EC212) - CR53/PARUL ARORA",
    "LF11 (15B11MA301) - CR54/LAKHVEER KAUR",
    "TF9 (24B11HS111) - 126/SAKSHI VARSHNEY",
    "TF10 (18B11EC213) - 121/ABHISHEK KASHYAP",
    "TF8 (24B11HS111) - 127/NILU CHOUDHARY",
  ],
  Saturday: [
    "LF3F4 (18B11EC213) - 217/BAJRANG BANSAL",
    "LF9F10 (18B11EC213) - CR53/ATUL KUMAR",
    "LF1F2 (19B13BT211) - CR54/GUNJAN PUROHIT",
    "TF8 (18B11EC213) - 126/PRIYANKA KWATRA",
    "TE17 (18B11EC212) - 244/RAGHVENDA KUMAR SINGH",
    "LF5F6 (24B11HS111) - 148/RSK",
  ],
};
const fourone = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: []
};


const fourtwo = {
  Monday: [
    "LE15E16 (15B11EC413) - 148/SAJAI VIR SINGH",
    "TF5 (15B11MA301) - 116/AMITA BHAGAT",
    "LE17F9 (24B11HS111) - CR53/PRIYANKA KWATRA",
    "LF7F8 (24B11HS111) - CR54/AMBALIKA SARKAR",
    "TF1F2F3 (15B1NHS435) - 113/SAKSHI VARSHNEY",
    "TF1F2F3F4 (16B1NHS431) - 121/PRAVEEN SHARMA",
    "TF1F2F3F4 (19B12HS412) - 126/AMBA AGARWAL",
    "TF1F2F3F4 (15B1NHS432) - 127/SHWETA VERMA",
    "TF1F2F3F4 (15B1NHS431) - 138/EKTA SRIVASTAVA",
  ],
  Tuesday: [
    "LF1F2 (15B11MA301) - CR53/MOHD. SARFARAZ",
    "LF9F10 (15B11MA301) - CR54/AMITA BHAGAT",
    "TE16 (15B11EC413) - 116/KAPIL DEV TYAGI",
    "TF11 (24B11HS111) - 126/SAKSHI VARSHNEY",
    "PF4F5F6 (15B11CI471) - CL2/KRISHNA/NEERAJ PATHAK/PRAKHAR MISHRA/TWINKLE/SHRUTI JAISWAL/MINAL",
  ],
  Wednesday: [
    "LALL (15B1NHS435) - 148/SAKSHI VARSHNEY",
    "LALL (16B1NHS431) - 153/PRAVEEN SHARMA",
    "LALL (19B12HS412) - 117/AMBA AGARWAL",
    "LALL (15B1NHS432) - 230/SHWETA VERMA",
    "LALL (15B1NHS431) - 244B/EKTA SRIVASTAVA",
  ],
  Thursday: [
    "LF1F2 (15B11CI411) - CR54/KRISHNA ASAWA",
    "LF3F4 (15B11CI411) - CR53/PRAKHAR",
    "LE17 (18B11EC212) - 244/RAGHVENDA KUMAR SINGH",
    "LE15E16 (15B11EC413) - 148/SAJAI VIR SINGH",
    "TF6 (18B11EC213) - 113/PRIYANKA KWATRA",
  ],
  Friday: [
    "LE15E16 (15B11EC413) - CR53/SAJAI VIR SINGH",
    "LE17 (18B11EC212) - 244/RAGHVENDA KUMAR SINGH",
    "TF4 (18B11EC213) - 116/ABHISHEK KASHYAP",
    "LF7F8 (19B13BT211) - 217/MONIKA BAJPAI",
    "PF10 (18B15EC213) - 134/ASHISH GUPTA/ATUL KUMAR",
  ],
  Saturday: [],
};

const fourthree = {
  Monday: [
    "PE16 (24B45EC212) - 142/ANKUR GUPTA",
    "PF6 (18B15EC213) - 134/PARUL ARORA/BAJRANG BANSAL",
    "TF1 (24B11HS111) - 116/SAKSHI VARSHNEY",
    "TF2 (15B11MA301) - 113/AMITA BHAGAT",
    "LF9F10 (18B11EC213) - CR54/ATUL KUMAR",
    "LF11 (15B11CI411) - 217/MINAL",
    "LF3F4 (24B11HS111) - 230/ARJ",
  ],
  Tuesday: [
    "LE15E16 (24B41EC212) - CR53/PARUL ARORA",
    "LE17 (18B11EC212) - CR54/RAGHVENDA KUMAR SINGH",
    "LF11 (18B11EC213) - 244B/BAJRANG BANSAL",
    "PF9 (18B15EC213) - 134/NILUFAR YASMIN/MEGHA AGARWAL",
    "LF1F2 (24B11HS111) - 217/ARG",
  ],
  Wednesday: [
    "PF8 (18B15EC213) - 134/BAJRANG BANSAL/MEGHA AGARWAL",
    "LF9F10 (15B11CI411) - CR53/ADITI PRIYA",
    "LE15E16 (24B41EC212) - CR54/PARUL ARORA",
    "LE17 (15B11EC413) - 244B/SAJAI VIR SINGH",
    "LF3F4 (19B13BT211) - 217/GUNJAN PUROHIT",
    "TF6 (24B11HS111) - 116/SAKSHI VARSHNEY",
    "TF11 (18B11EC213) - 113/ABHISHEK KASHYAP",
  ],
  Thursday: [
    "LF3F4 (18B11EC213) - CR53/BAJRANG BANSAL",
    "LF1F2 (18B11EC213) - CR54/ATUL KUMAR",
    "LF5F6 (15B11MA301) - 217/P. RANA",
    "TE17 (15B11EC413) - 111/KAPIL DEV TYAGI",
    "TF8F9F10F11E15E16E17 (15B1NHS435) - 127/SAKSHI VARSHNEY",
    "TF9F10F11E15E16E17 (16B1NHS431) - 121/PRAVEEN SHARMA",
    "TF9F10F11E15E16E17 (19B12HS412) - 126/AMBA AGARWAL",
    "TF9F10F11E15E16E17 (15B1NHS432) - 113/SHWETA VERMA",
    "PF7 (18B15EC213) - 134/MEGHA AGARWAL/PARUL ARORA",
  ],
  Friday: [
    "TF2 (24B11HS111) - 116/SAKSHI VARSHNEY",
    "LF5F6 (18B11EC213) - CR53/MEGHA AGARWAL",
    "LF7F8 (24B11HS111) - 217/AMBALIKA SARKAR",
    "TF4 (24B11HS111) - 113/NILU CHOUDHARY",
    "PE15 (24B45EC212) - 142/ANKUR GUPTA",
  ],
  Saturday: [],
};

const fourfour = {
  Monday: [],
  Tuesday: [
    "TE16 (15B11EC411) - 116/BHARTENDU CHATURVEDI",
    "LF10F11 (24B11HS111) - CR53/ARM",
  ],
  Wednesday: [
    "LF10F11 (24B11HS111) - 230/ARM",
    "LE15E16 (24B11HS111) - 217/PRIYANKA KWATRA",
  ],
  Thursday: ["LE17F9 (24B11HS111) - CR53/PRIYANKA KWATRA"],
  Friday: ["LF9F10 (18B11EC213) - 244B/ATUL KUMAR"],
  Saturday: [],
};
