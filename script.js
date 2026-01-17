
    function checkAnswer() {
        let score = 0;

        const answers = {
            q1: "c",
            q2: "b",
            q3: "c",
            q4: "c",
            q5: "a"
        };

        for (let key in answers) {
            let selected = document.querySelector('input[name="' + key + '"]:checked');
            if (selected && selected.value === answers[key]) {
                score += 20;
            }
        }

        let resultText = "Skor Anda: " + score + "<br>";

        if (score >= 70) {
            resultText += "LULUS ✅";
        } else {
            resultText += "GAGAL ❌";
        }

        document.getElementById("hasil").innerHTML = resultText;
        document.getElementById("ulang").style.display = "block";
        
    }
