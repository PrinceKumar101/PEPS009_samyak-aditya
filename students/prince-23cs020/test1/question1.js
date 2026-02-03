const main = () => {
  let count = 0;
  let isDisabled = false;
  const inc = () => {
    if (isDisabled) return;
    count++;
    countPara.innerText = `Count: ${count}`;
    isDisabled = true;
    setTimeout(() => (isDisabled = false), 1000);
  };
  return { inc };  
};

const btn = document.getElementById("btn");
const countPara = document.getElementById("count");

const { inc } = main();

btn.addEventListener("click", inc);
