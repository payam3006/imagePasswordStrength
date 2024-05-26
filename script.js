const q = console.log;

//use 100vh for mobile responsive
//COP!!!
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();
///////////////////////////////////////////

const checkStrenght = () => {
  q(document.getElementById("password").value.length);
  if (document.getElementById("password").value.length <= 20) {
    document.getElementById("main").style = `filter: blur(${
      20 - document.getElementById("password").value.length
    }px);`;
  }
};

document.getElementById("password").addEventListener("input", checkStrenght);
