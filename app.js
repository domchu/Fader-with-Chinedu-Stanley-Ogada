const fader = document.querySelector(".fader");
const nextBtn = fader.querySelector(".fader-btn:last-child");
const prevBtn = fader.querySelector(".fader-btn");

const nodes = [
  { content: "<img src='./img/1.jpg'>" },
  { content: "<img src='./img/2.jpg'>" },
  { content: "<img src='./img/3.jpg'>" },
  { content: "<img src='./img/4.jpg'>" },
];

const state = {
  currentNodeIndex: 0,
};

// State Updater
const addUpCurrentNodeIndex = () => {
  if (state.currentNodeIndex + 1 < nodes.length)
    state.currentNodeIndex = state.currentNodeIndex + 1;
  else state.currentNodeIndex = 0;
};
// State Updater
const subtractFromCurrentNodeIndex = () => {
  if (state.currentNodeIndex === 0) state.currentNodeIndex = nodes.length - 1;
  else state.currentNodeIndex = state.currentNodeIndex - 1;
};

// State User
const displayCurrentNode = () => {
  fader.querySelector(
    ".fader-node-list"
  ).innerHTML = `<div class="fader-node">${
    nodes[state.currentNodeIndex].content
  }</div>`;
};
displayCurrentNode();

const handleNextBtnClick = () => {
  // Upate state
  addUpCurrentNodeIndex();
  // Use state
  displayCurrentNode();
};
const handlePrevBtnClick = () => {
  // Upate state
  subtractFromCurrentNodeIndex();
  // Use state
  displayCurrentNode();
};

setInterval(handleNextBtnClick, 4000);

nextBtn.addEventListener("click", handleNextBtnClick);
prevBtn.addEventListener("click", handlePrevBtnClick);
