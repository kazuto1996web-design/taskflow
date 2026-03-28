// アコーディオン
const dts = document.querySelectorAll('.faq-list dt');

dts.forEach(dt => {
  dt.addEventListener('click', () => {
    const dd = dt.nextElementSibling;
    const isOpen = dd.classList.contains('open');

    document.querySelectorAll('.faq-list dd').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.faq-list dt').forEach(d => d.classList.remove('active'));

    if (!isOpen) {
      dd.classList.add('open');
      dt.classList.add('active');
    }
  });
});