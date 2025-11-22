// 1. SEKME DEĞİŞTİRME (Tab Switching)
function switchTab(viewId, element) {
    // Tüm ekranları gizle
    document.querySelectorAll('.tab-view').forEach(view => {
        view.style.display = 'none';
    });

    // İstenen ekranı aç
    const target = document.getElementById('view-' + viewId);
    if (target) {
        target.style.display = 'block';
    }

    // Menü renklerini ayarla (Ortadaki büyük buton hariç)
    document.querySelectorAll('.nav-item:not(.center-fab)').forEach(item => {
        item.classList.remove('active');
    });

    // Tıklanan menüyü aktif yap (Eğer ortadaki buton değilse)
    if (element && !element.classList.contains('center-fab')) {
        element.classList.add('active');
    }
}

// 2. MODAL (Pencere) AÇMA / KAPATMA
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
    // Bildirim açıldıysa kırmızı noktayı gizle
    if(modalId === 'modal-notifications') {
        const dot = document.getElementById('notif-dot');
        if(dot) dot.style.display = 'none';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Rapor modalıysa içeriği sıfırla
    if(modalId === 'modal-report') {
        resetReportModal();
    }
}

// 3. RAPORLAMA İŞLEMLERİ
function userFileUploaded() {
    const zone = document.querySelector('.upload-zone');
    const btn = document.getElementById('btn-send-report');
    
    // Yüklendi efekti
    zone.classList.add('active');
    zone.innerHTML = '<i class="fas fa-check-circle" style="color:green; font-size:2rem;"></i><p>Fotoğraf Hazır</p>';
    
    // Gönder butonunu aktif et
    btn.classList.remove('disabled');
}

function sendReport() {
    // Adım 1'i gizle, Adım 2'yi göster
    document.getElementById('report-step-1').style.display = 'none';
    document.getElementById('report-step-2').style.display = 'block';
}

function finishReport() {
    closeModal('modal-report');
    alert("🎉 Harika! Bildirimin bize ulaştı. Onaylanınca puanın yüklenecek.");
}

function resetReportModal() {
    document.getElementById('report-step-1').style.display = 'block';
    document.getElementById('report-step-2').style.display = 'none';
    const zone = document.querySelector('.upload-zone');
    zone.classList.remove('active');
    zone.innerHTML = '<i class="fas fa-cloud-upload-alt"></i><p>Fotoğraf Yükle</p>';
    document.getElementById('btn-send-report').classList.add('disabled');
}

// 4. HARİTA BİLGİ BALONU (Toast)
function showMapInfo(title, desc, color) {
    const toast = document.getElementById('map-toast');
    
    document.getElementById('toast-title').innerText = title;
    document.getElementById('toast-title').style.color = color;
    document.getElementById('toast-desc').innerText = desc;
    
    toast.style.display = 'block';
    
    // 3 saniye sonra otomatik kaybolsun
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}
