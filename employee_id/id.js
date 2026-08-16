function generate() {
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const dept = document.getElementById("dept").value;

    if (!name || !role || !dept)
        return alert("Please fill all details");

    document.getElementById("cname").textContent = name;
    document.getElementById("cid").textContent =
        "EMP-" + Math.floor(1000 + Math.random() * 9000);
    document.getElementById("crole").textContent = role;
    document.getElementById("cdept").textContent = dept;
    document.getElementById("card").style.display = "block";
}