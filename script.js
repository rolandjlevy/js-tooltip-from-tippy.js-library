tippy('.custom-left', {
  placement: 'top',
  animation: 'fade',
  theme: 'material',
  content: '<strong>Details:</strong> <span style="color: aqua;">this is left content</span>',
  allowHTML: true,
  maxWidth: 200,
});

tippy('.custom-right', {
  placement: 'top',
  animation: 'fade',
  theme: 'material',
  content: '<strong>Details:</strong> <span style="color: lime;">this is right content</span>',
  allowHTML: true,
  maxWidth: 200,
});

// https://atomiks.github.io/tippyjs/v6/html-content/

tippy('.btn', {
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  placement: 'top',
  animation: 'fade',
  allowHTML: true,
  theme: 'material',
  maxWidth: 250,
});