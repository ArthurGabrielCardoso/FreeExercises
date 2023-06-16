// TODO: Add code to check answers to questions
document.addEventListener('DOMContentLoaded', function () {

    // When click  on correct answer button, set the green color
    let correct = document.querySelector('.correct');
    correct.addEventListener('click', function (event) {
        correct.style.border = '2px solid #07a014c7';
        correct.style.backgroundColor = '#07a0142c';
        document.querySelector('#feedback2').innerHTML = "✔️";
        document.querySelector('#feedback2').style.backgroundColor = '#26921c4f';
        document.querySelector('.li').style.color = 'green';
    });


    // When click  on incorrect answer button, set the red color
    let incorrects = document.querySelectorAll('.incorrect');
    for (let i = 0; i < incorrects.length; i++) {
        incorrects[i].addEventListener('click', function (event) {
            incorrects[i].style.border = '2px solid #c00606f6';
            incorrects[i].style.backgroundColor = '#92201c49';
            document.querySelector('#feedback2').innerHTML = "❌";
            document.querySelector('#feedback2').style.backgroundColor = '#92201c49';
            document.querySelector('.li').style.color = 'red';
        });
    };

    let solution = document.querySelector('.btn');
    solution.addEventListener('click', function (event) {
        document.querySelector('.feedback3').style.color = 'white';
    });


    let eye = document.querySelector('.eye');
    let btn = document.querySelector('.btn-eye');

    eye.addEventListener('click', function () {
        btn.classList.toggle('visible');
        if (btn.classList.contains('visible')) {
            document.querySelector('#a').style.opacity = "0.4";

            eye.src = 'images/no-view.png';
            document.querySelector('#a').style.textDecoration = "line-through";
        }
        else {
            document.querySelector('#a').style.opacity = "1";
            eye.src = 'images/eye.png';
            document.querySelector('#a').style.textDecoration = "none";
        }

    });

    let eye1 = document.querySelector('.eye1');
    let btn1 = document.querySelector('.btn-eye1');
    eye1.addEventListener
    btn1.addEventListener('click', function () {
        eye1.classList.toggle('visible');
        if (eye1.classList.contains('visible')) {
            document.querySelector('#b').style.opacity = "1";
            eye1.src = 'images/eye.png';
            document.querySelector('#b').style.textDecoration = "none";
        }
        else {
            document.querySelector('#b').style.opacity = "0.4";
            eye1.src = 'images/no-view.png';
            document.querySelector('#b').style.textDecoration = "line-through";
        }
    });

    let eye2 = document.querySelector('.eye2');
    let btn2 = document.querySelector('.btn-eye2');
    eye2.addEventListener
    btn2.addEventListener('click', function () {
        eye2.classList.toggle('visible');
        if (eye2.classList.contains('visible')) {
            document.querySelector('#c').style.opacity = "1";
            eye2.src = 'images/eye.png';
            document.querySelector('#c').style.textDecoration = "none";
        }
        else {
            document.querySelector('#c').style.opacity = "0.4";
            eye2.src = 'images/no-view.png';
            document.querySelector('#c').style.textDecoration = "line-through";
        }
    });

    let eye3 = document.querySelector('.eye3');
    let btn3 = document.querySelector('.btn-eye3');
    eye3.addEventListener
    btn3.addEventListener('click', function () {
        eye3.classList.toggle('visible');
        if (eye3.classList.contains('visible')) {
            document.querySelector('#d').style.opacity = "1";
            eye3.src = 'images/eye.png';
            document.querySelector('#d').style.textDecoration = "none";
        }
        else {
            document.querySelector('#d').style.opacity = "0.4";
            eye3.src = 'images/no-view.png';
            document.querySelector('#d').style.textDecoration = "line-through";
        }
    });
});






