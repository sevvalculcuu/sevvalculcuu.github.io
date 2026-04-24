document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const applicationForm = document.getElementById('applicationForm');
    const resultArea = document.getElementById('resultArea');
    const summaryCard = document.getElementById('summaryCard');

    // 1. Tema Değiştirme (Theme Toggle)
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('bg-dark')) {
            body.classList.remove('bg-dark', 'text-white');
            body.classList.add('bg-light', 'text-dark');
            themeToggle.textContent = 'Koyu Temaya Geç';
            themeToggle.className = 'btn btn-outline-dark btn-lg';
            
            // Update other elements if needed
            document.querySelectorAll('.card').forEach(card => {
                card.classList.remove('bg-secondary', 'text-white');
            });
            document.querySelector('nav').className = 'navbar navbar-expand-lg navbar-dark bg-dark sticky-top';
        } else {
            body.classList.remove('bg-light', 'text-dark');
            body.classList.add('bg-dark', 'text-white');
            themeToggle.textContent = 'Açık Temaya Geç';
            themeToggle.className = 'btn btn-outline-light btn-lg';

            document.querySelectorAll('.card').forEach(card => {
                card.classList.add('bg-secondary', 'text-white');
            });
            document.querySelector('nav').className = 'navbar navbar-expand-lg navbar-light bg-light sticky-top';
        }
    });

    // 2. Form Verilerinden Özet Üretme (Form Handling)
    applicationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const department = document.getElementById('department').value;
        const grade = document.getElementById('grade').value;
        const session = document.getElementById('session').value;
        const type = document.getElementById('type').value;
        const message = document.getElementById('message').value.trim();
        const agreement = document.getElementById('agreement').checked;

        // Validation
        if (!name || !email || !department || !grade || !session || !type || !message || !agreement) {
            alert('Lütfen tüm alanları doldurun ve sözleşmeyi kabul edin!');
            return;
        }

        // Generate Summary
        const summaryHtml = `
            <div class="card shadow-lg border-0">
                <div class="card-header bg-primary text-white py-3">
                    <h5 class="mb-0">Başvuru Özeti</h5>
                </div>
                <div class="card-body p-4">
                    <div class="row mb-3">
                        <div class="col-sm-4 fw-bold text-muted">Ad Soyad:</div>
                        <div class="col-sm-8">${name}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-4 fw-bold text-muted">E-posta:</div>
                        <div class="col-sm-8">${email}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-4 fw-bold text-muted">Bölüm:</div>
                        <div class="col-sm-8">${department}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-4 fw-bold text-muted">Sınıf:</div>
                        <div class="col-sm-8">${grade}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-4 fw-bold text-muted">Oturum:</div>
                        <div class="col-sm-8"><span class="badge bg-info">${session}</span></div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-4 fw-bold text-muted">Katılım Türü:</div>
                        <div class="col-sm-8"><span class="badge bg-success">${type}</span></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 fw-bold text-muted">Kısa Mesaj:</div>
                        <div class="col-sm-8">${message}</div>
                    </div>
                </div>
                <div class="card-footer bg-light text-center py-3">
                    <span class="text-success fw-bold">✓ Başvurunuz başarıyla alındı!</span>
                </div>
            </div>
        `;

        summaryCard.innerHTML = summaryHtml;
        resultArea.style.display = 'block';
        
        // Smooth scroll to result
        resultArea.scrollIntoView({ behavior: 'smooth' });
    });

    // Handle Form Clear
    const clearBtn = document.querySelector('button[type="reset"]');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            resultArea.style.display = 'none';
        });
    }
});
