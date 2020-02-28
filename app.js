function pass(input){
    let n = Number(input[0]);
    let l = Number(input[1]);
    let solution = "";
    let passwordList = "";

    for(let s1 = 1; s1 <= n; s1++){
        for(let s2 = 1; s2 <= n; s2++){
            for(let s3ascii = 97; s3ascii < 97 + l; s3ascii++){
                let s3 = String.fromCharCode(s3ascii);
                for(let s4ascii = 97; s4ascii < 97 + l; s4ascii++){
                    let s4 = String.fromCharCode(s4ascii);
                    for(let s5 = Math.max(s1, s2) + 1; s5 <= n; s5++){
                        solution = "" + s1 + s2 + s3 + s4 + s5;
                        passwordList = passwordList + solution + " ";
                    }
                }
            }
        }
    }
    console.log(passwordList);
}
pass([3,1]);