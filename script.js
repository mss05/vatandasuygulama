// TAB DEĞİŞTİRME
function switchTab(viewId, element) {
    // Tüm ekranları gizle
    document.querySelectorAll('.tab-view').forEach(view => view.style.display = 'none');
    // İstenen ekranı aç
    document.getElementById('view-' + viewId).style.display = 'block';
    
    // Menü renklerini ayarla (FAB butonu hariç)
    document.querySelectorAll('.nav-item:not(.center-fab)').forEach(item => item.classList.remove('active'));
    
    if (element && !element.classList.contains('center-fab')) {
        element.classList.add('active');
    }
}

// MODAL AÇ/KAPA
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    // Modalı temizle
    document.getElementById('report-step-1').style.display = 'block';
    document.getElementById('report-step-2').style.display = 'none';
    const zone = document.querySelector('.upload-zone');
    zone.classList.remove('active');
    zone.innerHTML = '<i class="fas fa-cloud-upload-alt"></i><p>Fotoğraf Yükle</p>';
    document.getElementById('btn-send-report').classList.add('disabled');
}

// FOTOĞRAF YÜKLEME EFEKTİ
function userFileUploaded() {
    const zone = document.querySelector('.upload-zone');
    zone.classList.add('active');
    zone.innerHTML = '<i class="fas fa-check-circle"></i><p>Fotoğraf Hazır</p>';
    document.getElementById('btn-send-report').classList.remove('disabled');
}

// RAPOR GÖNDERME
function sendReport() {
    document.getElementById('report-step-1').style.display = 'none';
    document.getElementById('report-step-2').style.display = 'block';
}

// İŞLEM BİTİŞ
function finishReport() {
    closeModal('modal-report');
    alert("🎉 Tebrikler! Bildirimin onay sürecine alındı.");
}
