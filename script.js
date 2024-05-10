function pointer(grade) {
    switch (grade.toUpperCase()) {
        case "O":
            return 10;
        case "A+":
            return 9;
        case "A":
            return 8;
        case "B+":
            return 7;
        case "B":
            return 6;
        case "C":
            return 5;
        case "F":
            return 4;
        default:
            return 0; // Default value for unknown grades
    }
}

function calculateCGPA() {
    var math = document.getElementById("mathGrade").value;
    var cds = document.getElementById("cdsGrade").value;
    var phy = document.getElementById("phyGrade").value;
    var bmp = document.getElementById("bmpGrade").value;
    var bee = document.getElementById("beeGrade").value;
    var etw = document.getElementById("etwGrade").value;
    var beelab = document.getElementById("beelabGrade").value;
    var cdslab = document.getElementById("cdslabGrade").value;
    var etwlab = document.getElementById("etwlabGrade").value;
    var phylab = document.getElementById("phylabGrade").value;
    var yoga = document.getElementById("yogaGrade").value;

    var a = pointer(math) * 3;
    var b = pointer(phy) * 3;
    var c = pointer(cds) * 3;
    var d = pointer(bmp) * 2;
    var e = pointer(bee) * 2;
    var f = pointer(etw) * 2;
    var g = pointer(cdslab) * 1.5;
    var h = pointer(etwlab) * 1.5;
    var i = pointer(phylab) * 1.5;
    var k = pointer(beelab) * 1.5;
    var j = pointer(yoga);

    var cgpa = ((a + b + c + d + e + f + g + h + i + k + j) / 220) * 10;

    document.getElementById("result").innerHTML = "Your CGPA will be: " + cgpa.toFixed(2);
}