document.addEventListener('DOMContentLoaded', function () {

    // When click  on correct answer button, set the green color
    let correct1 = document.querySelector('.correct1');
    correct1.addEventListener('click', function (event) {
        correct1.style.border = '2px solid #07a014c7';
        correct1.style.backgroundColor = '#07a0142c';
        document.querySelector('#feedback21').innerHTML = "✔️";
        document.querySelector('#feedback21').style.backgroundColor = '#26921c4f';
        document.querySelector('.li1').style.color = 'green';
    });


    // When click  on incorrect answer button, set the red color
    let incorrects1 = document.querySelectorAll('.incorrect1');
    for (let i = 0; i < incorrects1.length; i++) {
        incorrects1[i].addEventListener('click', function (event) {
            incorrects1[i].style.border = '2px solid #c00606f6';
            incorrects1[i].style.backgroundColor = '#92201c49';
            document.querySelector('#feedback21').innerHTML = "❌";
            document.querySelector('#feedback21').style.backgroundColor = '#92201c49';
            document.querySelector('.li1').style.color = 'red';
        });
    };

    let solution1 = document.querySelector('#check1');
    solution1.addEventListener('click', function (event) {
        document.querySelector('.feedback4').style.color = 'white';
    });



    let eye4 = document.querySelector('.eye4');
    let btn4 = document.querySelector('.btn-eye4');
    eye4.addEventListener
    btn4.addEventListener('click', function () {
        eye4.classList.toggle('visible');
        if (eye4.classList.contains('visible')) {
            document.querySelector('#a1').style.opacity = "1";
            eye4.src = 'images/eye.png';
            document.querySelector('#a1').style.textDecoration = "none";
        }
        else {
            document.querySelector('#a1').style.opacity = "0.4";
            eye4.src = 'images/no-view.png';
            document.querySelector('#a1').style.textDecoration = "line-through";
        }
    });

    let eye5 = document.querySelector('.eye5');
    let btn5 = document.querySelector('.btn-eye5');

    eye5.addEventListener('click', function () {
        btn5.classList.toggle('visible');
        if (btn5.classList.contains('visible')) {
            document.querySelector('#b1').style.opacity = "0.4";

            eye5.src = 'images/no-view.png';
            document.querySelector('#b1').style.textDecoration = "line-through";
        }
        else {
            document.querySelector('#b1').style.opacity = "1";
            eye5.src = 'images/eye.png';
            document.querySelector('#b1').style.textDecoration = "none";
        }

    });

    let eye6 = document.querySelector('.eye6');
    let btn6 = document.querySelector('.btn-eye6');
    eye6.addEventListener
    btn6.addEventListener('click', function () {
        eye6.classList.toggle('visible');
        if (eye6.classList.contains('visible')) {
            document.querySelector('#c1').style.opacity = "1";
            eye6.src = 'images/eye.png';
            document.querySelector('#c1').style.textDecoration = "none";
        }
        else {
            document.querySelector('#c1').style.opacity = "0.4";
            eye6.src = 'images/no-view.png';
            document.querySelector('#c1').style.textDecoration = "line-through";
        }
    });

    let eye7 = document.querySelector('.eye7');
    let btn7 = document.querySelector('.btn-eye7');
    eye7.addEventListener
    btn7.addEventListener('click', function () {
        eye7.classList.toggle('visible');
        if (eye7.classList.contains('visible')) {
            document.querySelector('#d1').style.opacity = "1";
            eye7.src = 'images/eye.png';
            document.querySelector('#d1').style.textDecoration = "none";
        }
        else {
            document.querySelector('#d1').style.opacity = "0.4";
            eye7.src = 'images/no-view.png';
            document.querySelector('#d1').style.textDecoration = "line-through";
        }
    });
})




    document.addEventListener('DOMContentLoaded', function () {

        // When click  on correct answer button, set the green color
        let correct2 = document.querySelector('.correct2');
        correct2.addEventListener('click', function (event) {
            correct2.style.border = '2px solid #07a014c7';
            correct2.style.backgroundColor = '#07a0142c';
            document.querySelector('#feedback22').innerHTML = "✔️";
            document.querySelector('#feedback22').style.backgroundColor = '#26921c4f';
            document.querySelector('.li2').style.color = 'green';
        });
    
    
        // When click  on incorrect answer button, set the red color
        let incorrects2 = document.querySelectorAll('.incorrect2');
        for (let i = 0; i < incorrects2.length; i++) {
            incorrects2[i].addEventListener('click', function (event) {
                incorrects2[i].style.border = '2px solid #c00606f6';
                incorrects2[i].style.backgroundColor = '#92201c49';
                document.querySelector('#feedback22').innerHTML = "❌";
                document.querySelector('#feedback22').style.backgroundColor = '#92201c49';
                document.querySelector('.li2').style.color = 'red';
            });
        };
    
        let solution2 = document.querySelector('#check2');
        solution2.addEventListener('click', function (event) {
            document.querySelector('.feedback5').style.color = 'white';
        });
    
    
    
        let eye8 = document.querySelector('.eye8');
        let btn8 = document.querySelector('.btn-eye8');
        eye8.addEventListener
        btn8.addEventListener('click', function () {
            eye8.classList.toggle('visible');
            if (eye8.classList.contains('visible')) {
                document.querySelector('#a2').style.opacity = "1";
                eye8.src = 'images/eye.png';
                document.querySelector('#a2').style.textDecoration = "none";
            }
            else {
                document.querySelector('#a2').style.opacity = "0.4";
                eye8.src = 'images/no-view.png';
                document.querySelector('#a2').style.textDecoration = "line-through";
            }
        });
    
        let eye9 = document.querySelector('.eye9');
        let btn9 = document.querySelector('.btn-eye9');
    
        eye9.addEventListener('click', function () {
            btn9.classList.toggle('visible');
            if (btn9.classList.contains('visible')) {
                document.querySelector('#b2').style.opacity = "0.4";
    
                eye9.src = 'images/no-view.png';
                document.querySelector('#b2').style.textDecoration = "line-through";
            }
            else {
                document.querySelector('#b2').style.opacity = "1";
                eye9.src = 'images/eye.png';
                document.querySelector('#b2').style.textDecoration = "none";
            }
    
        });
    
        let eye10 = document.querySelector('.eye10');
        let btn10 = document.querySelector('.btn-eye10');
        eye10.addEventListener
        btn10.addEventListener('click', function () {
            eye10.classList.toggle('visible');
            if (eye10.classList.contains('visible')) {
                document.querySelector('#c2').style.opacity = "1";
                eye10.src = 'images/eye.png';
                document.querySelector('#c2').style.textDecoration = "none";
            }
            else {
                document.querySelector('#c2').style.opacity = "0.4";
                eye10.src = 'images/no-view.png';
                document.querySelector('#c2').style.textDecoration = "line-through";
            }
        });
    
        let eye11 = document.querySelector('.eye11');
        let btn11 = document.querySelector('.btn-eye11');
        eye11.addEventListener
        btn11.addEventListener('click', function () {
            eye11.classList.toggle('visible');
            if (eye11.classList.contains('visible')) {
                document.querySelector('#d2').style.opacity = "1";
                eye11.src = 'images/eye.png';
                document.querySelector('#d2').style.textDecoration = "none";
            }
            else {
                document.querySelector('#d2').style.opacity = "0.4";
                eye11.src = 'images/no-view.png';
                document.querySelector('#d2').style.textDecoration = "line-through";
            }
        });
    });

        document.addEventListener('DOMContentLoaded', function () {

            // When click  on correct answer button, set the green color
            let correct3 = document.querySelector('.correct3');
            correct3.addEventListener('click', function (event) {
                correct3.style.border = '2px solid #07a014c7';
                correct3.style.backgroundColor = '#07a0142c';
                document.querySelector('#feedback23').innerHTML = "✔️";
                document.querySelector('#feedback23').style.backgroundColor = '#26921c4f';
                document.querySelector('.li3').style.color = 'green';
            });
        
        
            // When click  on incorrect answer button, set the red color
            let incorrects3 = document.querySelectorAll('.incorrect3');
            for (let i = 0; i < incorrects3.length; i++) {
                incorrects3[i].addEventListener('click', function (event) {
                    incorrects3[i].style.border = '2px solid #c00606f6';
                    incorrects3[i].style.backgroundColor = '#92201c49';
                    document.querySelector('#feedback23').innerHTML = "❌";
                    document.querySelector('#feedback23').style.backgroundColor = '#92201c49';
                    document.querySelector('.li3').style.color = 'red';
                });
            };
        
            let solution3 = document.querySelector('#check4');
            solution3.addEventListener('click', function (event) {
                document.querySelector('.feedback6').style.color = 'white';
            });
        
        
        
            let eye12 = document.querySelector('.eye12');
            let btn12 = document.querySelector('.btn-eye12');
            eye12.addEventListener
            btn12.addEventListener('click', function () {
                eye12.classList.toggle('visible');
                if (eye12.classList.contains('visible')) {
                    document.querySelector('#a3').style.opacity = "1";
                    eye12.src = 'images/eye.png';
                    document.querySelector('#a3').style.textDecoration = "none";
                }
                else {
                    document.querySelector('#a3').style.opacity = "0.4";
                    eye12.src = 'images/no-view.png';
                    document.querySelector('#a3').style.textDecoration = "line-through";
                }
            });
        
            let eye13 = document.querySelector('.eye13');
            let btn13 = document.querySelector('.btn-eye13');
        
            eye13.addEventListener('click', function () {
                btn13.classList.toggle('visible');
                if (btn13.classList.contains('visible')) {
                    document.querySelector('#b3').style.opacity = "0.4";
        
                    eye13.src = 'images/no-view.png';
                    document.querySelector('#b3').style.textDecoration = "line-through";
                }
                else {
                    document.querySelector('#b3').style.opacity = "1";
                    eye13.src = 'images/eye.png';
                    document.querySelector('#b3').style.textDecoration = "none";
                }
        
            });
        
            let eye14 = document.querySelector('.eye14');
            let btn14 = document.querySelector('.btn-eye14');
            eye14.addEventListener
            btn14.addEventListener('click', function () {
                eye14.classList.toggle('visible');
                if (eye14.classList.contains('visible')) {
                    document.querySelector('#c3').style.opacity = "1";
                    eye14.src = 'images/eye.png';
                    document.querySelector('#c3').style.textDecoration = "none";
                }
                else {
                    document.querySelector('#c3').style.opacity = "0.4";
                    eye14.src = 'images/no-view.png';
                    document.querySelector('#c3').style.textDecoration = "line-through";
                }
            });
        
            let eye15 = document.querySelector('.eye15');
            let btn15 = document.querySelector('.btn-eye15');
            eye15.addEventListener
            btn15.addEventListener('click', function () {
                eye15.classList.toggle('visible');
                if (eye15.classList.contains('visible')) {
                    document.querySelector('#d3').style.opacity = "1";
                    eye15.src = 'images/eye.png';
                    document.querySelector('#d3').style.textDecoration = "none";
                }
                else {
                    document.querySelector('#d3').style.opacity = "0.4";
                    eye15.src = 'images/no-view.png';
                    document.querySelector('#d3').style.textDecoration = "line-through";
                }
            });
        });


            document.addEventListener('DOMContentLoaded', function () {

                // When click  on correct answer button, set the green color
                let correct4 = document.querySelector('.correct4');
                correct4.addEventListener('click', function (event) {
                    correct4.style.border = '2px solid #07a014c7';
                    correct4.style.backgroundColor = '#07a0142c';
                    document.querySelector('#feedback24').innerHTML = "✔️";
                    document.querySelector('#feedback24').style.backgroundColor = '#26921c4f';
                    document.querySelector('.li4').style.color = 'green';
                });
            
            
                // When click  on incorrect answer button, set the red color
                let incorrects4 = document.querySelectorAll('.incorrect4');
                for (let i = 0; i < incorrects4.length; i++) {
                    incorrects4[i].addEventListener('click', function (event) {
                        incorrects4[i].style.border = '2px solid #c00606f6';
                        incorrects4[i].style.backgroundColor = '#92201c49';
                        document.querySelector('#feedback24').innerHTML = "❌";
                        document.querySelector('#feedback24').style.backgroundColor = '#92201c49';
                        document.querySelector('.li4').style.color = 'red';
                    });
                };
            
                let solution4 = document.querySelector('#check5');
                solution4.addEventListener('click', function (event) {
                    document.querySelector('.feedback7').style.color = 'white';
                });
            
            
            
                let eye16 = document.querySelector('.eye16');
                let btn16 = document.querySelector('.btn-eye16');
                eye16.addEventListener
                btn16.addEventListener('click', function () {
                    eye16.classList.toggle('visible');
                    if (eye16.classList.contains('visible')) {
                        document.querySelector('#a4').style.opacity = "1";
                        eye16.src = 'images/eye.png';
                        document.querySelector('#a4').style.textDecoration = "none";
                    }
                    else {
                        document.querySelector('#a4').style.opacity = "0.4";
                        eye16.src = 'images/no-view.png';
                        document.querySelector('#a4').style.textDecoration = "line-through";
                    }
                });
            
                let eye17 = document.querySelector('.eye17');
                let btn17 = document.querySelector('.btn-eye17');
                eye17.addEventListener
                btn17.addEventListener('click', function () {
                    eye17.classList.toggle('visible');
                    if (eye17.classList.contains('visible')) {
                        document.querySelector('#b4').style.opacity = "0.4";
                        eye17.src = 'images/no-view.png';
                        document.querySelector('#b4').style.textDecoration = "line-through";
                    }
                    else {
                        document.querySelector('#b4').style.opacity = "1";
                        eye17.src = 'images/eye.png';
                        document.querySelector('#b4').style.textDecoration = "none";
                    }
            
                });
            
                let eye18 = document.querySelector('.eye18');
                let btn18 = document.querySelector('.btn-eye18');
                eye18.addEventListener
                btn18.addEventListener('click', function () {
                    eye18.classList.toggle('visible');
                    if (eye18.classList.contains('visible')) {
                        document.querySelector('#c4').style.opacity = "1";
                        eye18.src = 'images/eye.png';
                        document.querySelector('#c4').style.textDecoration = "none";
                    }
                    else {
                        document.querySelector('#c4').style.opacity = "0.4";
                        eye18.src = 'images/no-view.png';
                        document.querySelector('#c4').style.textDecoration = "line-through";
                    }
                });
            
                let eye19 = document.querySelector('.eye19');
                let btn19 = document.querySelector('.btn-eye19');
                eye19.addEventListener
                btn19.addEventListener('click', function () {
                    eye19.classList.toggle('visible');
                    if (eye19.classList.contains('visible')) {
                        document.querySelector('#d4').style.opacity = "1";
                        eye19.src = 'images/eye.png';
                        document.querySelector('#d4').style.textDecoration = "none";
                    }
                    else {
                        document.querySelector('#d4').style.opacity = "0.4";
                        eye19.src = 'images/no-view.png';
                        document.querySelector('#d4').style.textDecoration = "line-through";
                    }
                });
                     
});