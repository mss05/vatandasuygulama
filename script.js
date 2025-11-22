// TAB DEĞİŞTİRME
function switchTab(viewId, element) {
    document.querySelectorAll('.tab-view').forEach(view => view.style.display = 'none');
    document.getElementById('view-' + viewId).style.display = 'block';
    
    document.querySelectorAll('.nav-item:not(.center-fab)').forEach(item => item.classList.remove('active'));
    if (element && !element.classList.contains('center-fab')) {
        element.classList.add('active');
    }
}

// MODAL AÇ/KAPA
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
    // Bildirim açıldıysa kırmızı noktayı gizle
    if(modalId === 'modal-notifications') {
        document.getElementById('notif-dot').style.display = 'none';
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    // Report modalını resetle
    if(modalId === 'modal-report') {
        document.getElementById('report-step-1').style.display = 'block';
        document.getElementById('report-step-2').style.display = 'none';
        document.querySelector('.upload-zone').classList.remove('active');
        document.querySelector('.upload-zone p').innerText = "Fotoğraf Yükle";
        document.getElementById('btn-send-report').classList.add('disabled');
    }
}

// DOSYA YÜKLEME EFEKTİ
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

function finishReport() {
    closeModal('modal-report');
    alert("Puan hesabına eklendi! 🌳");
}

// HARİTA BİLGİ BALONU
function showMapInfo(title, desc, color) {
    const toast = document.getElementById('map-toast');
    document.getElementById('toast-title').innerText = title;
    document.getElementById('toast-desc').innerText = desc;
    document.getElementById('toast-title').style.color = color;
    
    toast.style.display = 'block';
    
    // 3 saniye sonra kaybolsun
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}
