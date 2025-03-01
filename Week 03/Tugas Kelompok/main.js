document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("donationForm");
    const nameInput = document.getElementById("name");
    const amountInput = document.getElementById("amount");
    const messageInput = document.getElementById("message");
    const donationList = document.getElementById("donationList");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        const rawAmount = amountInput.value.trim(); // Ambil nilai input sebagai string asli
        const amount = Number(rawAmount.replace(/,/g, "")); // Ubah ke angka, tetap mempertahankan tanda negatif
        const message = messageInput.value.trim();
        
        // Validasi input nama (tidak boleh ada angka)
        if (!/^[a-zA-Z\s']+$/.test(name)) {  
            alert("Nama hanya boleh mengandung huruf, spasi, dan petik satu!");
            return; 
        }

        // Validasi jumlah donasi (tidak boleh negatif dan minimal 10.000)
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
