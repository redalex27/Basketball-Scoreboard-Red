let rightScore = document.getElementById("score-el-rght")
let leftScore = document.getElementById("score-el-lft")
let rightResult = 0
let leftResult = 0


function add1Point(){
  rightResult +=1
  rightScore.textContent = rightResult
}
function add2Points(){
  rightResult +=2
  rightScore.textContent = rightResult
}
function add3Points(){
  rightResult +=3
  rightScore.textContent = rightResult
}
function add1PointLft(){
  leftResult +=1
  leftScore.textContent = leftResult
}
function add2PointsLft(){
  leftResult +=2
  leftScore.textContent = leftResult
}
function add3PointsLft(){
  leftResult +=3
  leftScore.textContent = leftResult
}