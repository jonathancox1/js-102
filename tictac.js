// if 0[0] 0[1] 0[2] - top 
// or 0[0] 1[0] 2[0] - left side
// or 2[0] 2[1] 2[2] - bottom
// or 0[2] 1[2] 2[2] - right side
// or 1[0] 1[1] 1[2] - middle left/right
// or 0[1] 1[1] 2[1] - middle top/bottom
// or 0[0] 1[1] 2[2] - diagonal topleft/bottomright
// or 0[2] 1[1] 2[0] - diagonal topright/bottomleft



function solve(arr) {
    if (arr[0][0] === 'O' && arr[0][1] === 'O' && arr[0][2] === 'O'){
        console.log('O wins - top row');
    } else if (arr[0][0] === 'O' && arr[1][0] === 'O' && arr[2][0] === 'O') {
        console.log('0 wins - left side')
    } else if (arr[2][0] === 'O' && arr[2][1] === 'O' && arr[2][2] === 'O') {
        console.log('0 wins - bottom row')
    } else if (arr[0][2] === 'O' && arr[1][2] === 'O' && arr[2][2] === 'O') {
        console.log('0 wins - right side')
    } else if (arr[1][0] === 'O' && arr[1][1] === 'O' && arr[1][2] === 'O') {
        console.log('0 wins - middle/left to right')
    } else if (arr[0][1] === 'O' && arr[1][1] === 'O' && arr[2][1] === 'O') {
        console.log('0 wins - middle top/bottom')
    } else if (arr[0][0] === 'O' && arr[1][1] === 'O' && arr[2][2] === 'O') {
        console.log('0 wins - diagonal topleft/bottomright')
    } else if (arr[0][2] === 'O' && arr[1][1] === 'O' && arr[2][0] === 'O') {
        console.log('0 wins - diagonal topright/bottomleft') 
    } else if (arr[0][0] === 'x' && arr[0][1] === 'x' && arr[0][2] === 'x') {
        console.log('x wins - top row')
    } else if (arr[0][0] === 'x' && arr[1][0] === 'x' && arr[2][0] === 'x') {
        console.log('x wins - left side')
    } else if (arr[2][0] === 'x' && arr[2][1] === 'x' && arr[2][2] === 'x') {
        console.log('x wins - bottom row')
    } else if (arr[0][2] === 'x' && arr[1][2] === 'x' && arr[2][2] === 'x') {
        console.log('x wins - right side')
    } else if (arr[1][0] === 'x' && arr[1][1] === 'x' && arr[1][2] === 'x') {
        console.log('x wins - middle/left to right')
    } else if (arr[0][1] === 'x' && arr[1][1] === 'x' && arr[2][1] === 'x') {
        console.log('x wins - middle top/bottom')
    } else if (arr[0][1] === 'x' && arr[1][1] === 'x' && arr[2][2] === 'x') {
        console.log('x wins - diagonal topleft/bottomright')
    } else if (arr[0][2] === 'x' && arr[1][1] === 'x' && arr[2][0] === 'x') {
        console.log('x wins - diagonal topright/bottomleft')
    }  else {
        console.log('null wins');
    }
}

const game = [
['x', 'O', 'x'], 
['O', 'x', 'x'], 
['x', 'O', 'x']];


solve(game);