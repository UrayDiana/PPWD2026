const tulisan = document.getElementById("typing-text");

if (tulisan) {
    const nama = "Diana.";
    let i = 0;
    let isDeleting = false;

    function ketik() {
        if (!isDeleting) {
            tulisan.textContent = nama.substring(0, i + 1);
            i++;

            if (i === nama.length) {
                isDeleting = true;
                setTimeout(ketik, 2000);
                return;
            }
        } else {
            tulisan.textContent = nama.substring(0, i - 1);
            i--;

            if (i === 0) {
                isDeleting = false;
            }
        }

        setTimeout(ketik, isDeleting ? 100 : 150);
    }

    ketik();
}

const form = document.getElementById("contactForm");

if (form) {
    form.onsubmit = async function(e) {
        e.preventDefault();

        const hasil = document.getElementById("hasil");

        const response = await fetch(
            "https://formsubmit.co/ajax/h1101251024@student.untan.ac.id",
            {
                method: "POST",
                body: new FormData(form)
            }
        );

        hasil.textContent = response.ok
            ? "Pesan berhasil dikirim, terima kasih ♡"
            : "Pesan gagal dikirim.";

        if (response.ok) {
            form.reset();
        }
    };
}
//