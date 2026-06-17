(function () {
  const icons = {
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 3.08V17h16V8.08l-7.42 5.3a1 1 0 0 1-1.16 0L4 8.08ZM18.12 7H5.88L12 11.37 18.12 7Z" fill="currentColor"/></svg>',
    wechat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.4 5C5.86 5 3 7.35 3 10.24c0 1.67.96 3.16 2.46 4.12l-.58 1.85 2.18-1.08c.73.22 1.52.35 2.34.35h.37a5.1 5.1 0 0 1-.16-1.27c0-2.8 2.72-5.06 6.08-5.06h.1C15.21 6.78 12.57 5 9.4 5Zm-2.18 3.72a.78.78 0 1 1 0 1.56.78.78 0 0 1 0-1.56Zm4.36 0a.78.78 0 1 1 0 1.56.78.78 0 0 1 0-1.56Zm4.11 1.63c-2.77 0-5.01 1.78-5.01 3.98s2.24 3.98 5.01 3.98c.63 0 1.23-.09 1.78-.26l1.73.86-.46-1.48c1.19-.74 1.96-1.86 1.96-3.1 0-2.2-2.24-3.98-5.01-3.98Zm-1.69 2.83a.63.63 0 1 1 0 1.26.63.63 0 0 1 0-1.26Zm3.38 0a.63.63 0 1 1 0 1.26.63.63 0 0 1 0-1.26Z" fill="currentColor"/></svg>',
    moments: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8a1 1 0 0 1 1 1v3.26l2.31-2.3a1 1 0 1 1 1.41 1.41l-2.3 2.31h3.26a1 1 0 1 1 0 2h-3.26l2.3 2.31a1 1 0 1 1-1.41 1.41L13 11.9v3.26a1 1 0 1 1-2 0V11.9l-2.31 2.3a1 1 0 1 1-1.41-1.41l2.3-2.31H6.32a1 1 0 1 1 0-2h3.26l-2.3-2.31a1 1 0 0 1 1.41-1.41L11 7.06V3.8a1 1 0 0 1 1-1Zm0 14.3a2.05 2.05 0 1 1 0 4.1 2.05 2.05 0 0 1 0-4.1Z" fill="currentColor"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.28 10.16 22.23 1h-1.88l-6.9 7.95L7.94 1H1.58l8.34 12.04L1.58 22.65h1.88l7.29-8.4 5.82 8.4h6.36l-8.65-12.49Zm-2.58 2.98-.85-1.2L4.13 2.4h2.91l5.42 7.7.84 1.2 7.05 10.03h-2.91l-5.74-8.18Z" fill="currentColor"/></svg>',
    qq: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5c-2.58 0-4.67 2.36-4.67 5.27 0 1.05.16 2.01.43 2.85-.98.66-1.61 1.68-1.61 2.83 0 .68.23 1.32.62 1.85-.5.54-.86 1.27-.86 2.03 0 1.18.86 1.86 2.16 1.86.62 0 1.32-.16 2.02-.47.57.43 1.21.68 1.91.68s1.34-.25 1.91-.68c.7.31 1.4.47 2.02.47 1.3 0 2.16-.68 2.16-1.86 0-.76-.36-1.49-.86-2.03.39-.53.62-1.17.62-1.85 0-1.15-.63-2.17-1.61-2.83.27-.84.43-1.8.43-2.85C16.67 4.86 14.58 2.5 12 2.5Zm-1.72 6.2c-.42 0-.76-.45-.76-1s.34-1 .76-1 .76.45.76 1-.34 1-.76 1Zm3.44 0c-.42 0-.76-.45-.76-1s.34-1 .76-1 .76.45.76 1-.34 1-.76 1Zm-1.72 2.15c.84 0 1.66.22 2.35.61-.54.55-1.37.9-2.35.9s-1.81-.35-2.35-.9c.69-.39 1.51-.61 2.35-.61Z" fill="currentColor"/></svg>'
  };

  const platforms = [
    { key: 'email', label: 'Email' },
    { key: 'wechat', label: 'WeChat' },
    { key: 'moments', label: 'WeChat Moments' },
    { key: 'x', label: 'X' },
    { key: 'qq', label: 'QQ' }
  ];

  let modal;
  let activePosterUrl;

  function absoluteUrl(url) {
    return new URL(url || window.location.href, window.location.href).href;
  }

  function canonicalCurrentUrl() {
    const canonical = document.querySelector('link[rel="canonical"]');
    return absoluteUrl(canonical ? canonical.getAttribute('href') : window.location.href);
  }

  function pageTitle() {
    const heading = document.querySelector('.page-head h1, h1');
    return heading ? heading.textContent.trim() : document.title.replace(/\s+-\s+EASE$/, '').trim();
  }

  function pageMeta() {
    const meta = document.querySelector('.page-head .meta');
    return meta ? meta.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function pageEyebrow() {
    const eyebrow = document.querySelector('.page-head .eyebrow');
    return eyebrow ? eyebrow.textContent.replace(/\s+/g, ' ').trim() : 'EASE';
  }

  function firstArticleText() {
    const paragraphs = Array.from(document.querySelectorAll('.article p, .pub-authors, .pub-journal, .proj-card__desc'));
    const text = paragraphs
      .map(item => item.textContent.replace(/\s+/g, ' ').trim())
      .filter(Boolean)
      .join(' ');
    return text || 'Emerging Air pollution and Sustainable Environment Research Group';
  }

  function firstShareImage(target) {
    const localImg = target.closest('.pub-item, .proj-card')?.querySelector('img');
    const pageImg = document.querySelector('.article-figure img, main img');
    const img = localImg || pageImg;
    return img ? img.getAttribute('src') : '';
  }

  function shareData(target) {
    return {
      title: target.dataset.shareTitle || pageTitle(),
      url: absoluteUrl(target.dataset.shareUrl || canonicalCurrentUrl()),
      text: target.dataset.shareText || firstArticleText(),
      eyebrow: target.dataset.shareEyebrow || pageEyebrow(),
      meta: target.dataset.shareMeta || pageMeta(),
      image: firstShareImage(target)
    };
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    } finally {
      textarea.remove();
    }
  }

  function encoded(data) {
    return {
      title: encodeURIComponent(data.title),
      url: encodeURIComponent(data.url),
      text: encodeURIComponent(data.text)
    };
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    const words = text.split(/\s+/).filter(Boolean);
    const lines = [];
    let line = '';

    words.forEach(word => {
      const testLine = line ? line + ' ' + word : word;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = testLine;
      }
    });

    if (line) lines.push(line);
    const output = lines.slice(0, maxLines);
    if (lines.length > maxLines) {
      output[maxLines - 1] = output[maxLines - 1].replace(/[,.!?;:]*$/, '') + '...';
    }

    output.forEach((item, index) => {
      ctx.fillText(item, x, y + index * lineHeight);
    });

    return y + output.length * lineHeight;
  }

  function loadImage(src) {
    if (!src) return Promise.resolve(null);
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = absoluteUrl(src);

    return new Promise(resolve => {
      image.onload = () => resolve(image);
      image.onerror = () => resolve(null);
    });
  }

  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  function drawCoverImage(ctx, image, x, y, width, height) {
    if (!image) return;
    const ratio = Math.max(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * ratio;
    const drawHeight = image.naturalHeight * ratio;
    const dx = x + (width - drawWidth) / 2;
    const dy = y + (height - drawHeight) / 2;

    ctx.save();
    roundedRect(ctx, x, y, width, height, 18);
    ctx.clip();
    ctx.drawImage(image, dx, dy, drawWidth, drawHeight);
    ctx.restore();
  }

  async function makePoster(data) {
    const width = 1200;
    const height = 1600;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    const image = await loadImage(data.image);

    ctx.fillStyle = '#faf7f2';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#f4ede2';
    ctx.fillRect(0, 0, width, 210);
    ctx.fillStyle = '#c0492f';
    ctx.fillRect(86, 92, 72, 6);

    ctx.fillStyle = '#c0492f';
    ctx.font = '600 30px Arial, sans-serif';
    ctx.fillText((data.eyebrow || 'EASE').toUpperCase(), 178, 108);

    ctx.fillStyle = '#241f1b';
    ctx.font = '600 72px Georgia, serif';
    const titleBottom = wrapText(ctx, data.title, 86, 290, 1028, 86, 6);

    ctx.fillStyle = '#8c8178';
    ctx.font = '400 32px monospace';
    const metaText = data.meta || 'EASE Research Group';
    ctx.fillText(metaText, 86, titleBottom + 28);

    let y = titleBottom + 90;
    if (image) {
      drawCoverImage(ctx, image, 86, y, 1028, 520);
      y += 590;
    } else {
      ctx.fillStyle = '#efe7db';
      roundedRect(ctx, 86, y, 1028, 300, 18);
      ctx.fill();
      ctx.fillStyle = '#2f6b6b';
      ctx.font = '600 54px Georgia, serif';
      ctx.fillText('EASE Research Group', 140, y + 165);
      y += 370;
    }

    ctx.fillStyle = '#4f463f';
    ctx.font = '400 34px Arial, sans-serif';
    wrapText(ctx, data.text, 86, y, 1028, 52, 7);

    ctx.fillStyle = '#2f6b6b';
    ctx.font = '600 34px Arial, sans-serif';
    ctx.fillText('ease-xp.github.io', 86, 1494);

    ctx.fillStyle = '#8c8178';
    ctx.font = '400 24px monospace';
    wrapText(ctx, data.url, 86, 1532, 1028, 34, 2);

    return canvas.toDataURL('image/png');
  }

  function ensureModal() {
    if (modal) return modal;

    modal = document.createElement('div');
    modal.className = 'share-poster';
    modal.hidden = true;
    modal.innerHTML = [
      '<div class="share-poster__panel" role="dialog" aria-modal="true" aria-label="Share poster">',
      '  <div class="share-poster__preview"><img alt="Generated share poster" /></div>',
      '  <div class="share-poster__side">',
      '    <div class="share-poster__top">',
      '      <h2 class="share-poster__title">Share poster</h2>',
      '      <button class="share-poster__close" type="button" aria-label="Close">x</button>',
      '    </div>',
      '    <p class="share-poster__hint"></p>',
      '    <div class="share-poster__actions">',
      '      <button class="share-poster__action share-poster__action--primary" type="button" data-action="download">Download image</button>',
      '      <button class="share-poster__action" type="button" data-action="native">Share image</button>',
      '      <button class="share-poster__action" type="button" data-action="copy">Copy link</button>',
      '      <button class="share-poster__action" type="button" data-action="open">Open platform</button>',
      '    </div>',
      '    <p class="share-poster__status" aria-live="polite"></p>',
      '  </div>',
      '</div>'
    ].join('');

    document.body.appendChild(modal);
    modal.querySelector('.share-poster__close').addEventListener('click', closeModal);
    modal.addEventListener('click', event => {
      if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !modal.hidden) closeModal();
    });
    return modal;
  }

  function closeModal() {
    if (modal) modal.hidden = true;
  }

  async function dataUrlToFile(dataUrl, filename) {
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    return new File([blob], filename, { type: 'image/png' });
  }

  function platformHint(platform) {
    if (platform === 'wechat') return 'WeChat does not provide a direct web share API. Download or share the poster image, then send it in WeChat.';
    if (platform === 'moments') return 'For WeChat Moments, save this poster image first, then post it from WeChat.';
    if (platform === 'qq') return 'QQ web sharing will open with the page link. Download the poster if you want to attach the image.';
    if (platform === 'x') return 'X can receive the page link from the browser. Download the poster if you want to attach it manually.';
    return 'A clean poster has been generated from this page. Download it or share it with the page link.';
  }

  function platformUrl(platform, data) {
    const value = encoded(data);
    if (platform === 'email') return 'mailto:?subject=' + value.title + '&body=' + value.title + '%0A' + value.url;
    if (platform === 'x') return 'https://twitter.com/intent/tweet?text=' + value.title + '&url=' + value.url;
    if (platform === 'qq') return 'https://connect.qq.com/widget/shareqq/index.html?url=' + value.url + '&title=' + value.title + '&summary=' + value.text;
    return '';
  }

  async function openPoster(platform, data) {
    const dialog = ensureModal();
    const image = dialog.querySelector('.share-poster__preview img');
    const hint = dialog.querySelector('.share-poster__hint');
    const status = dialog.querySelector('.share-poster__status');
    const openButton = dialog.querySelector('[data-action="open"]');
    const nativeButton = dialog.querySelector('[data-action="native"]');

    dialog.hidden = false;
    image.removeAttribute('src');
    hint.textContent = 'Generating poster...';
    status.textContent = '';

    try {
      activePosterUrl = await makePoster(data);
      image.src = activePosterUrl;
      hint.textContent = platformHint(platform);
      openButton.hidden = !platformUrl(platform, data);
      nativeButton.hidden = !(navigator.canShare && navigator.share && window.File);
    } catch (error) {
      hint.textContent = 'Poster generation failed. You can still share the page link.';
      openButton.hidden = !platformUrl(platform, data);
      nativeButton.hidden = true;
    }

    dialog.querySelector('[data-action="download"]').onclick = () => {
      const link = document.createElement('a');
      link.href = activePosterUrl;
      link.download = 'ease-share-poster.png';
      link.click();
      status.textContent = 'Poster image downloaded.';
    };

    dialog.querySelector('[data-action="copy"]').onclick = () => {
      copyToClipboard(data.url)
        .then(() => { status.textContent = 'Page link copied.'; })
        .catch(() => { status.textContent = 'Could not copy link.'; });
    };

    nativeButton.onclick = async () => {
      if (!activePosterUrl) return;
      try {
        const file = await dataUrlToFile(activePosterUrl, 'ease-share-poster.png');
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ title: data.title, text: data.text, url: data.url, files: [file] });
        } else {
          await navigator.share({ title: data.title, text: data.text, url: data.url });
        }
        status.textContent = 'Share panel opened.';
      } catch (error) {
        if (error && error.name !== 'AbortError') status.textContent = 'Share image is not available in this browser.';
      }
    };

    openButton.onclick = () => {
      const url = platformUrl(platform, data);
      if (platform === 'email') {
        window.location.href = url;
      } else if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    };
  }

  function initShare(target) {
    const data = shareData(target);
    const widget = document.createElement('div');
    widget.className = 'share-widget ' + (target.dataset.shareVariant || 'share-widget--inline');

    const dock = document.createElement('div');
    dock.className = 'share-dock';
    dock.setAttribute('aria-label', 'Share this page');

    platforms.forEach(platform => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'share-icon share-icon--' + platform.key;
      button.setAttribute('aria-label', 'Share to ' + platform.label);
      button.title = platform.label;
      button.innerHTML = icons[platform.key];
      button.addEventListener('click', () => openPoster(platform.key, data));
      dock.appendChild(button);
    });

    widget.appendChild(dock);
    target.replaceWith(widget);
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-share]').forEach(initShare);
  });
})();
