document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("donationForm");
    const nameInput = document.getElementById("name");
    const amountInput = document.getElementById("amount");
    const messageInput = document.getElementById("message");
    const donationList = document.getElementById("donationList");

    messageInput.addEventListener("input",function() {
        if (this.value.length > 100) {
            this.value = this.value.slice(0,100);
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        const rawAmount = amountInput.value.trim(); 
        const amount = Number(rawAmount.replace(/,/g, "")); 
        const message = messageInput.value.trim();
        
        
        if (!/^[a-zA-Z\s']+$/.test(name)) {  
            alert("Nama hanya boleh mengandung huruf, spasi, dan petik satu!");
            return; 
        }

        if (isNaN(amount) || amount < 10000) {
            alert("Jumlah donasi minimal Rp 10.000");
            return;
        }
        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>Rp ${amount.toLocaleString()}</td>
            <td>${message}</td>
            <td><button class="delete-btn">Hapus</button></td>
        `;
        donationList.appendChild(row);
        
        nameInput.value = "";
        amountInput.value = "";
        messageInput.value = "";
    });

    donationList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            event.target.closest("tr").remove();
        }
    });
});
